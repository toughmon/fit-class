import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// 환경변수 로드 (.env 파일에서 설정값을 읽어옴)
dotenv.config();

const app = express();

// === 미들웨어 설정 ===
// JSON 요청 파싱 (클라이언트에서 보낸 JSON 데이터를 req.body로 접근 가능)
app.use(express.json());

// URL 인코딩된 요청 파싱 (폼 데이터 등)
app.use(express.urlencoded({ extended: true }));

// CORS 설정 (프론트엔드에서의 API 호출 허용)
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
}));

export default app;
