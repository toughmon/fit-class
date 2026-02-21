import app from './app.js';

const PORT = process.env.PORT || 5000;

// === 헬스체크 라우트 ===
// 서버가 정상적으로 동작하는지 확인하는 용도
app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', message: '서버가 정상적으로 실행 중입니다.' });
});

// === 서버 시작 ===
app.listen(PORT, () => {
    console.log(`🚀 서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
