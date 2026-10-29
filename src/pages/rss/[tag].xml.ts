import type { APIContext } from 'astro'
import { rssResponse, TAGS } from '../../lib/rss'

export function getStaticPaths() {
  return TAGS.map((tag) => ({ params: { tag } }))
}

export function GET(context: APIContext) {
  return rssResponse(context, context.params.tag as (typeof TAGS)[number])
}
