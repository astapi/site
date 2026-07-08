import { Link } from 'react-router-dom'

export default function LootDiveRelease200En() {
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
          LootDive ver2.0.0 "Season 3" Is Now Live
        </h1>
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <Link
            to="/article/lootdive-2-0-0-release"
            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            日本語 &rarr;
          </Link>
          <Link
            to="/article/lootdive-2-0-0-release/ko"
            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            한국어 &rarr;
          </Link>
        </div>

        <p className="text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] mb-10">
          Thank you for playing LootDive. The major update ver2.0.0 "Season 3," which we
          announced earlier, has now been released. It's packed with new content, including
          new systems, a new class, and a completely revamped passive tree. We hope you enjoy it.
        </p>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            🏆 Season 3 Has Started
          </h2>
          <p className="text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] mb-2">
            The new season, Season 3, has begun. To play in Season 3, you will need to create a
            new character. Your existing characters remain playable as Season 2 (and earlier) data.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            The Invite-Code 3x Speed Unlock Has Been Removed
          </h2>
          <p className="text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] mb-2">
            Until now, the 3x speed feature could be unlocked by entering an invite code. As of
            this update, this system has been removed.
          </p>
          <p className="text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] mb-2">
            The review section had become filled with invite codes in a way we had never intended.
            To keep the review section healthy, we made the difficult decision to remove this feature.
            We sincerely apologize for any inconvenience this may cause to those who had been using it.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            What's New in ver2.0.0
          </h2>
          <p className="text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] mb-4">
            For full details on ver2.0.0 — including the Pet (Mini-Monster) system, the new "Tamer"
            class, and the completely revamped passive tree — please see the announcement below.
          </p>
          <Link
            to="/article/lootdive-update-2-0-0/en"
            className="flex flex-col gap-3 p-6 bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-text)] transition-colors"
          >
            <span className="text-xs font-medium text-[var(--color-text-muted)]">Update Notes</span>
            <span className="text-base md:text-lg font-semibold leading-relaxed text-[var(--color-text)]">
              LootDive ver2.0.0 "Season 3" Update Notes
            </span>
            <span className="text-sm font-medium text-[var(--color-text-muted)]">Read more &rarr;</span>
          </Link>
        </section>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            The Official Wiki Now Supports ver2.0.0
          </h2>
          <p className="text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] mb-4">
            The official Wiki has been updated for ver2.0.0. If you'd like to dig into the new
            systems and build details, please check it out as well.
          </p>
          <a
            href="https://wiki.astapi.net/lootdive/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-3 p-6 bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-text)] transition-colors"
          >
            <span className="text-xs font-medium text-[var(--color-text-muted)]">Official Wiki</span>
            <span className="text-base md:text-lg font-semibold leading-relaxed text-[var(--color-text)]">
              LootDive Official Wiki
            </span>
            <span className="text-sm font-medium text-[var(--color-text-muted)]">Visit the Wiki &rarr;</span>
          </a>
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
