import { Link } from 'react-router-dom'

export default function LootDiveUpdate131() {
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
          ルートダイブ ver1.3.1 アップデート情報
        </h1>
        <div className="flex items-center gap-3 mb-8">
          <p className="text-sm text-[var(--color-text-muted)]">
            2026年4月19日
          </p>
          <Link
            to="/article/lootdive-update-1-3-1/en"
            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            English &rarr;
          </Link>
        </div>

        {/* 新ボス */}
        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            新ボス
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>UberUber 盗賊の頭が登場！UberUberゴブリンキングに続く第2の究極ボス</li>
            <li>専用スキル「双撃の刃」「影縛りの絞縄」、撃破バッジ「真の影の征服者」を追加</li>
          </ul>
        </section>

        {/* 新ユニーク装備 */}
        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            新ユニーク装備
          </h2>

          <h3 className="text-base md:text-lg font-bold text-[var(--color-text)] mb-2">
            UberUber ゴブリンの踏みつけ（靴）
          </h3>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1 mb-6">
            <li>キングスラム：5回攻撃ごとにATK×3の追撃</li>
            <li>王の咆哮：3回攻撃ごとに自身の毒・発火・チル状態を解除</li>
            <li>毎秒HP+200回復、HP+220</li>
          </ul>

          <h3 className="text-base md:text-lg font-bold text-[var(--color-text)] mb-2">
            UberUber 双撃の指輪（アクセサリ）
          </h3>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>双撃の刃：毎攻撃時にATKの100%で追撃（クリティカル非依存）</li>
            <li>HIT時HP+200、攻撃速度+25%、DEF+150</li>
          </ul>
        </section>

        {/* UI改善 */}
        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            UI改善
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>図鑑のボス能力表示をスキル発動条件ごとにセクション分け</li>
          </ul>
        </section>

        {/* 不具合修正 */}
        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            不具合修正
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>既存の盗賊の追撃にも「ダメージ遅延」MODが正しく適用されるよう修正</li>
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
