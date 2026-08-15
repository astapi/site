import { Link } from 'react-router-dom'

export default function LootDiveUpdate210Ko() {
  return (
    <div className="flex flex-col flex-1 bg-[var(--color-bg)]">
      <article className="flex flex-col w-full max-w-[800px] mx-auto px-5 pt-10 pb-[60px] md:px-16 md:pt-16 md:pb-[100px]">
        <Link
          to="/"
          className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors mb-8"
        >
          &larr; 홈으로 돌아가기
        </Link>

        <h1 className="text-2xl md:text-[32px] font-bold text-[var(--color-text)] mb-2">
          루트다이브 ver2.1.0 업데이트 정보
        </h1>
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <p className="text-sm text-[var(--color-text-muted)]">
            2026년 8월 15일
          </p>
          <Link
            to="/article/lootdive-update-2-1-0"
            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            日本語 &rarr;
          </Link>
          <Link
            to="/article/lootdive-update-2-1-0/en"
            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            English &rarr;
          </Link>
        </div>

        <p className="text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] mb-10">
          ver2.1.0를 배포했습니다!
          신규 엔드 콘텐츠 'UberUber 마왕'의 강림, 원하는 MOD를 확정으로 새길 수 있는
          신규 제작 '각인' 구현 등 엔드게임을 한층 깊게 만드는 업데이트를 선보입니다.
        </p>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            😈 신규 엔드 콘텐츠 'UberUber 마왕'
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>모든 Uber 및 UberUber 보스를 격파한 자 앞에만 나타나는 차원을 초월한 마왕</li>
            <li>엄청난 재생력을 지녀 어설픈 화력으로는 상처 하나 낼 수 없습니다</li>
            <li>보스 스킬 '멸망의 시각'으로 시간이 갈수록 공격이 끝없이 격화됩니다. 최강 빌드로 도전하세요</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            ⚒️ 신규 제작 요소 '각인'
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>레어 장비에 원하는 MOD를 하나 확정으로 새길 수 있는 신규 시스템</li>
            <li>장비당 1개까지. MOD 칸이 비어 있으면 추가, 가득 찼다면 교체할 MOD를 선택합니다</li>
            <li>'적중 시 회복', '회피율', '회복→ATK 변환' 등 일반 드롭으로는 붙지 않는 MOD도 각인으로 부여할 수 있습니다</li>
            <li>각인은 종말의 땅 이후의 던전에서 드롭됩니다 (보스 격파 시 확정 획득)</li>
            <li>홈 화면 하단의 '각인'에서 제작할 수 있습니다</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            🌳 패시브 트리 오류 수정 및 사과 말씀
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>전제 조건을 무시하고 리스펙(반환)이 가능해 트리가 분단되는 문제를 수정했습니다</li>
            <li>영향을 받은 캐릭터는 패시브 트리를 초기화하고, 소비한 스킬 포인트를 전액 반환해 드립니다</li>
            <li>사과의 뜻으로 모든 플레이어에게 리스펙 토큰 80개를 배포합니다</li>
            <li>불편을 드려 대단히 죄송합니다</li>
          </ul>
        </section>

        <div className="border-t border-[var(--color-border)] pt-8">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            루트다이브 다운로드
          </h2>
          <a
            href="https://apps.apple.com/app/lootdive/id6758569313"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            App Store에서 다운로드 &rarr;
          </a>
        </div>
      </article>
    </div>
  )
}
