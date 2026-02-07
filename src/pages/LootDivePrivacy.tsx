import '../styles/LootDiveLegal.css'

export default function LootDivePrivacy() {
  return (
    <div className="ld-legal-page">
      <div className="ld-legal-container">
        <a href="/lootdive" className="ld-legal-back">&larr; LootDive に戻る</a>

        {/* 日本語版 */}
        <article className="ld-legal-content">
          <h1>プライバシーポリシー</h1>
          <p className="ld-legal-updated">最終更新日：2026年2月7日</p>

          <p>本プライバシーポリシーは、LootDive（以下「本アプリ」）における個人情報の取り扱いについて説明します。</p>

          <section>
            <h2>1. 収集する情報</h2>

            <h3>自動的に収集される情報</h3>
            <ul>
              <li><strong>ゲーム利用データ</strong>: ダンジョン進行状況、プレイヤーレベル等（Firebase Analytics）</li>
              <li><strong>エラー情報</strong>: アプリのクラッシュログ（Firebase Crashlytics）</li>
              <li><strong>広告ID</strong>: 広告配信のためのデバイス識別子（Google AdMob）</li>
            </ul>

            <h3>ユーザーが提供する情報</h3>
            <ul>
              <li><strong>購入情報</strong>: アプリ内課金に関する情報（RevenueCat経由でAppleが処理）</li>
            </ul>

            <h3>収集しない情報</h3>
            <ul>
              <li>氏名、メールアドレス、電話番号等の個人を特定する情報</li>
              <li>ゲームデータ（端末内にのみ保存され、サーバーには送信されません）</li>
            </ul>
          </section>

          <section>
            <h2>2. 情報の利用目的</h2>
            <p>収集した情報は以下の目的で利用します：</p>
            <ul>
              <li>アプリの改善・最適化</li>
              <li>不具合の検出・修正</li>
              <li>広告の配信</li>
              <li>課金処理の実行</li>
            </ul>
          </section>

          <section>
            <h2>3. 第三者サービス</h2>
            <p>本アプリは以下の第三者サービスを利用しています：</p>
            <ul>
              <li>
                <strong>Firebase（Google LLC）</strong>: アナリティクス、クラッシュレポート
                <br /><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Googleプライバシーポリシー</a>
              </li>
              <li>
                <strong>Google AdMob</strong>: 広告配信
                <br /><a href="https://support.google.com/admob/answer/6128543" target="_blank" rel="noopener noreferrer">AdMobポリシー</a>
              </li>
              <li>
                <strong>RevenueCat</strong>: 課金処理
                <br /><a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">RevenueCatプライバシーポリシー</a>
              </li>
            </ul>
          </section>

          <section>
            <h2>4. データの保持</h2>
            <p>分析データはサービス改善に必要な期間保持されます。詳細は各サービスのポリシーをご確認ください。</p>
          </section>

          <section>
            <h2>5. お子様のプライバシー</h2>
            <p>本アプリは13歳未満のお子様から意図的に個人情報を収集することはありません。</p>
          </section>

          <section>
            <h2>6. お問い合わせ</h2>
            <p>本ポリシーに関するお問い合わせは、以下までご連絡ください：</p>
            <ul>
              <li>メール: <a href="mailto:support@astapi.net">support@astapi.net</a></li>
            </ul>
          </section>

          <section>
            <h2>7. 変更について</h2>
            <p>本ポリシーは予告なく変更される場合があります。重要な変更がある場合は、アプリ内でお知らせします。</p>
          </section>
        </article>

        <hr className="ld-legal-divider" />

        {/* 英語版 */}
        <article className="ld-legal-content">
          <h1>Privacy Policy</h1>
          <p className="ld-legal-updated">Last updated: February 7, 2026</p>

          <p>This Privacy Policy describes how LootDive ("the App") handles your information.</p>

          <section>
            <h2>1. Information We Collect</h2>

            <h3>Automatically Collected Information</h3>
            <ul>
              <li><strong>Game Usage Data</strong>: Dungeon progress, player level, etc. (Firebase Analytics)</li>
              <li><strong>Error Information</strong>: App crash logs (Firebase Crashlytics)</li>
              <li><strong>Advertising ID</strong>: Device identifier for ad delivery (Google AdMob)</li>
            </ul>

            <h3>Information You Provide</h3>
            <ul>
              <li><strong>Purchase Information</strong>: In-app purchase data (processed by Apple via RevenueCat)</li>
            </ul>

            <h3>Information We Do NOT Collect</h3>
            <ul>
              <li>Personally identifiable information such as name, email, or phone number</li>
              <li>Game save data (stored locally on your device and never transmitted to servers)</li>
            </ul>
          </section>

          <section>
            <h2>2. How We Use Information</h2>
            <p>We use the collected information to:</p>
            <ul>
              <li>Improve and optimize the App</li>
              <li>Detect and fix bugs</li>
              <li>Deliver advertisements</li>
              <li>Process in-app purchases</li>
            </ul>
          </section>

          <section>
            <h2>3. Third-Party Services</h2>
            <p>The App uses the following third-party services:</p>
            <ul>
              <li>
                <strong>Firebase (Google LLC)</strong>: Analytics and crash reporting
                <br /><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>
              </li>
              <li>
                <strong>Google AdMob</strong>: Advertising
                <br /><a href="https://support.google.com/admob/answer/6128543" target="_blank" rel="noopener noreferrer">AdMob Policy</a>
              </li>
              <li>
                <strong>RevenueCat</strong>: Payment processing
                <br /><a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">RevenueCat Privacy Policy</a>
              </li>
            </ul>
          </section>

          <section>
            <h2>4. Data Retention</h2>
            <p>Analytics data is retained as long as necessary for service improvement. Please refer to each service's policy for details.</p>
          </section>

          <section>
            <h2>5. Children's Privacy</h2>
            <p>The App does not knowingly collect personal information from children under 13.</p>
          </section>

          <section>
            <h2>6. Contact Us</h2>
            <p>For questions about this policy, please contact us at:</p>
            <ul>
              <li>Email: <a href="mailto:support@astapi.net">support@astapi.net</a></li>
            </ul>
          </section>

          <section>
            <h2>7. Changes to This Policy</h2>
            <p>We may update this policy without prior notice. Significant changes will be announced within the App.</p>
          </section>
        </article>
      </div>
    </div>
  )
}
