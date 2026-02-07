import { Link } from 'react-router-dom'
import { Smartphone, ArrowRight, Plus } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-[var(--color-bg)]">
      {/* Hero Section */}
      <section className="flex flex-col items-center w-full px-5 pt-[60px] pb-10 md:px-16 md:pt-[100px] md:pb-[60px]">
        <h1 className="text-[32px] md:text-[48px] font-bold text-[var(--color-text)] text-center">
          astapi Games
        </h1>
        <p className="mt-3 md:mt-4 text-sm md:text-base text-[var(--color-text-light)] text-center">
          つくったゲーム
        </p>
      </section>

      {/* Apps Section */}
      <section className="flex flex-col gap-6 md:gap-8 w-full max-w-[1024px] mx-auto px-5 pb-[60px] md:px-16 md:pb-[100px]">
        {/* LootDive Card */}
        <div className="flex flex-col md:flex-row bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] overflow-hidden">
          {/* Screenshots Area - Mobile: top, Desktop: right */}
          <div className="order-1 md:order-2 md:w-[460px] md:shrink-0">
            <div
              className="flex items-end justify-center gap-3 md:gap-4 h-[220px] md:h-full pt-6 px-6 pb-0 md:pt-8 md:pr-8 md:pb-0 md:pl-0"
              style={{
                background: 'linear-gradient(180deg, var(--color-gradient-start) 0%, var(--color-gradient-end) 100%)'
              }}
            >
              <div className="w-[95px] md:w-[140px] h-[205px] md:h-[303px] rounded-[10px] md:rounded-xl border border-[var(--color-border-light)] overflow-hidden bg-black">
                <img
                  src="/images/lootdive/ss-home.png"
                  alt="LootDive Screenshot 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[95px] md:w-[140px] h-[205px] md:h-[303px] rounded-[10px] md:rounded-xl border border-[var(--color-border-light)] overflow-hidden bg-black">
                <img
                  src="/images/lootdive/ss-battle2.png"
                  alt="LootDive Screenshot 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[95px] md:w-[140px] h-[205px] md:h-[303px] rounded-[10px] md:rounded-xl border border-[var(--color-border-light)] overflow-hidden bg-black">
                <img
                  src="/images/lootdive/ss-inventory2.png"
                  alt="LootDive Screenshot 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content Area - Mobile: bottom, Desktop: left */}
          <div className="order-2 md:order-1 flex flex-col flex-1 gap-4 md:gap-6 p-6 md:p-12 md:justify-center">
            {/* Badge */}
            <div className="flex">
              <span className="inline-flex items-center gap-[5px] md:gap-[6px] px-[10px] md:px-3 py-1 bg-[var(--color-badge-bg)] rounded-full">
                <span className="w-[6px] h-[6px] rounded-full bg-[var(--color-badge-dot)]"></span>
                <span className="text-[11px] md:text-xs font-medium text-[var(--color-badge-text)]">配信中</span>
              </span>
            </div>

            {/* Title with Icon */}
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-11 md:w-14 h-11 md:h-14 rounded-[10px] md:rounded-xl overflow-hidden shrink-0">
                <img
                  src="/images/lootdive/icon.png"
                  alt="LootDive Icon"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl md:text-[32px] font-bold text-[var(--color-text)]">
                LootDive
              </h3>
            </div>

            {/* Description */}
            <p className="text-sm md:text-[15px] leading-[1.7] text-[var(--color-text-muted)] max-w-[480px]">
              完全オートバトルの放置系ハクスラRPG。<br />
              ダンジョンを探索して、レア装備を集めて、自分だけのビルドを構築しよう。
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-[10px] md:gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-[6px] md:gap-2 px-4 md:px-5 py-[10px] bg-[var(--color-text)] rounded-lg"
              >
                <Smartphone className="w-[14px] md:w-4 h-[14px] md:h-4 text-white" />
                <span className="text-xs md:text-[13px] font-medium text-white">App Store</span>
              </a>
              <Link
                to="/lootdive"
                className="inline-flex items-center gap-[5px] md:gap-[6px] px-4 md:px-5 py-[10px] border border-[var(--color-border-light)] rounded-lg"
              >
                <span className="text-xs md:text-[13px] font-medium text-[#555555]">詳しく見る</span>
                <ArrowRight className="w-3 md:w-[14px] h-3 md:h-[14px] text-[#555555]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Coming Soon Card */}
        <div className="flex flex-col items-center justify-center gap-[6px] md:gap-2 h-[120px] md:h-[160px] bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border-light)]">
          <Plus className="w-5 md:w-6 h-5 md:h-6 text-[#CCCCCC]" />
          <span className="text-[13px] md:text-sm text-[var(--color-text-lighter)]">
            次のアプリを準備中...
          </span>
        </div>
      </section>
    </div>
  )
}
