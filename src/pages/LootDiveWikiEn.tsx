import { Link } from 'react-router-dom'

export default function LootDiveWikiEn() {
  return (
    <div className="flex flex-col flex-1 bg-[var(--color-bg)]">
      <article className="flex flex-col w-full max-w-[800px] mx-auto px-5 pt-10 pb-[60px] md:px-16 md:pt-16 md:pb-[100px]">
        <Link
          to="/"
          className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors mb-8"
        >
          &larr; Back to Top
        </Link>

        <h1 className="text-2xl md:text-[32px] font-bold text-[var(--color-text)] mb-2">
          LootDive Official Wiki is Now Live
        </h1>
        <div className="flex items-center gap-3 mb-8">
          <p className="text-sm text-[var(--color-text-muted)]">
            April 19, 2026
          </p>
          <Link
            to="/article/lootdive-wiki"
            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            日本語 &rarr;
          </Link>
        </div>

        <p className="text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] mb-8">
          The official LootDive Wiki is now available.<br />
          It covers monster data, drop tables, damage formulas, and system mechanics — everything you need for build crafting and strategy. Check it out!
        </p>

        <a
          href="https://wiki.astapi.net/lootdive/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col gap-3 p-6 bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-text)] transition-colors mb-10"
        >
          <span className="text-xs font-medium text-[var(--color-text-muted)]">Official Wiki</span>
          <span className="text-base md:text-lg font-semibold leading-relaxed text-[var(--color-text)]">
            LootDive Official Wiki
          </span>
          <span className="text-sm font-medium text-[var(--color-text-muted)]">Visit the Wiki &rarr;</span>
        </a>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            What's Included
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>Monster data (stats, skills, dungeon spawns)</li>
            <li>Drop tables (obtainable gear and materials)</li>
            <li>Damage calculation formulas</li>
            <li>Game system explanations</li>
          </ul>
        </section>

        <div className="border-t border-[var(--color-border)] pt-8">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            Download LootDive
          </h2>
          <a
            href="https://apps.apple.com/app/lootdive/id6758569313"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            Download on the App Store &rarr;
          </a>
        </div>
      </article>
    </div>
  )
}
