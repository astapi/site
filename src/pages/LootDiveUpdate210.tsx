import { Link } from 'react-router-dom'

export default function LootDiveUpdate210() {
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
          ルートダイブ ver2.1.0 アップデート情報
        </h1>
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <p className="text-sm text-[var(--color-text-muted)]">
            2026年8月15日
          </p>
          <Link
            to="/article/lootdive-update-2-1-0/en"
            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            English &rarr;
          </Link>
          <Link
            to="/article/lootdive-update-2-1-0/ko"
            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            한국어 &rarr;
          </Link>
        </div>

        <p className="text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] mb-10">
          ver2.1.0を配信しました！
          新エンドコンテンツ「UberUber魔王」の降臨、狙ったMODを確定で刻める新クラフト「刻印」の実装など、エンドゲームをさらに深めるアップデートをお届けします。
        </p>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            😈 新エンドコンテンツ「UberUber魔王」
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>全てのUberボス・UberUberボスを撃破した者の前にのみ顕現する、次元を超えた魔王</li>
            <li>凄まじい再生力を持ち、生半可な火力では傷一つ与えられない</li>
            <li>ボススキル「滅びの刻限」により、時間とともに攻撃が際限なく激化。最強ビルドで挑め</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            ⚒️ 新クラフト要素「刻印」
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>レア装備に、狙ったMODを1つ確定で彫り込める新システム</li>
            <li>1つの装備につき1つまで。MODが空いていれば追加、埋まっていれば入れ替えるMODを選択</li>
            <li>「HIT時回復」「回避率」「回復→ATK変換」など、通常のドロップでは付かないMODも刻印なら付与できます</li>
            <li>刻印は終焉の地以降のダンジョンでドロップ（ボス撃破時は確定入手）</li>
            <li>ホーム画面下部の「刻印」から作成できます</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            🌳 パッシブツリーの不具合修正とお詫び
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>前提条件を無視してリスペック（返却）ができてしまい、ツリーが分断された状態になる不具合を修正しました</li>
            <li>影響を受けたキャラクターは、パッシブツリーを初期化のうえ、消費済みのスキルポイントを全額返還いたします</li>
            <li>お詫びとして、全プレイヤーにリスペックトークンを80個配布いたします</li>
            <li>ご不便をおかけし、誠に申し訳ありませんでした</li>
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
