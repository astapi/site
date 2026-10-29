// お問い合わせを Discord に通知する Worker
// Webhook URL をクライアントに出さないための中継。Discordに送る内容はここで固定フォーマットに整形する

interface RateLimit {
  limit(options: { key: string }): Promise<{ success: boolean }>
}

interface Env {
  DISCORD_WEBHOOK_URL: string
  ALLOWED_ORIGINS: string
  ADMIN_URL: string
  RATE_LIMITER: RateLimit
}

const CATEGORY_LABELS: Record<string, string> = {
  bug: '不具合報告',
  feature: '機能要望',
  question: '質問',
  other: 'その他',
}

function corsHeaders(origin: string | null, env: Env): Record<string, string> {
  const allowed = env.ALLOWED_ORIGINS.split(',').map((o) => o.trim())
  if (!origin || !allowed.includes(origin)) return {}
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  }
}

function field(value: unknown, maxLength: number): string | null {
  if (typeof value !== 'string') return null
  const trimmed = value.trim()
  if (trimmed.length > maxLength) return null
  return trimmed
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)
    const cors = corsHeaders(request.headers.get('Origin'), env)

    if (url.pathname !== '/inquiry') {
      return new Response('Not Found', { status: 404 })
    }
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: cors })
    }
    if (request.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405, headers: cors })
    }
    if (Object.keys(cors).length === 0) {
      return new Response('Forbidden', { status: 403 })
    }

    const ip = request.headers.get('CF-Connecting-IP') ?? 'unknown'
    const { success } = await env.RATE_LIMITER.limit({ key: ip })
    if (!success) {
      return new Response('Too Many Requests', { status: 429, headers: cors })
    }

    let body: Record<string, unknown>
    try {
      body = await request.json()
    } catch {
      return new Response('Bad Request', { status: 400, headers: cors })
    }

    const name = field(body.name, 100)
    const email = field(body.email, 254)
    const category = field(body.category, 20)
    const message = field(body.message, 5000)
    if (!name || email === null || !category || !message || !(category in CATEGORY_LABELS)) {
      return new Response('Bad Request', { status: 400, headers: cors })
    }

    const res = await fetch(env.DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        // ユーザー入力に @everyone 等が含まれていてもメンションを発火させない
        allowed_mentions: { parse: [] },
        embeds: [{
          title: '📩 新しいお問い合わせ',
          color: 0xBFFF00,
          fields: [
            { name: 'カテゴリ', value: CATEGORY_LABELS[category], inline: true },
            { name: '名前', value: name, inline: true },
            { name: 'メール', value: email || '未入力', inline: true },
            { name: '内容', value: message.slice(0, 1000) },
            { name: '管理画面', value: `[確認する](${env.ADMIN_URL})` },
          ],
          timestamp: new Date().toISOString(),
        }],
      }),
    })
    if (!res.ok) {
      console.error('Discord webhook failed:', res.status, await res.text())
      return new Response('Bad Gateway', { status: 502, headers: cors })
    }

    return new Response(null, { status: 204, headers: cors })
  },
}
