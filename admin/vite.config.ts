import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 管理画面は公開サイトとは別ビルド・別オリジン (admin.astapi.net) で配信する
export default defineConfig({
  root: fileURLToPath(new URL('.', import.meta.url)),
  // Firebase の設定はリポジトリ直下の .env を共有する
  envDir: fileURLToPath(new URL('..', import.meta.url)),
  plugins: [react()],
  server: { port: 5174 },
})
