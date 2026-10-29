import { getCollection } from 'astro:content'
import type { CollectionEntry } from 'astro:content'

export type Article = CollectionEntry<'articles'>
export type Lang = 'ja' | 'en' | 'ko'

const LANG_ORDER: Lang[] = ['ja', 'en', 'ko']

// id は "<slug>/<lang>"
export function articleSlug(article: Article): string {
  return article.id.split('/')[0]
}

export function articleLang(article: Article): Lang {
  return article.id.split('/')[1] as Lang
}

export function articleUrl(article: Article): string {
  const lang = articleLang(article)
  const slug = articleSlug(article)
  return lang === 'ja' ? `/article/${slug}` : `/article/${slug}/${lang}`
}

export function newsTitle(article: Article): string {
  return article.data.newsTitle ?? article.data.title
}

// 一覧用の日付表記 (2026.08.15)
export function newsDate(article: Article): string {
  return article.data.date.replaceAll('-', '.')
}

// 新しい順。同じ日付なら slug ごとに ja → en → ko
export async function getArticles(): Promise<Article[]> {
  const articles = await getCollection('articles')
  return articles.sort((a, b) => {
    if (a.data.date !== b.data.date) return b.data.date.localeCompare(a.data.date)
    if (articleSlug(a) !== articleSlug(b)) return articleSlug(b).localeCompare(articleSlug(a))
    return LANG_ORDER.indexOf(articleLang(a)) - LANG_ORDER.indexOf(articleLang(b))
  })
}
