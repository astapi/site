import { Link } from 'react-router-dom'

export default function LootDiveRelease200() {
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
          ルートダイブ ver2.0.0「シーズン3」をリリースしました
        </h1>
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <Link
            to="/article/lootdive-2-0-0-release/en"
            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            English &rarr;
          </Link>
          <Link
            to="/article/lootdive-2-0-0-release/ko"
            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            한국어 &rarr;
          </Link>
        </div>

        <p className="text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] mb-10">
          いつもルートダイブをプレイいただき、誠にありがとうございます。
          先日よりお知らせしておりました大型アップデート ver2.0.0「シーズン3」をリリースいたしました。
          新システム・新クラス・パッシブツリーの全面刷新など、盛りだくさんの内容となっております。ぜひお楽しみください。
        </p>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            🏆 シーズン3がスタートしました
          </h2>
          <p className="text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] mb-2">
            新シーズン「シーズン3」が開始いたしました。
            シーズン3でプレイしていただくには、新しくキャラクターを作成していただく必要がございます。
            これまでのキャラクターは、シーズン2以前のデータとして引き続きお楽しみいただけます。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            招待コードによる3倍速機能の解放を廃止しました
          </h2>
          <p className="text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] mb-2">
            これまで、招待コードのご入力によって3倍速機能を解放できる仕組みを提供しておりましたが、本アップデートをもって廃止いたしました。
          </p>
          <p className="text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] mb-2">
            本来意図していなかった形で、レビュー欄が招待コードで埋まってしまう状況が発生しておりました。
            レビュー欄の健全化のため、やむを得ず本機能を削除する判断をいたしました。
            これまでご利用いただいていた皆様には、ご不便をおかけしますことを心よりお詫び申し上げます。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            ver2.0.0 のアップデート内容
          </h2>
          <p className="text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] mb-4">
            ペット（ミニモンスター）システムや新クラス「テイマー」、パッシブツリーの全面刷新など、
            ver2.0.0の詳しいアップデート内容は、以下のお知らせをご覧ください。
          </p>
          <Link
            to="/article/lootdive-update-2-0-0"
            className="flex flex-col gap-3 p-6 bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-text)] transition-colors"
          >
            <span className="text-xs font-medium text-[var(--color-text-muted)]">アップデート情報</span>
            <span className="text-base md:text-lg font-semibold leading-relaxed text-[var(--color-text)]">
              ルートダイブ ver2.0.0「シーズン3」アップデート情報
            </span>
            <span className="text-sm font-medium text-[var(--color-text-muted)]">詳しく見る &rarr;</span>
          </Link>
        </section>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            公式Wikiもver2.0.0に対応しました
          </h2>
          <p className="text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] mb-4">
            公式Wikiもver2.0.0の内容に対応しております。
            新システムやビルドの詳細を確認したい方は、あわせてご覧ください。
          </p>
          <a
            href="https://wiki.astapi.net/lootdive/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-3 p-6 bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-text)] transition-colors"
          >
            <span className="text-xs font-medium text-[var(--color-text-muted)]">公式Wiki</span>
            <span className="text-base md:text-lg font-semibold leading-relaxed text-[var(--color-text)]">
              ルートダイブ公式Wiki
            </span>
            <span className="text-sm font-medium text-[var(--color-text-muted)]">Wikiを見る &rarr;</span>
          </a>
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
            App Storeでダウンロード &rarr;
          </a>
        </div>
      </article>
    </div>
  )
}
