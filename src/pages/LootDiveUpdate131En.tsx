import { Link } from 'react-router-dom'

export default function LootDiveUpdate131En() {
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
          LootDive ver1.3.1 Update Notes
        </h1>
        <div className="flex items-center gap-3 mb-8">
          <p className="text-sm text-[var(--color-text-muted)]">
            April 19, 2026
          </p>
          <Link
            to="/article/lootdive-update-1-3-1"
            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            日本語 &rarr;
          </Link>
        </div>

        {/* New Boss */}
        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            New Boss
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>UberUber Bandit Leader arrives — the second ultimate boss after UberUber Goblin King</li>
            <li>Added exclusive skills "Twin Blade" and "Shadow Snare", plus the True Shadow Conqueror badge</li>
          </ul>
        </section>

        {/* New Unique Gear */}
        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            New Unique Gear
          </h2>

          <h3 className="text-base md:text-lg font-bold text-[var(--color-text)] mb-2">
            UberUber Goblin Stomp (Boots)
          </h3>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1 mb-6">
            <li>King's Slam: ATK×3 extra hit every 5 attacks</li>
            <li>Royal Roar: Cleanse your own Poison / Ignite / Chill every 3 attacks</li>
            <li>+200 HP Regen/sec, HP +220</li>
          </ul>

          <h3 className="text-base md:text-lg font-bold text-[var(--color-text)] mb-2">
            UberUber Double Strike Ring (Accessory)
          </h3>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>Twin Blade: Each attack triggers a 100%-ATK follow-up (no crit required)</li>
            <li>HP on Hit +200, Attack Speed +25%, DEF +150</li>
          </ul>
        </section>

        {/* UI Improvements */}
        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            UI Improvements
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>Encyclopedia now groups boss abilities by trigger condition</li>
          </ul>
        </section>

        {/* Bug Fixes */}
        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            Bug Fixes
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>"Damage Deferral" MOD now applies correctly to the existing Bandit's follow-up attack</li>
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
