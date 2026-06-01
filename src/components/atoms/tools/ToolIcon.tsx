import tw from 'tailwind-styled-components';
import { getIconUrl } from '../../../utils/assets';

type StackIconProps = {
  stack?: string;
  width?: string;
};

export const IconBox = tw.div<StackIconProps>`
  group
  relative
  bg-white/[0.03]
  border
  border-white/10
  ${(props) => props.width}
  h-0
  pb-[3.125rem]
  flex
  items-center
  justify-center
  rounded-2xl
  transition-all
  duration-300

  hover:-translate-y-1
  hover:border-accent/50
  hover:bg-white/[0.06]
  hover:shadow-glow-sm
`;

export const Img = tw.img`
  absolute
  w-2/4
  h-1/2
  inset-2/4
  translate-y-[-50%]
  translate-x-[-50%]
  transition-transform
  duration-300

  group-hover:scale-110
`;

function StackIcon({ stack, width }: StackIconProps) {
  return (
    <IconBox width={width}>
      <Img src={getIconUrl(stack)} alt={`${stack}`} loading='lazy' />
    </IconBox>
  )
}

export default StackIcon;