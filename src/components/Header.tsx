import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="flex items-center justify-between h-14 md:h-16 px-5 md:px-16 bg-[var(--color-bg)]">
      <Link to="/" className="text-sm md:text-base font-semibold text-[var(--color-text)]">
        astapi Games
      </Link>
    </header>
  )
}
