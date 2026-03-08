import { Link } from 'react-router-dom'

export default function LootDiveReviewAppsIsland() {
  return (
    <div className="flex flex-col flex-1 bg-[var(--color-bg)]">
      <article className="flex flex-col w-full max-w-[800px] mx-auto px-5 pt-10 pb-[60px] md:px-16 md:pt-16 md:pb-[100px]">
        <Link
          to="/"
          className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors mb-8"
        >
          &larr; トップに戻る
        </Link>

        <h1 className="text-2xl md:text-[32px] font-bold text-[var(--color-text)] mb-2">
          メディア掲載のお知らせ
        </h1>
        <p className="text-sm text-[var(--color-text-muted)] mb-8">
          2026年3月8日
        </p>

        <p className="text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] mb-8">
          アプリ島様にて、ルートダイブのレビュー記事を掲載いただきました。<br />
          ゲームの魅力をわかりやすくご紹介いただいています。ぜひご覧ください。
        </p>

        <a
          href="https://apps-island.com/rootdive"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col gap-3 p-6 bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-text)] transition-colors mb-10"
        >
          <span className="text-xs font-medium text-[var(--color-text-muted)]">アプリ島</span>
          <span className="text-base md:text-lg font-semibold leading-relaxed text-[var(--color-text)]">
            【ルートダイブ】プレイレビュー！自分流のスキルスタイルを組めるハクスラRPG
          </span>
          <span className="text-sm font-medium text-[var(--color-text-muted)]">記事を読む &rarr;</span>
        </a>

        <div className="border-t border-[var(--color-border)] pt-8">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            ルートダイブをダウンロード
          </h2>
          <a
            href="https://apps.apple.com/jp/app/lootdive/id6758569313"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            App Store からダウンロード &rarr;
          </a>
        </div>
      </article>
    </div>
  )
}
