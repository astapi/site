import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = resolve(__dirname, '../dist')

const SITE_URL = 'https://astapi.net'
const SITE_TITLE = 'astapi Games'
const SITE_DESCRIPTION = 'astapi Gamesの公式サイトからのお知らせ'

const news = JSON.parse(
  readFileSync(resolve(__dirname, '../src/data/news.json'), 'utf-8')
)

// All unique tags
const allTags = [...new Set(news.flatMap((item) => item.tags))]

function toRFC822(dateStr) {
  // dateStr: "2026.03.08"
  const [y, m, d] = dateStr.split('.')
  const date = new Date(`${y}-${m}-${d}T00:00:00+09:00`)
  return date.toUTCString()
}

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function generateRss(items, { title, description, feedPath }) {
  const itemsXml = items
    .map(
      (item) => `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${SITE_URL}${item.url}</link>
      <guid>${SITE_URL}${item.url}</guid>
      <pubDate>${toRFC822(item.date)}</pubDate>
${item.tags.map((tag) => `      <category>${escapeXml(tag)}</category>`).join('\n')}
    </item>`
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(title)}</title>
    <link>${SITE_URL}</link>
    <description>${escapeXml(description)}</description>
    <language>ja</language>
    <atom:link href="${SITE_URL}${feedPath}" rel="self" type="application/rss+xml"/>
${itemsXml}
  </channel>
</rss>
`
}

// Generate main feed (all news)
const mainRss = generateRss(news, {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  feedPath: '/rss.xml',
})
writeFileSync(resolve(distDir, 'rss.xml'), mainRss)
console.log('Generated: /rss.xml')

// Generate per-tag feeds
for (const tag of allTags) {
  const filtered = news.filter((item) => item.tags.includes(tag))
  const rss = generateRss(filtered, {
    title: `${SITE_TITLE} - ${tag}`,
    description: `${SITE_DESCRIPTION}（${tag}）`,
    feedPath: `/rss/${tag}.xml`,
  })
  const dir = resolve(distDir, 'rss')
  mkdirSync(dir, { recursive: true })
  writeFileSync(resolve(dir, `${tag}.xml`), rss)
  console.log(`Generated: /rss/${tag}.xml`)
}
