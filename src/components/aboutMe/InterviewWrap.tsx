import tw from "tailwind-styled-components";
import PointText from "../atoms/text/PointText";
import { interviewData, splitEmphasis } from "../../data/introData";

const RightContainer = tw.div`
  flex
  flex-col
  flex-1
  gap-20
`;

const Tit = tw.h3`
  text-4xl
  font-black
  text-superLightGray
  tracking-tight
  pb-[2rem]
`;

const SubTit = tw.h5`
  text-2xl
  font-bold
  text-mainGray
  pb-6
`;

const MyMind = tw.div`
  flex
  flex-col
  gap-3
`;

const MyMindTxt = tw.div`
  relative
  text-base
  text-mainGray/80
  leading-relaxed
  mb-5
  glass
  p-6
  rounded-tl-2xl
  rounded-tr-2xl
  rounded-bl-2xl
`;

const InterviewWrap = () => {
  return (
    <RightContainer>
      <MyMind>
        <Tit>Interview</Tit>
        {interviewData.map(({ q, a }) => (
          <MyMindTxt key={q}>
            <SubTit>{q}</SubTit>
            {a.map((line, i) => (
              <p key={i} className="mb-2 last:mb-0">
                {splitEmphasis(line).map((part, j) =>
                  j % 2 ? <PointText key={j}>{part}</PointText> : part
                )}
              </p>
            ))}
          </MyMindTxt>
        ))}
      </MyMind>
    </RightContainer>
  );
};

export default InterviewWrap;