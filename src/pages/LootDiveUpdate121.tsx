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
            新規MOD
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>「HP回復変換」: 毎秒HP回復量の一定%をATKに加算する。回復ビルドを火力に転換する新しいビルド軸。</li>
            <li>「乱軍の王」: HPが30%以下になると1度だけ発動し、攻撃速度+20%とHIT時HP回復+300を付与する逆転トリガー。</li>
            <li>「発火ダメージ吸収」: 発火ダメージの一定割合をHPとして回復する。発火ビルドに生存力を追加。</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            新規ユニーク装備
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>双撃の指輪 — スロット: アクセサリ / ドロップ: 盗賊の頭 — 固有MOD: クリティカル追撃（クリティカルヒット時に追加攻撃）</li>
            <li>Uber 双撃の指輪 — スロット: アクセサリ / ドロップ: Uber盗賊の頭 — ATK95 / DEF70 — 固有MOD: クリ率+30%、クリティカル追撃、HIT時HP回復+80、攻撃速度+15%</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            ユニーク装備のMOD変更
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-2">
            <li>失われた魔導書 — 変更前: クリ率+25% → 変更後: 発火確率+50%、毒確率+50%、DEF+40</li>
            <li>チャンピオンアクス — 変更前: ATK+8、クリ率+15% → 変更後: 攻撃速度-20%、クリ率+30%、ATK+60、HP+100</li>
            <li>竜の心臓 — 変更前: HP回復+55、ATK+30、DEF+30 → 変更後: HP回復+100、HP回復+10%、HP回復変換50%</li>
            <li>マグマコア — 変更前: ATK15/DEF5、ATK+20、クリ率+20% → 変更後: ATK30/DEF30、発火確率+60%、発火ダメージ+50%、発火ダメージ吸収10%</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            Uber装備のMOD変更
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-2">
            <li>Uber 終焉の刃 — 変更前: クリ率+30% → 変更後: ATK増加+30%</li>
            <li>クラーケンの触腕（通常） — 変更前: 攻撃速度+12%、HP回復+30 → 変更後: ATK+30、DEF+35、HP回復+50、HP回復+2%</li>
            <li>Uber クラーケンの触腕 — 変更前: 攻撃速度+25%、HP回復+80、ATK+50、HP+210 → 変更後: HP回復+120、HP回復+5%、HP+210、DEF+50</li>
            <li>Uber クラーケンの遊泳 — 変更前: 攻撃速度+15%、HP回復%+2%、DEF+60、HP+210 → 変更後: 攻撃速度-20%、HP回復%+5%、DEF+80、HP+250</li>
            <li>Uber クラーケンの眼 — 変更前: 毒確率+25%、毒ダメージ+50%、ダメージ軽減+8%、HP+220 → 変更後: 毒ダメージ+50%、毒ダメージ軽減+5、HP+220、毒ダメージmore+5%</li>
            <li>Uber ゴブリンの篭手 — 変更前: クリ率+15%、ATK増加+20%、HP+120、HIT時HP回復+35 → 変更後: 乱軍の王、HP+200、ATK+80、ATK増加+20%</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            その他の改善
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>攻撃速度に最低値0.1を保証（マイナス補正で0以下にならないように）</li>
            <li>図鑑でユニークドロップ（Uber含む）のMOD詳細を表示するように改善</li>
            <li>図鑑でボスと同一モンスターが通常枠に重複表示されるバグを修正</li>
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
