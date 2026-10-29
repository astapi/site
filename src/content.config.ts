import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

// src/content/articles/<slug>/<lang>.md
//   ja → /article/<slug>, en/ko → /article/<slug>/<lang>
const articles = defineCollection({
  loader: glob({ base: './src/content/articles', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string().min(1),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    tags: z.array(z.enum(['lootdive', 'website'])).min(1),
    description: z.string().optional(),
    // お知らせ一覧・RSS で h1 と別の見出しを出したいとき
    newsTitle: z.string().optional(),
    // RSS の guid (省略時は slug)。既存フィードとの互換用
    rssGuid: z.string().optional(),
  }),
})

export const collections = { articles }
