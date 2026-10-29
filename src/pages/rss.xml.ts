import type { APIContext } from 'astro'
import { rssResponse } from '../lib/rss'

export function GET(context: APIContext) {
  return rssResponse(context)
}
