import { Link } from 'react-router-dom'

export default function LootDiveUpdate134() {
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
          ルートダイブ ver1.3.4 アップデート情報
        </h1>
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <p className="text-sm text-[var(--color-text-muted)]">
            2026年4月21日
          </p>
          <Link
            to="/article/lootdive-update-1-3-4/en"
            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            English &rarr;
          </Link>
          <Link
            to="/article/lootdive-update-1-3-4/ko"
            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            한국어 &rarr;
          </Link>
        </div>

        {/* 不具合修正 */}
        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            不具合修正
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>UberUber 双撃の指輪・UberUber ゴブリンの踏みつけの固有スキル（双撃の刃／キングスラム／王の咆哮）がインベントリ画面に表示されない不具合を修正しました</li>
          </ul>
        </section>

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
