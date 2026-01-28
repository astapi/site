import { Link } from 'react-router-dom'
import '../styles/Home.css'

export default function Home() {
  return (
    <div className="page-container">
      <section className="hero">
        <h1>astapi Games</h1>
        <p className="hero-subtitle">モバイルゲーム開発</p>
        <p className="hero-description">
          モバイルゲームの開発を行っています。
        </p>
      </section>

      <section className="apps-section">
        <h2>開発中のアプリ</h2>
        <div className="app-grid">
          <Link to="/lootdive" className="app-card">
            <h3>LootDive</h3>
            <p>完全自動戦闘のハクスラRPG。装備とパッシブでビルドを組み、ダンジョン周回で戦利品を厳選しよう。</p>
            <span className="app-status">開発中</span>
          </Link>
        </div>
      </section>

      <section className="about-section">
        <h2>事業概要</h2>
        <p>
          astapi Gamesは、ユーザーに楽しさと価値を提供するモバイルゲームの開発に取り組んでいます。
        </p>
      </section>
    </div>
  )
}
