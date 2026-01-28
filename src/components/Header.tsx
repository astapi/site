import { Link } from 'react-router-dom'
import '../styles/Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          astapi Games
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">ホーム</Link>
          <Link to="/lootdive" className="nav-link">LootDive</Link>
        </nav>
      </div>
    </header>
  )
}
