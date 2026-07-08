import { Link } from 'react-router-dom'

export default function LootDiveRelease200Ko() {
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
          루트다이브 ver2.0.0 「시즌 3」을 출시했습니다
        </h1>
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <Link
            to="/article/lootdive-2-0-0-release"
            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            日本語 &rarr;
          </Link>
          <Link
            to="/article/lootdive-2-0-0-release/en"
            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            English &rarr;
          </Link>
        </div>

        <p className="text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] mb-10">
          언제나 루트다이브를 플레이해 주셔서 진심으로 감사드립니다.
          앞서 안내드렸던 대형 업데이트 ver2.0.0 「시즌 3」을 출시했습니다.
          신규 시스템·신규 클래스·패시브 트리 전면 개편 등 풍성한 콘텐츠로 준비했으니, 부디 즐겨 주시기 바랍니다.
        </p>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            🏆 시즌 3가 시작되었습니다
          </h2>
          <p className="text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] mb-2">
            새로운 시즌 「시즌 3」가 시작되었습니다.
            시즌 3에서 플레이하시려면 새로운 캐릭터를 생성하셔야 합니다.
            기존 캐릭터는 시즌 2 이전 데이터로 계속 즐기실 수 있습니다.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            초대 코드를 통한 3배속 기능 해제를 폐지했습니다
          </h2>
          <p className="text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] mb-2">
            지금까지 초대 코드 입력을 통해 3배속 기능을 해제할 수 있는 방식을 제공해 왔으나, 이번 업데이트를 기점으로 폐지했습니다.
          </p>
          <p className="text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] mb-2">
            본래 의도하지 않았던 형태로 리뷰란이 초대 코드로 가득 차는 상황이 발생하고 있었습니다.
            리뷰란의 건전화를 위해 부득이하게 본 기능을 삭제하기로 결정했습니다.
            그동안 이용해 주신 여러분께 불편을 끼쳐 드린 점 진심으로 사과드립니다.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            ver2.0.0 업데이트 내용
          </h2>
          <p className="text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] mb-4">
            펫(미니 몬스터) 시스템과 신규 클래스 「테이머」, 패시브 트리 전면 개편 등
            ver2.0.0의 자세한 업데이트 내용은 아래 안내를 참고해 주세요.
          </p>
          <Link
            to="/article/lootdive-update-2-0-0/ko"
            className="flex flex-col gap-3 p-6 bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-text)] transition-colors"
          >
            <span className="text-xs font-medium text-[var(--color-text-muted)]">업데이트 정보</span>
            <span className="text-base md:text-lg font-semibold leading-relaxed text-[var(--color-text)]">
              루트다이브 ver2.0.0 「시즌 3」 업데이트 정보
            </span>
            <span className="text-sm font-medium text-[var(--color-text-muted)]">자세히 보기 &rarr;</span>
          </Link>
        </section>

        <section className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-[var(--color-text)] mb-4">
            공식 위키도 ver2.0.0에 대응했습니다
          </h2>
          <p className="text-sm md:text-[15px] leading-[1.8] text-[var(--color-text)] mb-4">
            공식 위키도 ver2.0.0 내용에 대응하고 있습니다.
            신규 시스템이나 빌드의 상세 정보를 확인하고 싶으신 분은 함께 참고해 주세요.
          </p>
          <a
            href="https://wiki.astapi.net/lootdive/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-3 p-6 bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-text)] transition-colors"
          >
            <span className="text-xs font-medium text-[var(--color-text-muted)]">공식 위키</span>
            <span className="text-base md:text-lg font-semibold leading-relaxed text-[var(--color-text)]">
              루트다이브 공식 위키
            </span>
            <span className="text-sm font-medium text-[var(--color-text-muted)]">위키 보기 &rarr;</span>
          </a>
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
