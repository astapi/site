import { Link } from 'react-router-dom'

export default function LootDiveUpdate121En() {
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
          LootDive ver1.2.1 Update Notes
        </h1>
        <div className="flex items-center gap-3 mb-8">
          <p className="text-sm text-[var(--color-text-muted)]">
            March 14, 2026
          </p>
          <Link
            to="/article/lootdive-update-1-2-1"
            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            日本語 &rarr;
          </Link>
        </div>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            Balance Changes
          </h2>

          <h3 className="text-base md:text-lg font-semibold text-[var(--color-text)] mb-3">
            New Mods
          </h3>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] mb-6 space-y-1">
            <li>"Warlord's Enrage": Triggers once at 30% HP, granting +20% attack speed and +300 HP on hit</li>
            <li>"Ignite Lifesteal": Recover a percentage of ignite damage as HP</li>
          </ul>

          <h3 className="text-base md:text-lg font-semibold text-[var(--color-text)] mb-3">
            Unique Item Changes
          </h3>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] mb-6 space-y-1">
            <li>Magma Core: Reworked to ignite-focused (Ignite Chance +60%, Ignite Damage +50%, Ignite Lifesteal +10%)</li>
            <li>Kraken Tentacle: Changed to ATK +30, DEF +35, HP Regen +50, HP Regen +2%</li>
            <li>Uber Kraken Tentacle: Changed to HP Regen +120, HP Regen +5%, HP +210, DEF +50</li>
            <li>Uber Goblin Grip: Changed to Warlord's Enrage, HP +200, ATK +80, ATK Increased +20%</li>
            <li>Uber Kraken Fin: Changed to Attack Speed -20%, HP Regen +5%, DEF +80, HP +250</li>
            <li>Uber Kraken Eye: Changed to Poison Damage +50%, Poison Damage Reduction +5, HP +220, Poison Damage 5% more</li>
            <li>Uber Endblade: Changed to ATK Increase +10%/5s, ATK Increased +30%, Attack Speed +20%, HP +280</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            Improvements
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>Encyclopedia now displays mod effects for unique items.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            Bug Fixes
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>Fixed an unnecessary header appearing on the encyclopedia detail screen.</li>
          </ul>
        </section>

        <div className="border-t border-[var(--color-border)] pt-8">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            Download LootDive
          </h2>
          <a
            href="https://apps.apple.com/jp/app/lootdive/id6758569313"
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
