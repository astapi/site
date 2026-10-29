import type { APIContext } from 'astro'
import { getArticles, articleSlug, articleUrl, newsTitle } from './articles'
import type { Article } from './articles'

const SITE_TITLE = 'astapi Games'
const SITE_DESCRIPTION = 'astapi Gamesの公式サイトからのお知らせ'

export const TAGS = ['lootdive', 'website'] as const

function escapeXml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function toRFC822(date: string) {
  return new Date(`${date}T00:00:00+09:00`).toUTCString()
}

// 旧 scripts/generate-rss.mjs と同じ出力 (guid は記事の slug で、言語版間で共通)
function renderRss(site: URL, articles: Article[], title: string, description: string, feedPath: string) {
  const siteUrl = site.origin
  const items = articles
    .map(
      (a) => `    <item>
      <title>${escapeXml(newsTitle(a))}</title>
      <link>${siteUrl}${articleUrl(a)}</link>
      <guid isPermaLink="false">${a.data.rssGuid ?? articleSlug(a)}</guid>
      <pubDate>${toRFC822(a.data.date)}</pubDate>
${a.data.tags.map((tag) => `      <category>${escapeXml(tag)}</category>`).join('\n')}
    </item>`,
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(title)}</title>
    <link>${siteUrl}</link>
    <description>${escapeXml(description)}</description>
    <language>ja</language>
    <atom:link href="${siteUrl}${feedPath}" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>
`
}

export async function rssResponse(context: APIContext, tag?: (typeof TAGS)[number]) {
  const articles = (await getArticles()).filter((a) => !tag || a.data.tags.includes(tag))
  const body = tag
    ? renderRss(context.site!, articles, `${SITE_TITLE} - ${tag}`, `${SITE_DESCRIPTION}（${tag}）`, `/rss/${tag}.xml`)
    : renderRss(context.site!, articles, SITE_TITLE, SITE_DESCRIPTION, '/rss.xml')
  return new Response(body, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } })
}
