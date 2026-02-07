# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

astapi Gamesの公式Webサイト。Google Play Console登録用の組織サイト兼アプリ紹介サイト。Vercelにデプロイ。

## 開発コマンド

```bash
pnpm install          # 依存関係のインストール
pnpm dev              # 開発サーバー起動 (Vite)
pnpm build            # プロダクションビルド (tsc -b && vite build)
pnpm lint             # ESLint実行
pnpm preview          # ビルド結果のプレビュー
pnpm generate-images  # OG画像・favicon生成 (sharpを使用)
```

## 技術スタック

- **フレームワーク**: Vite + React 19 + TypeScript
- **パッケージマネージャー**: pnpm
- **ルーティング**: React Router (BrowserRouter)
- **Lint**: ESLint (typescript-eslint + react-hooks + react-refresh)
- **画像処理**: sharp (OG画像・favicon生成用)

## アーキテクチャ

```
src/
├── main.tsx              # エントリーポイント
├── App.tsx               # ルーティング設定
├── components/
│   ├── Layout.tsx        # 共通レイアウト (Header + main + Footer)
│   ├── Header.tsx
│   └── Footer.tsx
└── pages/
    ├── Home.tsx          # トップページ (/)
    ├── LootDive.tsx      # ゲーム詳細 (/lootdive)
    ├── Privacy.tsx       # プライバシーポリシー (/privacy)
    └── Terms.tsx         # 利用規約 (/terms)
```

- 全ページは`Layout`コンポーネントでラップされ、共通のヘッダー/フッターを持つ
- サイトマップは`vite-plugin-sitemap`で自動生成 (hostname: astapi.net)
- デプロイはVercel (GitHubプッシュで自動デプロイ)
