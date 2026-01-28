import { Link } from 'react-router-dom'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <Link to="/privacy" className="footer-link">プライバシーポリシー</Link>
          <span className="separator">|</span>
          <Link to="/terms" className="footer-link">利用規約</Link>
        </div>
        <p className="copyright">© 2026 astapi Games. All rights reserved.</p>
      </div>
    </footer>
  )
}
