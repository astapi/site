import { Link } from 'react-router-dom'

export default function LootDiveUpdate130En() {
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
          Major Update ver1.3.0
        </h1>
        <div className="flex items-center gap-3 mb-8">
          <p className="text-sm text-[var(--color-text-muted)]">
            March 29, 2026
          </p>
          <Link
            to="/article/lootdive-update-1-3-0"
            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            日本語 &rarr;
          </Link>
        </div>

        <div className="bg-[var(--color-bg-secondary)] border-l-4 border-yellow-500 px-4 py-3 text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] mb-8">
          This information is current as of March 29, 2026 at 9:00 PM (JST). Please note that the content may change by the time ver1.3.0 is released.
        </div>

        {/* New Content */}
        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            New Content
          </h2>

          <h3 className="text-base md:text-lg font-bold text-[var(--color-text)] mb-2">
            New Playable Class: Frost Mage
          </h3>
          <p className="text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] mb-2">
            A new class wielding ice magic has arrived, built around two new status effects: Chill and Freeze.
          </p>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1 mb-6">
            <li>Chill: Reduces enemy attack speed</li>
            <li>Freeze: Completely stops enemy actions for a duration</li>
          </ul>

          <h3 className="text-base md:text-lg font-bold text-[var(--color-text)] mb-2">
            New Boss: UberUber Goblin King
          </h3>
          <p className="text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] mb-2">
            A supreme-difficulty boss with abilities far surpassing the Uber Goblin King. Unlocked by defeating all existing Uber bosses.
          </p>
          <div className="bg-[var(--color-bg-secondary)] border-l-4 border-yellow-500 px-4 py-3 text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] mb-6">
            ⚠️ Even if you have previously cleared them, you must defeat each Uber boss once more to unlock this challenge.
          </div>

          <h3 className="text-base md:text-lg font-bold text-[var(--color-text)] mb-2">
            Uber Passive Tree
          </h3>
          <p className="text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)]">
            Defeat Uber bosses to earn points and unlock the Uber Passive Tree, granting powerful new effects.
          </p>
        </section>

        {/* Balance Changes & Reworks */}
        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            Balance Changes &amp; Reworks
          </h2>

          <h3 className="text-base md:text-lg font-bold text-[var(--color-text)] mb-2">
            Defense System Overhaul
          </h3>
          <p className="text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] mb-2">
            Damage reduction nodes have been removed from the Passive Tree. In their place, a new defensive mechanic — "Damage Deferral" MOD — has been introduced.
          </p>
          <div className="bg-[var(--color-bg-secondary)] border-l-4 border-[var(--color-border)] px-4 py-3 text-sm md:text-[15px] leading-[1.8] text-[var(--color-text-muted)] mb-2">
            Design intent: Under the previous system, 99% damage reduction was easily achievable by combining DEF with tree nodes. This meant that as long as a character could out-damage enemy regeneration, they could progress through the Dimensional Corridor indefinitely without ever dying (the current #1 ranking sits at floor 30,600). This change shifts defense from "never take damage" to "how you manage the damage you take."
          </div>
          <p className="text-sm md:text-[15px] leading-[1.8] text-[var(--color-text-muted)] mb-6">
            Note: Damage reduction MODs on armor remain unchanged.
          </p>

          <h3 className="text-base md:text-lg font-bold text-[var(--color-text)] mb-2">
            Poison Tree Adjustments
          </h3>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1 mb-6">
            <li>Poison application rate increased</li>
            <li>Damage reduction while poisoning removed</li>
          </ul>

          <h3 className="text-base md:text-lg font-bold text-[var(--color-text)] mb-2">
            Critical Tree Buff
          </h3>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>Critical damage significantly increased</li>
          </ul>
        </section>

        {/* Bug Fixes */}
        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            Bug Fixes
          </h2>

          <h3 className="text-base md:text-lg font-bold text-[var(--color-text)] mb-2">
            Item MOD Count Fix
          </h3>
          <p className="text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)]">
            A bug caused items with 3 fixed MODs to receive up to 4 additional random MODs, resulting in 7 total MODs. Since items are designed for a maximum of 4 MODs, this has been corrected to 3 fixed + 1 random (4 total).
          </p>
        </section>

        {/* Improvements */}
        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            Improvements
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>You can now resume the Dimensional Corridor from your highest reached floor every 201 floors</li>
            <li>Rankings will be separated by app version due to balance changes and reworks</li>
            <li>In ver1.3.0, all players will start from floor 1</li>
            <li>Rankings from ver1.2.4 will be viewable on the official website</li>
          </ul>
        </section>

        {/* Other Changes */}
        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            Other Changes
          </h2>

          <h3 className="text-base md:text-lg font-bold text-[var(--color-text)] mb-2">
            Fast-Forward Unlock Timing
          </h3>
          <p className="text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] mb-2">
            The fast-forward feature is now unlocked after clearing the Final Land.
          </p>
          <div className="bg-[var(--color-bg-secondary)] border-l-4 border-[var(--color-border)] px-4 py-3 text-sm md:text-[15px] leading-[1.8] text-[var(--color-text-muted)] mb-2">
            Reason: This feature was originally added for endgame players farming content, but being available from the start significantly shortened time-to-clear for all players.
          </div>
          <p className="text-sm md:text-[15px] leading-[1.8] text-[var(--color-text-muted)]">
            Note: Players who unlocked 3x speed via purchase or referral can still use it from the beginning.
          </p>
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
