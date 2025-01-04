import tw from 'tailwind-styled-components';
import { motion } from 'framer-motion';

// Main Component 스타일 정의
export const MainComponent = tw.main`
  relative
  flex
  items-center
  justify-center
  h-screen
  bg-mainGray
  px-10
  overflow-hidden
`;

// Main Background 스타일 정의
export const MainBg = tw(motion.div)`
  absolute
  bg-cover
  bg-main
  inset-0 // top-0, bottom-0, left-0, right-0를 간단히 표현
`;

// 이미지 스타일 정의
export const Img = tw(motion.img)`
  w-[50%]
  max-w-md
  h-auto
  object-contain
  transition-all
`;
