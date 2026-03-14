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
            New MODs
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>"HP Regen Conversion": Adds a percentage of your HP regen per second to ATK. A new build axis that converts recovery into offense.</li>
            <li>"Warlord's Enrage": Triggers once when HP drops below 30%, granting Attack Speed +20% and HP on Hit +300 as a comeback mechanic.</li>
            <li>"Ignite Lifesteal": Recovers a percentage of ignite damage dealt as HP. Adds survivability to ignite builds.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            New Unique Equipment
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>Double Strike Ring — Slot: Accessory / Drop: Bandit Chief — Fixed MOD: Critical Follow-up Attack (additional attack on critical hit)</li>
            <li>Uber Double Strike Ring — Slot: Accessory / Drop: Uber Bandit Chief — ATK 95 / DEF 70 — Fixed MODs: Crit Rate +30%, Critical Follow-up Attack, HP on Hit +80, Attack Speed +15%</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            Unique Equipment MOD Changes
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-2">
            <li>Lost Grimoire — Before: Crit Rate +25% → After: Ignite Chance +50%, Poison Chance +50%, DEF +40</li>
            <li>Champion Axe — Before: ATK +8, Crit Rate +15% → After: Attack Speed -20%, Crit Rate +30%, ATK +60, HP +100</li>
            <li>Dragon Heart — Before: HP Regen +55, ATK +30, DEF +30 → After: HP Regen +100, HP Regen +10%, HP Regen Conversion 50%</li>
            <li>Magma Core — Before: ATK 15 / DEF 5, ATK +20, Crit Rate +20% → After: ATK 30 / DEF 30, Ignite Chance +60%, Ignite Damage +50%, Ignite Lifesteal 10%</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            Uber Equipment MOD Changes
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-2">
            <li>Uber Blade of Ruin — Before: Crit Rate +30% → After: ATK Increase +30%</li>
            <li>Kraken Tentacle (Normal) — Before: Attack Speed +12%, HP Regen +30 → After: ATK +30, DEF +35, HP Regen +50, HP Regen +2%</li>
            <li>Uber Kraken Tentacle — Before: Attack Speed +25%, HP Regen +80, ATK +50, HP +210 → After: HP Regen +120, HP Regen +5%, HP +210, DEF +50</li>
            <li>Uber Kraken Fin — Before: Attack Speed +15%, HP Regen% +2%, DEF +60, HP +210 → After: Attack Speed -20%, HP Regen% +5%, DEF +80, HP +250</li>
            <li>Uber Kraken Eye — Before: Poison Chance +25%, Poison Damage +50%, Damage Reduction +8%, HP +220 → After: Poison Damage +50%, Poison Damage Reduction +5, HP +220, Poison Damage More +5%</li>
            <li>Uber Goblin Gauntlets — Before: Crit Rate +15%, ATK Increase +20%, HP +120, HP on Hit +35 → After: Warlord's Enrage, HP +200, ATK +80, ATK Increase +20%</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            Other Improvements
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>Attack speed now has a minimum floor of 0.1 to prevent it from reaching zero or below with negative modifiers</li>
            <li>Encyclopedia now displays MOD details for unique drops including Uber variants</li>
            <li>Fixed a bug where boss monsters appeared as duplicates in the normal monster list in the encyclopedia</li>
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
