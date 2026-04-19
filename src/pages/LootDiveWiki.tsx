import { Link } from 'react-router-dom'

export default function LootDiveWiki() {
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
          ルートダイブ公式Wikiを公開しました
        </h1>
        <div className="flex items-center gap-3 mb-8">
          <p className="text-sm text-[var(--color-text-muted)]">
            2026年4月19日
          </p>
          <Link
            to="/article/lootdive-wiki/en"
            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            English &rarr;
          </Link>
        </div>

        <p className="text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] mb-8">
          ルートダイブの公式Wikiを公開しました。<br />
          モンスターデータやドロップデータ、各種ダメージ計算式、ゲームシステムの解説など、ビルド構築や攻略に役立つ情報をまとめています。ぜひご活用ください。
        </p>

        <a
          href="https://wiki.astapi.net/lootdive/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col gap-3 p-6 bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-text)] transition-colors mb-10"
        >
          <span className="text-xs font-medium text-[var(--color-text-muted)]">公式Wiki</span>
          <span className="text-base md:text-lg font-semibold leading-relaxed text-[var(--color-text)]">
            ルートダイブ公式Wiki
          </span>
          <span className="text-sm font-medium text-[var(--color-text-muted)]">Wikiを見る &rarr;</span>
        </a>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            掲載内容
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>モンスターデータ（ステータス・スキル・出現ダンジョン）</li>
            <li>ドロップデータ（入手可能な装備・素材）</li>
            <li>各種ダメージ計算式</li>
            <li>ゲームシステムの解説</li>
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
