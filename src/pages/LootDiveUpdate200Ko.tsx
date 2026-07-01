import { Link } from 'react-router-dom'

export default function LootDiveUpdate200Ko() {
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
          루트다이브 ver2.0.0 「시즌 3」 업데이트 정보
        </h1>
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <p className="text-sm text-[var(--color-text-muted)]">
            2026년 6월 24일
          </p>
          <Link
            to="/article/lootdive-update-2-0-0"
            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            日本語 &rarr;
          </Link>
          <Link
            to="/article/lootdive-update-2-0-0/en"
            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            English &rarr;
          </Link>
        </div>

        <p className="text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] mb-10">
          ver2.0.0 「시즌 3」가 곧 시작됩니다! 새로운 시스템, 새 클래스,
          패시브 트리 전면 리뉴얼 등 대형 업데이트를 선보입니다.
        </p>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            🐾 펫(미니 몬스터) 시스템
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>몬스터 처치 시 낮은 확률로 펫이 드롭되는 새로운 컬렉션 요소 (일반 0.5% / 보스 3%)</li>
            <li>펫은 고유 버프를 부여 (ATK / DEF / 최대 HP / 치명타율 / 라이프스틸 / 프리즈 상한 등)</li>
            <li>중복 펫으로 단계 강화 (최대 Lv6에서 기본값 2배), 불필요한 중복은 파기 가능</li>
            <li>전투 화면에서는 플레이어 발밑에 펫을 표시하며, 도감에서 수집 현황을 확인할 수 있습니다</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            🧙 신규 플레이어블 클래스 「테이머」
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>펫에 특화된 새 클래스 (초기 HP100 / ATK10 / DEF4)</li>
            <li>고유 능력: 펫 드롭률 +0.5% · 펫 효과 2배</li>
            <li>캐릭터 생성 화면을 개편하여 각 클래스의 초기 스탯과 고유 능력을 표시</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            🌳 패시브 트리 전면 리뉴얼
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>스킬 트리를 원형 메시 구조로 전면 리뉴얼 (251노드 규모)</li>
            <li>클래스별 전용 시작 지점을 도입. 자신의 시작점이 강조 표시되어 특기 계열로 뻗어나가기 쉽게</li>
            <li>키스톤(강력 노드)은 전제 12~15노드 안쪽에 배치하여 빌드 개성을 강화</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            🏆 시즌 3 시작
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>랭킹을 리셋하여 새 시즌 시작 (차원 회랑 랭킹·기록이 시즌별로)</li>
            <li>캐릭터 선택 화면에 시즌 배지(S2 / S3)를 표시. S2 이전 캐릭터는 기존 트리를 유지</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            ⚔️ 방어 시스템 확장
          </h2>
          <ul className="list-disc list-inside text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] space-y-1">
            <li>방어 시스템에 블록·실드·Evasion(회피)을 새로 추가</li>
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
