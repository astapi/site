import '../styles/LootDiveLegal.css'

export default function LootDivePrivacyEn() {
  return (
    <div className="ld-legal-page">
      <div className="ld-legal-container">
        <div className="ld-legal-nav">
          <a href="/lootdive" className="ld-legal-back">&larr; Back to LootDive</a>
          <a href="/lootdive/privacy" className="ld-legal-lang">日本語</a>
        </div>

        <article className="ld-legal-content">
          <h1>Privacy Policy</h1>
          <p className="ld-legal-updated">Last updated: February 11, 2026</p>

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
              <li><strong>Usage Information</strong>: Your post-purchase usage data (gameplay activity, consumption status, etc.) may be shared with Apple Inc. to support refund request decisions</li>
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
              <li>Handle App Store refund requests and prevent fraud</li>
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
