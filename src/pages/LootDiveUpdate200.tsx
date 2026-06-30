import { Link } from 'react-router-dom'

export default function LootDiveUpdate200() {
  return (
    <div className="flex flex-col flex-1 bg-[var(--color-bg)]">
      <article className="flex flex-col w-full max-w-[800px] mx-auto px-5 pt-10 pb-[60px] md:px-16 md:pt-16 md:pb-[100px]">
        <Link
          to="/"
          className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors mb-8"
        >
          &larr; トップへ戻る
        </Link>

        <h1 className="text-2xl md:text-[32px] font-bold text-[var(--color-text)] mb-2">
          ルートダイブ ver2.0.0「シーズン3」アップデート情報
        </h1>
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <p className="text-sm text-[var(--color-text-muted)]">
            2026年6月24日
          </p>
          <Link
            to="/article/lootdive-update-2-0-0/en"
            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            English &rarr;
          </Link>
          <Link
            to="/article/lootdive-update-2-0-0/ko"
            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            한국어 &rarr;
          </Link>
        </div>

        <p className="text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] mb-10">
          ver2.0.0「シーズン3」が近日スタートします！
          新システム・新クラス・パッシブツリーの全面刷新など、大型アップデートをお届けします。
        </p>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            🐾 ペット（ミニモンスター）システム
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>モンスター撃破時に低確率でペットがドロップする新コレクション要素（通常0.5%／ボス3%）</li>
            <li>ペットは固有バフを付与（ATK／DEF／最大HP／クリ率／ライフスティール／フリーズ上限など）</li>
            <li>重複ペットで段階強化（最大Lv6で基礎値2倍）、不要な重複は破棄も可能</li>
            <li>戦闘画面ではプレイヤーの足元にペットを表示、図鑑で収集状況を確認できます</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            🧙 新プレイアブルクラス「テイマー」
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>ペットに特化した新クラス（初期 HP100／ATK10／DEF4）</li>
            <li>固有能力：ペットドロップ率+0.5%・ペット効果2倍</li>
            <li>キャラクター作成画面を刷新し、各クラスの初期ステータス・固有能力を表示</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            🌳 パッシブツリーの全面刷新
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>スキルツリーを円形メッシュ構造に全面リニューアル（251ノード規模）</li>
            <li>クラスごとに専用スタート地点を導入。自分の起点が強調表示され、得意系統へ伸ばしやすく</li>
            <li>キーストーン（強力ノード）は前提12〜15ノードの奥地に配置し、ビルドの個性を強化</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            🏆 シーズン3スタート
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>ランキングをリセットして新シーズン開始（次元回廊ランキング・記録がシーズン別に）</li>
            <li>キャラクター選択画面にシーズンバッジ（S2／S3）を表示。S2以前のキャラは旧ツリーを維持</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            ⚔️ 防御システムの拡張
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>ブロック・シールド・Evasion（回避）を新たに追加</li>
          </ul>
        </section>

        <div className="border-t border-[var(--color-border)] pt-8">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            ルートダイブをダウンロード
          </h2>
          <a
            href="https://apps.apple.com/app/lootdive/id6758569313"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            App Storeでダウンロード &rarr;
          </a>
        </div>
      </article>
    </div>
  )
}
