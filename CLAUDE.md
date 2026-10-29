# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

astapi Gamesの公式Webサイト。Google Play Console登録用の組織サイト兼アプリ紹介サイト。Astro で静的生成し Cloudflare Workers (Static Assets) で配信する。

## 開発コマンド

```bash
pnpm install          # 依存関係のインストール (公開3日未満のバージョンは pnpm-workspace.yaml の minimumReleaseAge で拒否される)
pnpm dev              # 開発サーバー起動 (astro dev)
pnpm build            # 静的ビルド (dist/)
pnpm preview          # ビルドして wrangler dev でローカル配信 (本番と同じ URL 解決)
pnpm deploy           # ビルドして Cloudflare Workers にデプロイ
pnpm lint             # ESLint実行
pnpm generate-images  # OG画像・favicon生成 (sharpを使用)

pnpm admin:dev / admin:build / admin:deploy   # 管理画面 (admin/, admin.astapi.net)
pnpm notify:deploy                            # お問い合わせ通知 Worker (workers/inquiry-notify, api.astapi.net)
```

Node は `.node-version` (24.x)。pnpm は 12 系を使う。

## 技術スタック

- **フレームワーク**: Astro (静的出力のみ。サーバーサイドの処理は持たない)
- **スタイル**: Tailwind CSS v4 (@tailwindcss/vite) + src/styles/*.css
- **配信**: Cloudflare Workers Static Assets (wrangler.jsonc, `main` なし)
- **お問い合わせ**: Firestore に保存 + workers/inquiry-notify 経由で Discord 通知
- **管理画面**: admin/ の独立した Vite + React アプリ。Cloudflare Access で保護

## アーキテクチャ

```
src/
├── content/articles/<slug>/<lang>.md  # 記事 (ja → /article/<slug>, en/ko → /article/<slug>/<lang>)
├── content.config.ts                  # 記事 frontmatter のスキーマ
├── layouts/BaseLayout.astro           # <head> (title/OGP/RSS)
├── layouts/SiteLayout.astro           # Header + main + Footer
├── lib/articles.ts                    # 記事一覧・URL生成
├── lib/rss.ts                         # RSS (/rss.xml, /rss/<tag>.xml)
└── pages/
    ├── index.astro                    # トップ (/) — tags に website を含む記事を表示
    ├── lootdive.astro                 # ゲーム詳細 (/lootdive) — tags に lootdive を含む記事を表示
    ├── lootdive/contact.astro         # お問い合わせフォーム
    ├── article/[...path].astro        # 記事ページ
    ├── privacy.astro / terms.astro
    └── 404.astro
```

### 記事の追加

`src/content/articles/<slug>/ja.md` (必要なら en.md / ko.md) を作るだけ。お知らせ一覧・RSS・サイトマップに自動で載る。

```md
---
title: "ルートダイブ ver2.2.0 アップデート情報"
date: "2026-11-01"
tags: [lootdive]          # トップのお知らせにも出すなら [lootdive, website]
---
```

本文は Markdown。リンクカードは `<a class="link-card" ...>`、注意書きは `<div class="callout callout-warning">` (スタイルは src/index.css の `.article-body`)。
