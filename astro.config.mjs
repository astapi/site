import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://astapi.net',
  // /article/foo → dist/article/foo.html (Workers の html_handling で拡張子なしURLとして配信)
  build: { format: 'file' },
  trailingSlash: 'never',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
})
