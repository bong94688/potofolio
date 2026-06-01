import tw from 'tailwind-styled-components';

type TagT = {
  tag: string | React.ReactNode;
};

export const TagTxt = tw.span`
  inline-flex
  items-center
  justify-center
  whitespace-nowrap
  text-xs
  font-medium
  text-mainGray
  bg-white/5
  border
  border-white/10
  px-3
  py-1
  rounded-full
  backdrop-blur-sm
  transition-colors
  duration-300

  hover:border-accent/50
  hover:text-white
`;

function TagText({ tag }: TagT) {
  return <TagTxt>{tag}</TagTxt>
}

export default TagText;