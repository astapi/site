import '../styles/LootDive.css'

export default function LootDive() {
  return (
    <div className="ld-page">
      {/* Header */}
      <header className="ld-header">
        <a href="/lootdive" className="ld-logo">
          <img src="/images/lootdive/icon.png" alt="" className="ld-logo-icon" />
          <span className="ld-logo-text">LootDive</span>
        </a>
        <nav className="ld-nav">
          <a href="#features" className="ld-nav-item">特徴</a>
          <a href="#screenshots" className="ld-nav-item">スクリーンショット</a>
          <a href="#" className="ld-header-cta">
            <svg className="ld-icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            ダウンロード
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="ld-hero">
        <div className="ld-hero-bg"></div>
        <div className="ld-hero-overlay"></div>
        <div className="ld-hero-content">
          <span className="ld-badge">iOS 無料配信中</span>
          <h1 className="ld-headline">本格ハクスラビルド構築RPG</h1>
          <p className="ld-subline">
            完全オートバトルのハクスラRPG。
            <br />
            17種以上のダンジョン、無限の装備、自分だけのスキルビルド。
          </p>
          <div className="ld-cta-row">
            <a href="#" className="ld-btn-primary">
              <svg className="ld-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                <line x1="12" y1="18" x2="12" y2="18"/>
              </svg>
              App Store でダウンロード
            </a>
            <a href="#features" className="ld-btn-secondary">
              詳しく見る
              <svg className="ld-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="ld-features">
        <div className="ld-section-header">
          <span className="ld-label">FEATURES</span>
          <h2 className="ld-section-title">放置で楽しむ、本格ハクスラ</h2>
          <p className="ld-section-subtitle">
            タップ不要の完全オートバトル。でも、やり込み要素は本格派。
          </p>
        </div>
        <div className="ld-feature-cards">
          <div className="ld-feature-card">
            <div className="ld-feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 17.5L3 6V3h3l11.5 11.5"/>
                <path d="M13 19l6-6"/>
                <path d="M16 16l4 4"/>
                <path d="M19 21l2-2"/>
                <path d="M14.5 6.5L18 3h3v3l-3.5 3.5"/>
                <path d="M5 14l4 4"/>
                <path d="M7 17l-3 3"/>
                <path d="M3 19l2 2"/>
              </svg>
            </div>
            <h3 className="ld-feature-title">完全オートバトル</h3>
            <p className="ld-feature-desc">
              戦闘はすべて自動。画面を閉じている間もキャラクターが戦い続け、経験値とアイテムを獲得します。
            </p>
            <div className="ld-feature-screenshot">
              <img src="/images/lootdive/ss-battle.png" alt="バトル画面" />
            </div>
          </div>
          <div className="ld-feature-card">
            <div className="ld-feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 3h12l4 6-10 13L2 9z"/>
                <path d="M11 3l1 7 5-4"/>
                <path d="M13 3l-1 7-5-4"/>
              </svg>
            </div>
            <h3 className="ld-feature-title">装備収集 &amp; 強化</h3>
            <p className="ld-feature-desc">
              レア装備を集めて、強化して、最強のビルドを目指す。ハクスラの醍醐味がここに。
            </p>
            <div className="ld-feature-screenshot">
              <img src="/images/lootdive/ss-inventory.png" alt="インベントリ画面" />
            </div>
          </div>
          <div className="ld-feature-card">
            <div className="ld-feature-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="6" y1="3" x2="6" y2="15"/>
                <circle cx="18" cy="6" r="3"/>
                <circle cx="6" cy="18" r="3"/>
                <path d="M18 9a9 9 0 0 1-9 9"/>
              </svg>
            </div>
            <h3 className="ld-feature-title">スキルツリー</h3>
            <p className="ld-feature-desc">
              パッシブスキルを組み合わせて、自分だけのビルドを構築。戦略は無限大。
            </p>
            <div className="ld-feature-screenshot">
              <img src="/images/lootdive/ss-skill.png" alt="スキルツリー画面" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="screenshots" className="ld-gallery">
        <div className="ld-section-header">
          <span className="ld-label">SCREENSHOTS</span>
          <h2 className="ld-section-title">ゲーム画面</h2>
        </div>
        <div className="ld-screenshots">
          <div className="ld-screenshot">
            <img src="/images/lootdive/ss-boss.png" alt="ボス戦" />
          </div>
          <div className="ld-screenshot">
            <img src="/images/lootdive/ss-dungeon.png" alt="ダンジョン選択" />
          </div>
          <div className="ld-screenshot">
            <img src="/images/lootdive/ss-inventory2.png" alt="インベントリ" />
          </div>
          <div className="ld-screenshot">
            <img src="/images/lootdive/ss-skill2.png" alt="スキルツリー" />
          </div>
          <div className="ld-screenshot">
            <img src="/images/lootdive/ss-battle2.png" alt="戦闘画面" />
          </div>
          <div className="ld-screenshot">
            <img src="/images/lootdive/ss-home.png" alt="ホーム画面" />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="ld-final-cta">
        <div className="ld-cta-divider"></div>
        <h2 className="ld-cta-headline">冒険を始めよう。</h2>
        <p className="ld-cta-sub">ダウンロード無料。今すぐ始められます。</p>
        <a href="#" className="ld-btn-primary ld-btn-large">
          <svg className="ld-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
            <line x1="12" y1="18" x2="12" y2="18"/>
          </svg>
          App Store でダウンロード
        </a>
        <div className="ld-app-icon">
          <img src="/images/lootdive/icon.png" alt="LootDive" />
        </div>
      </section>

      {/* Footer */}
      <footer className="ld-footer">
        <div className="ld-footer-top">
          <span className="ld-footer-logo">LootDive</span>
          <nav className="ld-footer-links">
            <a href="/lootdive/privacy">プライバシーポリシー</a>
            <a href="/lootdive/contact">お問い合わせ</a>
          </nav>
        </div>
        <div className="ld-footer-divider"></div>
        <div className="ld-footer-bottom">
          <span className="ld-copyright">© 2026 <a href="/">astapi Games</a>. All rights reserved.</span>
          <span className="ld-tagline">ハクスラRPG</span>
        </div>
      </footer>
    </div>
  )
}
