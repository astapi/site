import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg)]">
      {/* Divider */}
      <div className="px-5 md:px-16">
        <div className="h-[1px] bg-[var(--color-border)]"></div>
      </div>

      {/* Footer Content */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 px-5 py-6 md:px-16 md:py-8">
        {/* Links - Mobile: first, Desktop: second */}
        <div className="flex items-center gap-5 md:gap-6 order-1 md:order-2">
          <Link
            to="/privacy"
            className="text-[11px] md:text-xs text-[var(--color-text-lighter)] hover:text-[var(--color-text-muted)] transition-colors"
          >
            プライバシーポリシー
          </Link>
          <a
            href="mailto:contact@astapi.net"
            className="text-[11px] md:text-xs text-[var(--color-text-lighter)] hover:text-[var(--color-text-muted)] transition-colors"
          >
            お問い合わせ
          </a>
        </div>

        {/* Copyright - Mobile: second, Desktop: first */}
        <p className="text-[11px] md:text-xs text-[var(--color-text-lighter)] order-2 md:order-1">
          &copy; 2026 astapi Games
        </p>
      </div>
    </footer>
  )
}
