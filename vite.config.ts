import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sitemap({
      hostname: 'https://astapi.net',
      dynamicRoutes: [
        '/',
        '/lootdive',
        '/article/lootdive-update-1-2-1',
        '/article/lootdive-update-1-2-1/en',
        '/article/lootdive-review-apps-island',
        '/privacy',
        '/terms'
      ]
    })
  ],
})
