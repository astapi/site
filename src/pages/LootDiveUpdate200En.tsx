import { Link } from 'react-router-dom'

export default function LootDiveUpdate200En() {
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
          LootDive ver2.0.0 "Season 3" Update Notes
        </h1>
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <p className="text-sm text-[var(--color-text-muted)]">
            June 24, 2026
          </p>
          <Link
            to="/article/lootdive-update-2-0-0"
            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            日本語 &rarr;
          </Link>
          <Link
            to="/article/lootdive-update-2-0-0/ko"
            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            한국어 &rarr;
          </Link>
        </div>

        <p className="text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] mb-10">
          ver2.0.0 "Season 3" is launching soon! A major update featuring a new system,
          a new class, a completely revamped passive tree, and more.
        </p>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            🐾 Pet (Mini-Monster) System
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>A new collection element: pets drop at a low rate when you defeat monsters (0.5% normal / 3% bosses)</li>
            <li>Pets grant unique buffs (ATK / DEF / Max HP / Crit Rate / Lifesteal / Freeze Cap, and more)</li>
            <li>Upgrade pets in stages using duplicates (up to Lv6 for 2x base value); unwanted duplicates can be discarded</li>
            <li>Pets appear at the player's feet during battle, and you can track your collection in the encyclopedia</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            🧙 New Playable Class: Tamer
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>A new class specialized in pets (starting HP100 / ATK10 / DEF4)</li>
            <li>Unique traits: Pet drop rate +0.5% and Pet effects x2</li>
            <li>The revamped character creation screen now shows each class's starting stats and unique traits</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            🌳 Passive Tree Overhaul
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>The skill tree has been completely redesigned into a circular mesh structure (around 251 nodes)</li>
            <li>Each class now has its own dedicated starting point, highlighted so you can easily branch into your strengths</li>
            <li>Keystones (powerful nodes) sit deep behind 12–15 prerequisite nodes, strengthening build identity</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            🏆 Season 3 Begins
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>Rankings are reset to start the new season (Dimensional Rush rankings and records are now per-season)</li>
            <li>Season badges (S2 / S3) are shown on the character select screen; characters from S2 or earlier keep the old tree</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            ⚔️ Expanded Defense System
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>Added Block, Shield, and Evasion to the defense system</li>
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
