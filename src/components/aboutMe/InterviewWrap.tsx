import tw from "tailwind-styled-components";
import PointText from "../atoms/text/PointText";

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
        <MyMindTxt>
          <SubTit> Q. 어떤개발을 중시하나요?</SubTit>
           도메인 중심 설계와 TDD 기반의 안정적인 백엔드 개발 을 중시합니다.<br /><br />
          프로젝트에서 도메인 로직을 명확히 분리하고 계층화된 설계를 통해 유지보수성과 확장성을 극대화했습니다.<br />
          <PointText>명확한 비즈니스 로직 구현</PointText>으로 서비스의 핵심 가치를 코드에 담아냈으며,  <PointText> 다양한 프로젝트</PointText>에서 이를 실현했습니다.<br /><br />

          <PointText>TDD를 통해 기능 개발 전 테스트를 설계함</PointText>으로써 코드 품질을 보장하고, 디버깅 시간을 크게 단축했습니다.<br />
          예외 상황을 포함한 <PointText>다양한 시나리오를 테스트</PointText>하여 예측 가능한 시스템 동작을 구현했습니다.
        </MyMindTxt>

        <MyMindTxt>
          <SubTit>Q. 개발을 할 때 어떤 것을 중시하나요?</SubTit>
          저는 <PointText>효율</PointText>과 <PointText>클린코드</PointText>를 가장 중요하게 생각합니다.<br /><br />
          좋은 코드는 단순히 동작하는 코드가 아니라, 시간이 지나도 읽기 쉽고 고치기 쉬운 코드라고 믿습니다.<br />
          그래서 반복되는 로직은 <PointText>공통 모듈과 컴포넌트로 추상화</PointText>하고, 책임을 명확히 분리해 코드 중복을 줄이는 데 집중합니다.<br />
          이렇게 쌓인 구조는 유지보수성과 확장성으로 이어져, 새로운 요구사항이 생겨도 빠르게 대응할 수 있게 해줍니다.<br /><br />

          또한 효율은 코드를 작성하는 순간뿐 아니라 <PointText>실행되는 순간</PointText>에도 중요하다고 생각합니다.<br />
          불필요한 연산과 렌더링을 줄이기 위해 <PointText>구조를 먼저 고민</PointText>하고, 병목이 생기는 지점을 측정해 개선합니다.<br />
          "지금 당장 돌아가는 코드"보다 <PointText>"팀이 오래 함께 다룰 수 있는 코드"</PointText>를 목표로, 항상 더 나은 구조를 고민하며 개발하고 있습니다.
        </MyMindTxt>
      </MyMind>
    </RightContainer>
  );
};

export default InterviewWrap;