/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Tailwind가 스타일을 적용할 파일 경로
  ],
  theme: {
    extend: {}, // 사용자 정의 스타일 확장
  },
  plugins: [], // 추가 플러그인이 필요한 경우 여기에 등록
};
