import { useState } from 'react'
import './LoginPage.css'

/**
 * LoginPage 컴포넌트
 * - 피트니스 브랜드에 맞는 프리미엄 로그인/회원가입 페이지
 * - 글래스모피즘 카드 디자인 + 다이나믹 그라데이션 배경
 * - 로그인 ↔ 회원가입 모드 전환 지원
 */
function LoginPage() {
    // 로그인 모드 / 회원가입 모드 전환 상태
    const [isLoginMode, setIsLoginMode] = useState(true)
    // 폼 입력 상태
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    // 비밀번호 표시 토글
    const [showPassword, setShowPassword] = useState(false)

    /**
     * 폼 제출 핸들러
     * - 현재는 디자인 프리뷰용이므로 실제 API 연동 없음
     */
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // TODO: 실제 로그인/회원가입 API 연동
        console.log(isLoginMode ? '로그인 시도' : '회원가입 시도', { email, password, name })
    }

    return (
        <div className="login-page">
            {/* 배경 장식 요소들 - 움직이는 그라데이션 원 */}
            <div className="bg-orb bg-orb-1" />
            <div className="bg-orb bg-orb-2" />
            <div className="bg-orb bg-orb-3" />

            {/* 메인 로그인 카드 */}
            <div className="login-card">
                {/* 브랜드 로고 영역 */}
                <div className="brand-section">
                    <div className="brand-icon">
                        {/* 피트니스 아이콘 - 덤벨 형태 SVG */}
                        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="4" y="16" width="8" height="16" rx="2" fill="currentColor" opacity="0.9" />
                            <rect x="36" y="16" width="8" height="16" rx="2" fill="currentColor" opacity="0.9" />
                            <rect x="12" y="12" width="6" height="24" rx="2" fill="currentColor" />
                            <rect x="30" y="12" width="6" height="24" rx="2" fill="currentColor" />
                            <rect x="18" y="20" width="12" height="8" rx="1" fill="currentColor" opacity="0.7" />
                        </svg>
                    </div>
                    <h1 className="brand-title">Fit Class</h1>
                    <p className="brand-subtitle">
                        {isLoginMode
                            ? '다시 만나서 반가워요! 오늘도 함께 성장해요 💪'
                            : '새로운 시작을 환영합니다! 함께 성장해요 🚀'}
                    </p>
                </div>

                {/* 로그인/회원가입 탭 전환 */}
                <div className="tab-switcher">
                    <button
                        className={`tab-btn ${isLoginMode ? 'active' : ''}`}
                        onClick={() => setIsLoginMode(true)}
                        type="button"
                    >
                        로그인
                    </button>
                    <button
                        className={`tab-btn ${!isLoginMode ? 'active' : ''}`}
                        onClick={() => setIsLoginMode(false)}
                        type="button"
                    >
                        회원가입
                    </button>
                </div>

                {/* 입력 폼 */}
                <form onSubmit={handleSubmit} className="login-form">
                    {/* 회원가입 모드일 때만 이름 필드 표시 */}
                    {!isLoginMode && (
                        <div className="input-group fade-in">
                            <label htmlFor="name" className="input-label">이름</label>
                            <div className="input-wrapper">
                                <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="홍길동"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-input"
                                />
                            </div>
                        </div>
                    )}

                    {/* 이메일 필드 */}
                    <div className="input-group">
                        <label htmlFor="email" className="input-label">이메일</label>
                        <div className="input-wrapper">
                            <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <input
                                id="email"
                                type="email"
                                placeholder="example@fitclass.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-input"
                            />
                        </div>
                    </div>

                    {/* 비밀번호 필드 */}
                    <div className="input-group">
                        <label htmlFor="password" className="input-label">비밀번호</label>
                        <div className="input-wrapper">
                            <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-input"
                            />
                            {/* 비밀번호 표시/숨기기 토글 버튼 */}
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="password-toggle"
                                aria-label={showPassword ? '비밀번호 숨기기' : '비밀번호 보기'}
                            >
                                {showPassword ? (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="toggle-icon">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                    </svg>
                                ) : (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="toggle-icon">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* 로그인 모드 - 비밀번호 찾기 링크 */}
                    {isLoginMode && (
                        <div className="forgot-password">
                            <a href="#" className="forgot-link">비밀번호를 잊으셨나요?</a>
                        </div>
                    )}

                    {/* 제출 버튼 */}
                    <button type="submit" className="submit-btn">
                        <span>{isLoginMode ? '로그인' : '회원가입'}</span>
                        <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </form>

                {/* 소셜 로그인 구분선 */}
                <div className="divider">
                    <span className="divider-text">또는</span>
                </div>

                {/* 소셜 로그인 버튼들 */}
                <div className="social-buttons">
                    {/* 카카오 로그인 */}
                    <button type="button" className="social-btn kakao">
                        <svg viewBox="0 0 24 24" className="social-icon">
                            <path d="M12 3C6.48 3 2 6.58 2 10.94c0 2.8 1.86 5.27 4.66 6.67-.15.56-.96 3.6-.99 3.83 0 0-.02.17.09.24.11.06.24.01.24.01.32-.04 3.7-2.44 4.28-2.86.55.08 1.13.12 1.72.12 5.52 0 10-3.58 10-7.94C22 6.58 17.52 3 12 3Z" fill="currentColor" />
                        </svg>
                        <span>카카오로 시작하기</span>
                    </button>

                    {/* 구글 로그인 */}
                    <button type="button" className="social-btn google">
                        <svg viewBox="0 0 24 24" className="social-icon">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1Z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l2.85-2.22.81-.62Z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53Z" fill="#EA4335" />
                        </svg>
                        <span>Google로 시작하기</span>
                    </button>
                </div>

                {/* 하단 저작권 */}
                <p className="footer-text">
                    © 2026 Fit Class. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default LoginPage
