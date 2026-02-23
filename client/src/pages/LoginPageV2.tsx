import { useState } from 'react'
import './LoginPageV2.css'

/**
 * LoginPageV2 컴포넌트 (디자인 B - 비교용)
 * - 다크 테마 + 스플릿 레이아웃
 * - 좌측: 메쉬 그라데이션 비주얼 + 통계 카드
 * - 우측: 글래스모피즘 폼 영역
 * - 폰트: Outfit(영문) + Noto Sans KR(한글) 조합
 */
function LoginPageV2() {
    // 로그인 ↔ 회원가입 모드 전환
    const [isLoginMode, setIsLoginMode] = useState(true)
    // 폼 입력 상태
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    // 비밀번호 표시 토글
    const [showPassword, setShowPassword] = useState(false)

    /**
     * 폼 제출 핸들러
     * - 디자인 프리뷰용이므로 실제 API 연동 없음
     */
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(isLoginMode ? '로그인 시도' : '회원가입 시도', { email, password, name })
    }

    return (
        <div className="login-v2">
            {/* ===== 좌측 비주얼 패널 ===== */}
            <div className="login-v2__visual">
                {/* 메쉬 그라데이션 배경 요소들 */}
                <div className="login-v2__mesh-1" />
                <div className="login-v2__mesh-2" />
                <div className="login-v2__mesh-3" />
                {/* 그리드 패턴 오버레이 */}
                <div className="login-v2__grid-pattern" />

                {/* 비주얼 헤드라인 */}
                <div className="login-v2__headline">
                    <h1 className="login-v2__headline-large">
                        Train<br />
                        Smarter.<br />
                        Live Better.
                    </h1>
                    <p className="login-v2__headline-sub">
                        AI 기반 맞춤형 운동 프로그램으로 당신의 한계를 넘어서세요.
                        실시간 피드백과 데이터 분석으로 더 효율적인 트레이닝을 경험하세요.
                    </p>
                </div>

                {/* 통계 카드 - 서비스 신뢰도 표현 */}
                <div className="login-v2__stats">
                    <div className="login-v2__stat-card">
                        <div className="login-v2__stat-value">12K+</div>
                        <div className="login-v2__stat-label">활성 회원</div>
                    </div>
                    <div className="login-v2__stat-card">
                        <div className="login-v2__stat-value">98%</div>
                        <div className="login-v2__stat-label">만족도</div>
                    </div>
                    <div className="login-v2__stat-card">
                        <div className="login-v2__stat-value">500+</div>
                        <div className="login-v2__stat-label">전문 클래스</div>
                    </div>
                </div>
            </div>

            {/* ===== 우측 폼 패널 ===== */}
            <div className="login-v2__form-panel">
                <div className="login-v2__form-container">
                    {/* 브랜드 영역 */}
                    <div className="login-v2__brand">
                        <div className="login-v2__logo-row">
                            {/* 로고 마크 - 덤벨 아이콘 */}
                            <div className="login-v2__logo-mark">
                                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="4" y="16" width="8" height="16" rx="2" fill="currentColor" opacity="0.9" />
                                    <rect x="36" y="16" width="8" height="16" rx="2" fill="currentColor" opacity="0.9" />
                                    <rect x="12" y="12" width="6" height="24" rx="2" fill="currentColor" />
                                    <rect x="30" y="12" width="6" height="24" rx="2" fill="currentColor" />
                                    <rect x="18" y="20" width="12" height="8" rx="1" fill="currentColor" opacity="0.7" />
                                </svg>
                            </div>
                            <span className="login-v2__logo-text">Fit Class</span>
                        </div>
                        <p className="login-v2__welcome">
                            {isLoginMode
                                ? '다시 돌아오셨군요! 오늘의 트레이닝을 시작하세요.'
                                : '새로운 여정이 시작됩니다. 함께 성장해요.'}
                        </p>
                    </div>

                    {/* 탭 전환 - 언더라인 스타일 */}
                    <div className="login-v2__tabs">
                        <button
                            className={`login-v2__tab ${isLoginMode ? 'login-v2__tab--active' : ''}`}
                            onClick={() => setIsLoginMode(true)}
                            type="button"
                        >
                            로그인
                        </button>
                        <button
                            className={`login-v2__tab ${!isLoginMode ? 'login-v2__tab--active' : ''}`}
                            onClick={() => setIsLoginMode(false)}
                            type="button"
                        >
                            회원가입
                        </button>
                    </div>

                    {/* 입력 폼 */}
                    <form onSubmit={handleSubmit} className="login-v2__form">
                        {/* 회원가입 모드 - 이름 필드 */}
                        {!isLoginMode && (
                            <div className="login-v2__field login-v2__fade-in">
                                <label htmlFor="v2-name" className="login-v2__label">이름</label>
                                <div className="login-v2__input-wrap">
                                    <svg className="login-v2__input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                    <input
                                        id="v2-name"
                                        type="text"
                                        placeholder="홍길동"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="login-v2__input"
                                    />
                                </div>
                            </div>
                        )}

                        {/* 이메일 */}
                        <div className="login-v2__field">
                            <label htmlFor="v2-email" className="login-v2__label">이메일</label>
                            <div className="login-v2__input-wrap">
                                <svg className="login-v2__input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                                <input
                                    id="v2-email"
                                    type="email"
                                    placeholder="example@fitclass.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="login-v2__input"
                                />
                            </div>
                        </div>

                        {/* 비밀번호 */}
                        <div className="login-v2__field">
                            <label htmlFor="v2-password" className="login-v2__label">비밀번호</label>
                            <div className="login-v2__input-wrap">
                                <svg className="login-v2__input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                </svg>
                                <input
                                    id="v2-password"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="login-v2__input"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="login-v2__pw-toggle"
                                    aria-label={showPassword ? '비밀번호 숨기기' : '비밀번호 보기'}
                                >
                                    {showPassword ? (
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="login-v2__pw-toggle-icon">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                        </svg>
                                    ) : (
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="login-v2__pw-toggle-icon">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* 비밀번호 찾기 */}
                        {isLoginMode && (
                            <div className="login-v2__forgot">
                                <a href="#" className="login-v2__forgot-link">비밀번호를 잊으셨나요?</a>
                            </div>
                        )}

                        {/* 제출 버튼 */}
                        <button type="submit" className="login-v2__submit">
                            <span>{isLoginMode ? '로그인' : '회원가입'}</span>
                            <svg className="login-v2__submit-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </form>

                    {/* 소셜 로그인 구분선 */}
                    <div className="login-v2__divider">
                        <span className="login-v2__divider-text">또는</span>
                    </div>

                    {/* 소셜 로그인 - 가로 배치 */}
                    <div className="login-v2__socials">
                        <button type="button" className="login-v2__social-btn login-v2__social-btn--kakao">
                            <svg viewBox="0 0 24 24" className="login-v2__social-icon">
                                <path d="M12 3C6.48 3 2 6.58 2 10.94c0 2.8 1.86 5.27 4.66 6.67-.15.56-.96 3.6-.99 3.83 0 0-.02.17.09.24.11.06.24.01.24.01.32-.04 3.7-2.44 4.28-2.86.55.08 1.13.12 1.72.12 5.52 0 10-3.58 10-7.94C22 6.58 17.52 3 12 3Z" fill="currentColor" />
                            </svg>
                            <span>카카오</span>
                        </button>

                        <button type="button" className="login-v2__social-btn login-v2__social-btn--google">
                            <svg viewBox="0 0 24 24" className="login-v2__social-icon">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1Z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l2.85-2.22.81-.62Z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53Z" fill="#EA4335" />
                            </svg>
                            <span>Google</span>
                        </button>
                    </div>

                    {/* 하단 */}
                    <p className="login-v2__footer">
                        © 2026 Fit Class. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginPageV2
