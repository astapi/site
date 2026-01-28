# astapi Games Official Website

astapi Gamesの公式Webサイトです。Google Play Console登録用の組織サイト兼アプリ紹介サイトとして機能します。

## 概要

- **組織**: astapi Games
- **事業内容**: モバイルゲーム開発
- **現在開発中のアプリ**: LootDive（完全自動戦闘のハクスラRPG）

## 技術スタック

- **フレームワーク**: Vite + React + TypeScript
- **パッケージマネージャー**: pnpm
- **ルーティング**: React Router
- **デプロイ先**: Vercel

## ページ構成

- **トップページ** (`/`): 組織紹介とアプリ一覧
- **LootDive詳細ページ** (`/lootdive`): ゲームの詳細情報と機能紹介
- **プライバシーポリシー** (`/privacy`): アプリのプライバシーポリシー
- **利用規約** (`/terms`): アプリの利用規約

## 開発

```bash
# 依存関係のインストール
pnpm install

# 開発サーバーの起動
pnpm dev

# プロダクションビルド
pnpm build

# プレビュー
pnpm preview

# OG画像とfaviconの生成
pnpm generate-images
```

### 画像生成について

`npm run generate-images` を実行すると、以下の画像が `public/` ディレクトリに生成されます：

- **og-image.png** (1200x630): SNSシェア用のOG画像
- **favicon-32x32.png**: 32x32pxのfavicon
- **favicon-16x16.png**: 16x16pxのfavicon
- **apple-touch-icon.png** (180x180): iOS用のアップルタッチアイコン
- **favicon.png**: デフォルトのfavicon

これらの画像は `src/assets/astapi_element.png` を元に自動生成されます。

## デプロイ

このプロジェクトはVercelにデプロイされます。

```bash
# Vercel CLIでデプロイ
vercel
```

または、GitHubにプッシュすることで自動的にデプロイされます。

## ライセンス

© 2026 astapi Games. All rights reserved.
