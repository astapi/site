import '../styles/LootDive.css'

export default function LootDive() {
  return (
    <div className="lootdive-page">
      <div className="lootdive-hero">
        <div className="hero-content">
          <h1 className="game-title">LootDive</h1>
          <p className="game-tagline">完全自動戦闘のハクスラRPG</p>
          <p className="game-description">
            装備とパッシブでビルドを組み、ダンジョン周回で戦利品を厳選しよう。
          </p>
          <div className="download-buttons">
            <button className="download-btn disabled" disabled>
              Google Play（準備中）
            </button>
          </div>
        </div>
      </div>

      <div className="lootdive-content">
        <section className="features-section">
          <h2>ゲームの特徴</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚔️</div>
              <h3>完全自動戦闘</h3>
              <p>
                キャラクターは自動で戦います。あなたは装備やパッシブスキルでビルドを組むことに集中できます。
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎲</div>
              <h3>ランダム生成ダンジョン</h3>
              <p>
                毎回異なるダンジョンが生成されます。同じダンジョンは二度と現れません。
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💎</div>
              <h3>戦利品厳選</h3>
              <p>
                ダンジョンをクリアして強力な装備を入手。完璧な装備を求めて周回しよう。
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔧</div>
              <h3>ビルド構築</h3>
              <p>
                装備の組み合わせとパッシブスキルで無限のビルドが可能。あなただけの戦略を見つけよう。
              </p>
            </div>
          </div>
        </section>

        <section className="status-section">
          <h2>開発状況</h2>
          <p>
            現在開発中です。リリース時期は未定ですが、Google Play Storeでの配信を予定しています。
          </p>
          <div className="status-badge">開発中</div>
        </section>

        <section className="contact-section">
          <h2>お問い合わせ</h2>
          <p>
            ゲームに関するご質問やフィードバックは、今後お問い合わせフォームを設置予定です。
          </p>
        </section>
      </div>
    </div>
  )
}
