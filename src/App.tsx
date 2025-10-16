import { useEffect, useState } from "react";

// 사용 가능한 daisyUI 테마 목록
const themes = [
  { name: "라이트", value: "light" },
  { name: "다크", value: "dark" },
  { name: "컵케이크", value: "cupcake" },
  { name: "범블비", value: "bumblebee" },
  { name: "에메랄드", value: "emerald" },
  { name: "기업용", value: "corporate" },
  { name: "신스웨이브", value: "synthwave" },
  { name: "레트로", value: "retro" },
  { name: "사이버펑크", value: "cyberpunk" },
  { name: "발렌타인", value: "valentine" },
  { name: "할로윈", value: "halloween" },
  { name: "가든", value: "garden" },
  { name: "포레스트", value: "forest" },
  { name: "아쿠아", value: "aqua" },
  { name: "로파이", value: "lofi" },
  { name: "파스텔", value: "pastel" },
  { name: "판타지", value: "fantasy" },
  { name: "와이어프레임", value: "wireframe" },
  { name: "블랙", value: "black" },
  { name: "럭셔리", value: "luxury" },
  { name: "드라큘라", value: "dracula" },
  { name: "CMYK", value: "cmyk" },
  { name: "가을", value: "autumn" },
  { name: "비즈니스", value: "business" },
  { name: "애시드", value: "acid" },
  { name: "레모네이드", value: "lemonade" },
  { name: "나이트", value: "night" },
  { name: "커피", value: "coffee" },
  { name: "윈터", value: "winter" },
  { name: "딤", value: "dim" },
  { name: "노르드", value: "nord" },
  { name: "선셋", value: "sunset" },
];

export default function App() {
  const [selectedTheme, setSelectedTheme] = useState(
    localStorage.getItem("selectedTheme") || "light"
  );

  useEffect(() => {
    localStorage.setItem("selectedTheme", selectedTheme);
    // HTML 요소에 테마 적용
    document.documentElement.setAttribute("data-theme", selectedTheme);
  }, [selectedTheme]);

  const handleThemeChange = (theme: string) => {
    setSelectedTheme(theme);
  };

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      {/* 네비게이션 바 */}
      <div className="navbar bg-base-200 shadow-lg">
        <div className="navbar-start">
          <h1 className="text-xl font-bold">daisyUI 테마 컨트롤러 예제</h1>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-primary">
              🎨 테마 선택
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              {themes.map((theme) => (
                <li key={theme.value}>
                  <button
                    className={`${
                      selectedTheme === theme.value ? "active" : ""
                    }`}
                    onClick={() => handleThemeChange(theme.value)}
                  >
                    {theme.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="container mx-auto p-6 space-y-8">
        {/* 현재 테마 표시 */}
        <div className="alert alert-info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>
            현재 선택된 테마:{" "}
            <strong>
              {themes.find((t) => t.value === selectedTheme)?.name}
            </strong>
          </span>
        </div>

        {/* 버튼 예제 */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">버튼 컴포넌트</h2>
            <div className="flex flex-wrap gap-4">
              <button className="btn">기본</button>
              <button className="btn btn-primary">Primary</button>
              <button className="btn btn-secondary">Secondary</button>
              <button className="btn btn-accent">Accent</button>
              <button className="btn btn-ghost">Ghost</button>
              <button className="btn btn-link">Link</button>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              <button className="btn btn-outline">Outline</button>
              <button className="btn btn-outline btn-primary">
                Primary Outline
              </button>
              <button className="btn btn-outline btn-secondary">
                Secondary Outline
              </button>
            </div>
          </div>
        </div>

        {/* 카드 예제 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card bg-primary text-primary-content shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Primary 카드</h2>
              <p>이것은 primary 색상을 사용한 카드입니다.</p>
              <div className="card-actions justify-end">
                <button className="btn">버튼</button>
              </div>
            </div>
          </div>

          <div className="card bg-secondary text-secondary-content shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Secondary 카드</h2>
              <p>이것은 secondary 색상을 사용한 카드입니다.</p>
              <div className="card-actions justify-end">
                <button className="btn">버튼</button>
              </div>
            </div>
          </div>

          <div className="card bg-accent text-accent-content shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Accent 카드</h2>
              <p>이것은 accent 색상을 사용한 카드입니다.</p>
              <div className="card-actions justify-end">
                <button className="btn">버튼</button>
              </div>
            </div>
          </div>
        </div>

        {/* 폼 예제 */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">폼 컴포넌트</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">이름</span>
                </label>
                <input
                  type="text"
                  placeholder="이름을 입력하세요"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">이메일</span>
                </label>
                <input
                  type="email"
                  placeholder="이메일을 입력하세요"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">메시지</span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-24"
                  placeholder="메시지를 입력하세요"
                ></textarea>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">선택</span>
                </label>
                <select className="select select-bordered">
                  <option disabled selected>
                    옵션을 선택하세요
                  </option>
                  <option>옵션 1</option>
                  <option>옵션 2</option>
                  <option>옵션 3</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* 알림 예제 */}
        <div className="space-y-4">
          <div className="alert alert-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-current shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>정보 알림입니다!</span>
          </div>
          <div className="alert alert-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>성공 알림입니다!</span>
          </div>
          <div className="alert alert-warning">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
            <span>경고 알림입니다!</span>
          </div>
          <div className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>에러 알림입니다!</span>
          </div>
        </div>

        {/* 통계 예제 */}
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">총 좋아요</div>
            <div className="stat-value text-primary">25.6K</div>
            <div className="stat-desc">21% 증가 (지난 달 대비)</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">페이지 뷰</div>
            <div className="stat-value text-secondary">2.6M</div>
            <div className="stat-desc">21% 증가 (지난 달 대비)</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    alt="Avatar"
                  />
                </div>
              </div>
            </div>
            <div className="stat-value">86%</div>
            <div className="stat-title">작업 완료</div>
            <div className="stat-desc text-secondary">31개 작업 남음</div>
          </div>
        </div>

        {/* 프로그레스 바 예제 */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">진행률 표시</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>프로젝트 진행률</span>
                  <span>75%</span>
                </div>
                <progress
                  className="progress progress-primary w-full"
                  value="75"
                  max="100"
                ></progress>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>학습 진행률</span>
                  <span>50%</span>
                </div>
                <progress
                  className="progress progress-secondary w-full"
                  value="50"
                  max="100"
                ></progress>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>목표 달성률</span>
                  <span>90%</span>
                </div>
                <progress
                  className="progress progress-accent w-full"
                  value="90"
                  max="100"
                ></progress>
              </div>
            </div>
          </div>
        </div>

        {/* 배지 예제 */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">배지 컴포넌트</h2>
            <div className="flex flex-wrap gap-2">
              <div className="badge">기본</div>
              <div className="badge badge-primary">Primary</div>
              <div className="badge badge-secondary">Secondary</div>
              <div className="badge badge-accent">Accent</div>
              <div className="badge badge-ghost">Ghost</div>
              <div className="badge badge-outline">Outline</div>
              <div className="badge badge-success">Success</div>
              <div className="badge badge-warning">Warning</div>
              <div className="badge badge-error">Error</div>
              <div className="badge badge-info">Info</div>
            </div>
          </div>
        </div>
      </div>

      {/* 푸터 */}
      <footer className="footer footer-center p-4 bg-base-200 text-base-content">
        <aside>
          <p>daisyUI 테마 컨트롤러 예제 - 다양한 테마를 경험해보세요!</p>
        </aside>
      </footer>
    </div>
  );
}
