import { Link } from 'react-router-dom'

export default function LootDiveUpdate130() {
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
          大型アップデート ver1.3.0 のお知らせ
        </h1>
        <div className="flex items-center gap-3 mb-8">
          <p className="text-sm text-[var(--color-text-muted)]">
            2026年3月29日
          </p>
          <Link
            to="/article/lootdive-update-1-3-0/en"
            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            English &rarr;
          </Link>
        </div>

        <div className="bg-[var(--color-bg-secondary)] border-l-4 border-yellow-500 px-4 py-3 text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] mb-8">
          このお知らせ内容は2026/03/29 21時時点の情報となります。1.3.0リリース時点で内容が変わる可能性がある点をご了承ください。
        </div>

        {/* 新コンテンツ */}
        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            新コンテンツ
          </h2>

          <h3 className="text-base md:text-lg font-bold text-[var(--color-text)] mb-2">
            新プレイアブルクラス「フロストメイジ」
          </h3>
          <p className="text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] mb-2">
            氷の魔法を操る新クラスが登場。新たな状態異常「チル」「フリーズ」を軸に戦います。
          </p>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1 mb-6">
            <li>チル: 敵の攻撃速度を低下させる</li>
            <li>フリーズ: 敵の行動を一定時間停止させる</li>
          </ul>

          <h3 className="text-base md:text-lg font-bold text-[var(--color-text)] mb-2">
            新ボス「UberUberゴブリンキング」
          </h3>
          <p className="text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] mb-2">
            Uberゴブリンキングをさらに上回る強力な能力を持つ、最高難度のボスです。既存のUberボスをすべて討伐することで挑戦可能になります。
          </p>
          <div className="bg-[var(--color-bg-secondary)] border-l-4 border-yellow-500 px-4 py-3 text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] mb-6">
            ⚠️ すでにクリア済みのキャラクターでも、各Uberボスを1度ずつ討伐し直す必要があります。
          </div>

          <h3 className="text-base md:text-lg font-bold text-[var(--color-text)] mb-2">
            Uberパッシブツリー
          </h3>
          <p className="text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)]">
            Uberボスを討伐するとポイントを獲得でき、強力な効果を持つUberパッシブツリーを解放できます。
          </p>
        </section>

        {/* バランス調整・リワーク */}
        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            バランス調整・リワーク
          </h2>

          <h3 className="text-base md:text-lg font-bold text-[var(--color-text)] mb-2">
            防御システムの見直し
          </h3>
          <p className="text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] mb-2">
            パッシブツリーからダメージ軽減ノードを削除し、新たな防御機構として「ダメージ遅延」MODを追加します。
          </p>
          <div className="bg-[var(--color-bg-secondary)] border-l-4 border-[var(--color-border)] px-4 py-3 text-sm md:text-[15px] leading-[1.8] text-[var(--color-text-muted)] mb-2">
            調整意図: 従来のツリーではDEFと合わせてダメージ軽減99%を容易に達成でき、死なないキャラクターで敵のリジェネを上回る火力さえあれば次元回廊を際限なく進められる状態でした（現在のランキング1位は30,600階）。今回の変更で「被弾しても耐えられる」から「いかにダメージを管理するか」という戦略的な防御へ移行します。
          </div>
          <p className="text-sm md:text-[15px] leading-[1.8] text-[var(--color-text-muted)] mb-6">
            なお、鎧に付与されるダメージ軽減MODは引き続き残ります。
          </p>

          <h3 className="text-base md:text-lg font-bold text-[var(--color-text)] mb-2">
            毒系ツリーの調整
          </h3>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1 mb-6">
            <li>毒付与率を上方修正</li>
            <li>毒付与時ダメージ軽減を削除</li>
          </ul>

          <h3 className="text-base md:text-lg font-bold text-[var(--color-text)] mb-2">
            クリティカル系ツリーの強化
          </h3>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>クリティカルダメージを大幅に上方修正</li>
          </ul>
        </section>

        {/* 不具合修正 */}
        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            不具合修正
          </h2>

          <h3 className="text-base md:text-lg font-bold text-[var(--color-text)] mb-2">
            アイテムMOD数の修正
          </h3>
          <p className="text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)]">
            固定MOD3つを持つアイテムにランダムMODが最大4つ付与され、合計7MODになる不具合がありました。MOD数は最大4つを想定しているため、固定MOD3つ＋ランダムMOD1つ（合計4つ）に修正します。
          </p>
        </section>

        {/* 改善 */}
        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            改善
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>次元回廊を201F到達ごとに最高到達階から挑戦できるようになります</li>
            <li>バランス調整、リワークを行うためアプリのversionによってランキングを分けます</li>
            <li>1.3.0では1Fからの挑戦となります</li>
            <li>1.2.4でのランキングは公式サイトで閲覧できるようにします</li>
          </ul>
        </section>

        {/* 仕様変更 */}
        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            仕様変更
          </h2>

          <h3 className="text-base md:text-lg font-bold text-[var(--color-text)] mb-2">
            倍速機能の解放タイミング変更
          </h3>
          <p className="text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] mb-2">
            倍速機能の解放条件を「終焉の地クリア後」に変更します。
          </p>
          <div className="bg-[var(--color-bg-secondary)] border-l-4 border-[var(--color-border)] px-4 py-3 text-sm md:text-[15px] leading-[1.8] text-[var(--color-text-muted)] mb-2">
            変更理由: エンドコンテンツの周回を快適にするために追加した機能でしたが、序盤から利用可能だったためクリアまでの時間が大幅に短縮されてしまっていました。
          </div>
          <p className="text-sm md:text-[15px] leading-[1.8] text-[var(--color-text-muted)]">
            ※ 課金・招待機能で3倍速を解放済みのプレイヤーは、引き続き最初からご利用いただけます。
          </p>
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
