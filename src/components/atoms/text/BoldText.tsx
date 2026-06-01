import tw from 'tailwind-styled-components';
import { ChildernT } from '../../../types/type';


export const BoldTxt = tw.strong`
  gradient-text
  font-extrabold
  text-[106%]
`;

function BoldText({ children }: ChildernT) {
  return <BoldTxt>{children}</BoldTxt>
}

export default BoldText;