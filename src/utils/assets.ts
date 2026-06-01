// 로컬 에셋 리졸버
// 외부 서버(simbonggyo.duckdns.org / github raw) 대신 src/assets 의 파일을
// Vite import.meta.glob 으로 번들에 포함시켜 dev·빌드 양쪽에서 안전하게 제공한다.

// 스택/스킬 아이콘 (icon_<name>.svg)
const iconModules = import.meta.glob('../assets/icons/icon_*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
});

const icons: Record<string, string> = {};
for (const path in iconModules) {
  const name = path
    .split('/')
    .pop()!
    .replace(/^icon_/, '')
    .replace(/\.svg$/, '');
  icons[name] = iconModules[path] as string;
}

export const getIconUrl = (name?: string): string =>
  (name && icons[name]) || '';

// 프로젝트 이미지 (중첩 폴더 포함)
const imageModules = import.meta.glob('../assets/images/**/*.{webp,jpg,jpeg,png}', {
  eager: true,
  query: '?url',
  import: 'default',
});

const images: Record<string, string> = {};
for (const path in imageModules) {
  const key = path.replace('../assets/images/', '');
  images[key] = imageModules[path] as string;
}

// key 예: 'eyes(I)shopping/architecture.webp', 'project_portfolio1.webp'
export const getImageUrl = (key: string): string => images[key] || '';