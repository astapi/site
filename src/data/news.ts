export type NewsTag = 'lootdive' | 'website'

export interface NewsItem {
  date: string
  title: string
  url: string
  tags: NewsTag[]
}

import newsJson from './news.json'

export const news: NewsItem[] = newsJson as NewsItem[]
