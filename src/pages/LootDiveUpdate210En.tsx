import { Link } from 'react-router-dom'

export default function LootDiveUpdate210En() {
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
          LootDive ver2.1.0 Update Notes
        </h1>
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <p className="text-sm text-[var(--color-text-muted)]">
            August 15, 2026
          </p>
          <Link
            to="/article/lootdive-update-2-1-0"
            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            日本語 &rarr;
          </Link>
          <Link
            to="/article/lootdive-update-2-1-0/ko"
            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            한국어 &rarr;
          </Link>
        </div>

        <p className="text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] mb-10">
          ver2.1.0 is now live! This update deepens the endgame with the new
          endgame boss "UberUber Demon Lord" and "Engraving," a new crafting
          system that adds a mod you choose, guaranteed.
        </p>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            😈 New Endgame Content: UberUber Demon Lord
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>A demon lord beyond dimensions, appearing only before those who have defeated every Uber and UberUber boss</li>
            <li>Its monstrous regeneration shrugs off all but the mightiest firepower</li>
            <li>Its boss skill "Hour of Ruin" makes its attacks escalate endlessly over time — forge your ultimate build and take it down</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            ⚒️ New Crafting: Engraving
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>Engrave one chosen mod onto a rare item, guaranteed</li>
            <li>One per item. Added to a free slot, or replace a mod you select when all slots are full</li>
            <li>Mods that never roll on normal drops — such as HP on Hit, Evasion %, and Regen to ATK — can be added via Engraving</li>
            <li>Engraves drop in dungeons from the Land of Endings onward (guaranteed from boss kills)</li>
            <li>Craft from "Engrave" at the bottom of the Home screen</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            🌳 Passive Tree Fix and Apology
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>Fixed an issue where nodes could be refunded ignoring their prerequisites, leaving the tree disconnected</li>
            <li>Affected characters have had their passive tree reset, with all spent skill points fully refunded</li>
            <li>As an apology, 80 Respec Tokens have been granted to all players</li>
            <li>We sincerely apologize for the inconvenience</li>
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
