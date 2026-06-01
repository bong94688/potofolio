/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // 기존 토큰(호환 유지) — 값만 모던 다크 톤으로 정제
        'mainBlack': '#101018',
        'mainGray': '#EDEEF3',
        'darkGray': '#0A0A11',
        'lightGray': '#191922',
        'superLightGray': '#F4F5FA',
        'white': '#fff',
        'black': '#000',

        // 새 디자인 시스템
        'base': '#08090f',
        'surface': '#101018',
        'surface2': '#16161f',
        'surface3': '#1d1d28',
        'line': 'rgba(255,255,255,0.08)',
        'muted': '#8b8c9b',
        'accent': '#8b5cf6',   // violet
        'accent2': '#22d3ee',  // cyan
        'accent3': '#6366f1',  // indigo
        'accentPink': '#ec4899',

        // IDE / 에디터 테마
        'ide-bg': '#0b0e14',       // 페이지 배경
        'ide-window': '#10151d',   // 에디터 본문
        'ide-side': '#0c1118',     // 사이드바
        'ide-bar': '#171f2a',      // 타이틀/탭/상태바
        'ide-line': '#28333f',     // 보더
        'ide-active': '#1e2632',   // 활성 탭/행
        'ide-text': '#dde5f0',     // 본문
        'ide-dim': '#9aa6ba',      // 흐린 글자/주석
        // 신택스 하이라이트
        'syn-key': '#c792ea',      // 키워드(보라)
        'syn-str': '#a6e07a',      // 문자열(초록)
        'syn-num': '#f78c6c',      // 숫자(주황)
        'syn-fn': '#82aaff',       // 함수/속성(파랑)
        'syn-tag': '#f07178',      // 태그(빨강)
        'syn-cmt': '#7a8699',      // 주석
      },
      fontFamily: {
        sans: ['"Pretendard Variable"', 'Pretendard', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', '"Pretendard Variable"', 'monospace'],
      },
      backgroundImage: {
        'grad': 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 45%, #22d3ee 100%)',
        'grad-soft': 'linear-gradient(135deg, rgba(139,92,246,0.18), rgba(34,211,238,0.12))',
        'grad-radial': 'radial-gradient(1200px 600px at 50% -10%, rgba(139,92,246,0.18), transparent 60%)',
        'main': "url('https://github.com/jieun419/jieun_portfolio/blob/main/src/assets/images/front_bg.jpg?raw=true')",
      },
      boxShadow: {
        'glow': '0 24px 70px -24px rgba(99,102,241,0.55)',
        'glow-sm': '0 12px 40px -16px rgba(139,92,246,0.45)',
        'card': '0 10px 30px -12px rgba(0,0,0,0.6)',
      },
      keyframes: {
        'right-modal-up': {
          '0%': { right: '70px', opacity: '0' },
          '100%': { right: '75px', opacity: '100' },
        },
        'scale-zoomin': {
          '0%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
        'scale-zoomin-bgtxt': {
          '0%': { transform: 'scale(1.2) translateY(-70%) translateX(-50%)' },
          '100%': { transform: 'scale(1) translateY(-70%) translateX(-50%)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        'blink': {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        'caret-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.2' },
        },
      },
      animation: {
        'right-modal-up': 'right-modal-up 0.5s',
        'scale-zoomin': 'scale-zoomin 3s',
        'scale-zoomin-bgtxt': 'scale-zoomin-bgtxt 3s',
        'float': 'float 6s ease-in-out infinite',
        'gradient-pan': 'gradient-pan 6s ease infinite',
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'blink': 'blink 1.05s step-end infinite',
        'caret-pulse': 'caret-pulse 1.2s ease-in-out infinite',
      },
      dropShadow: {
        'md': '5px 4px 3px rgba(255, 255, 255, 0.25)',
        'glow': '0 0 20px rgba(139,92,246,0.55)',
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        '.screen-width': {
          '@apply mx-auto lg:max-w-[1140px] md:max-w-[720px] sm:max-w-[576px]': '',
        },
      });
    },
  ],
}
