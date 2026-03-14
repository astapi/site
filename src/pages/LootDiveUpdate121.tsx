import { Link } from 'react-router-dom'

export default function LootDiveUpdate121() {
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
          ルートダイブ ver1.2.1 アップデート情報
        </h1>
        <div className="flex items-center gap-3 mb-8">
          <p className="text-sm text-[var(--color-text-muted)]">
            2026年3月14日
          </p>
          <Link
            to="/article/lootdive-update-1-2-1/en"
            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            English &rarr;
          </Link>
        </div>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            バランス調整
          </h2>

          <h3 className="text-base md:text-lg font-semibold text-[var(--color-text)] mb-3">
            新MOD
          </h3>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] mb-6 space-y-1">
            <li>「乱軍の王」: HP30%以下で1度だけ発動し、攻撃速度+20%・攻撃時HP回復+300を得る</li>
            <li>「発火ダメージ吸収」: 発火ダメージの一定割合をHPとして回復する</li>
          </ul>

          <h3 className="text-base md:text-lg font-semibold text-[var(--color-text)] mb-3">
            ユニーク装備の変更
          </h3>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] mb-6 space-y-1">
            <li>マグマコア: 発火特化に変更（発火確率+60%、発火ダメージ+50%、発火ダメージ吸収+10%）</li>
            <li>クラーケンの触腕: ATK+30、DEF+35、HP回復+50、HP回復+2%に変更</li>
            <li>Uber クラーケンの触腕: HP回復+120、HP回復+5%、HP+210、DEF+50に変更</li>
            <li>Uber ゴブリンの篭手: 「乱軍の王」、HP+200、ATK+80、ATK増加+20%に変更</li>
            <li>Uber クラーケンの遊泳: 攻撃速度-20%、HP回復+5%、DEF+80、HP+250に変更</li>
            <li>Uber クラーケンの眼: 毒ダメージ+50%、毒ダメージ軽減+5、HP+220、毒ダメージ5% moreに変更</li>
            <li>Uber 終焉の刃: 5秒毎ATK増加+10%、ATK増加+30%、攻撃速度+20%、HP+280に変更</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            改善
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>図鑑でユニーク装備のMOD効果が表示されるようになりました。</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            バグ修正
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>図鑑詳細画面で不要なヘッダーが表示される問題を修正しました。</li>
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
