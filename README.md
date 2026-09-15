# 📸 심봉교 - 포토폴리오

> AI를 파이프라인으로 설계해 **검증된 결과**를 빠르게 만들어내는 개발자입니다.

## 🤖 AI 활용 방식

- **rule.md**: 코딩 컨벤션·아키텍처·도메인 규칙을 문서로 고정해 AI 결과물의 일관성 확보
- **검수 AI 분리**: 작성 AI와 검수 AI를 나눠 버그·보안·규칙 위반 교차 점검
- **AI 테스트 파이프라인**: 테스트 생성 → 실행 → 실패 원인 분석·수정 자동 반복
- **보고서 기반 운영**: 구현 → 검수보고서 → 수정 → 테스트 → 완료보고서, 반복 지적은 rule.md로 환류

## 🌟 기술 스택

- **빌드 도구**: Vite
- **언어**: TypeScript
- **프론트엔드**: React
- **스타일링**: styled-components
- **상태 관리**: Redux Toolkit
- **애니메이션**: Framer Motion
- **라우팅**: React Router
- **배포 플랫폼**: Vercel

## 🚀 배포 링크

[심봉교 바로가기](https://potofolio-kappa.vercel.app/)

## 🖥 로컬 개발 환경 설정

### 1. 프로젝트 클론
```bash
git clone https://github.com/bong94688/potofolio.git
cd potofolio
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 개발 서버 실행
```bash
npm run dev
```

- 애플리케이션은 기본적으로 `http://localhost:3000`에서 실행됩니다.

### 4. 프로덕션 빌드
```bash
npm run build
```

## 📂 폴더 구조
```
potofolio/
├── src/
│   ├── assets/      # 이미지 및 기타 정적 파일
│   ├── components/  # 재사용 가능한 컴포넌트
│   ├── data/        # 정적 데이터 (경력, 콘텐츠 등)
│   ├── hooks/       # 커스텀 훅
│   ├── pages/       # 페이지별 컴포넌트
│   ├── store/       # Redux 스토어 설정
│   ├── styles/      # 전역 스타일 및 테마
│   ├── types/       # 타입 정의
│   ├── utils/       # 유틸리티 함수
│   ├── App.tsx      # 메인 앱 구성 파일
│   └── main.tsx     # 진입점
├── public/          # 정적 파일
├── vite.config.ts   # Vite 설정
└── package.json     # 프로젝트 설정 및 의존성 관리
```

## ✨ 주요 라이브러리

- **React**: UI 개발을 위한 JavaScript 라이브러리
- **TypeScript**: 정적 타입을 지원하는 JavaScript 슈퍼셋
- **styled-components**: CSS-in-JS 스타일링 라이브러리
- **Redux Toolkit**: 효율적인 상태 관리 라이브러리
- **Framer Motion**: React 애니메이션 라이브러리
- **React Router**: 클라이언트 사이드 라우팅 라이브러리

## 📜 업데이트 내역

- **v1.0.0** - 초기 릴리스 (2025.01.13)
  - Vite, TypeScript, React 기반 기본 UI 설계
  - Vercel을 통해 첫 배포 완료

## 🤝 기여 방법

1. 이 저장소를 포크합니다.
2. 새로운 브랜치를 생성합니다. (`git checkout -b feature/새로운기능`)
3. 변경 사항을 커밋합니다. (`git commit -m '새로운 기능 추가'`)
4. 브랜치에 푸시합니다. (`git push origin feature/새로운기능`)
5. Pull Request를 작성합니다.

## 📧 문의

궁금한 사항이나 제안 사항은 [이메일](mailto:simbonggyo@gmail.com)로 연락 주세요.