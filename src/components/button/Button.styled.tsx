import tw from 'tailwind-styled-components';

export const CricleBtn = tw.button`
  w-[50px]
  h-[50px]
  shadow-lg
  flex
  items-center
  justify-center
  rounded-full
  transition-all
  duration-300

  hover:-translate-y-1
  hover:shadow-glow
`;

export const WhiteCricleBtn = tw(CricleBtn)`
  bg-white
  ring-1
  ring-white/40
`;