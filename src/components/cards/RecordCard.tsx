import tw from 'tailwind-styled-components';
import StackIcon from '../atoms/tools/ToolIcon';
import { RecordDataT } from '../../types/type';

export const CardContainer = tw.section`
  overflow-hidden
  flex
  flex-col
  rounded-2xl
  h-[30rem]
  bg-surface2
  border
  border-white/10
  relative
  justify-between
  group
  grad-border
  transition-all
  duration-300

  hover:border-white/20
  hover:shadow-card
  hover:-translate-y-1
`;

export const TxtWrap = tw.div`
  p-5
  flex
  flex-col
  gap-3
  text-white
`;

export const Tit = tw.h4`
  font-bold
  text-2xl
  tracking-tight
  flex
  flex-col
  gap-1
`;

export const Role = tw.span`
  text-sm
  text-accent2
  font-medium
`;

export const RecordUl = tw.ul`
  flex
  flex-col
  gap-1
  text-base
  text-muted
  leading-relaxed
`;

export const RecordList = tw.li`
  pl-2.5
  relative

  before:absolute
  before:w-1
  before:h-1
  before:bg-[#A6A6A6]
  before:block
  before:rounded-full
  before:left-0
  before:top-[0.625rem]
`;

export const Tags = tw.div`
  p-5
  flex
  flex-wrap
  gap-2
`;

export const Date = tw.span`
  inline-flex
  w-fit
  text-accent2
  text-xs
  font-medium
  tracking-wide
  bg-accent2/10
  border
  border-accent2/20
  rounded-full
  px-3
  py-1
`;

function RecordCard({ data, title, role, infos, stacks }: RecordDataT) {
  return (
    <CardContainer>
      <TxtWrap>
        <Date>{data}</Date>
        <Tit>
          {title}
          <Role>{role}</Role>
        </Tit>
        <RecordUl>
          {infos.map((info, idx) => (
            <RecordList key={idx}>{info}</RecordList>
          ))}
        </RecordUl>
      </TxtWrap>
      <Tags>
        {stacks.map((stack, idx) => (
          <StackIcon key={idx} stack={stack} width={`w-[50px]`} />
        ))}
      </Tags>
    </CardContainer>
  );
}

export default RecordCard;