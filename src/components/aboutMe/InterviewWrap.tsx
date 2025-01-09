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
  pb-[2rem]
`;

const SubTit = tw.h5`
  text-2xl
  font-bold
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
  mb-5
  bg-lightGray
  p-5
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
          <SubTit>Q. 더나아가서 프론트에서는 어떤 개발을 중시할까요?</SubTit>
          프론트엔드에서의 효율성 극대화을 추구합니다.<br /><br />
          Redux를 활용해 상태 관리를 체계화하고 <PointText>컴포넌트화</PointText> 를 통해 코드의 재사용성과 가독성을 크게 향상시켰습니다.<br />
          공통 컴포넌트를 설계하여 코드 중복을 줄이고, 프로젝트 전반의 유지보수성을 강화했습니다. <br /><br />
          React에서 불필요한 렌더링을 방지하기 위해 <PointText>메모이제이션과 최적화 기법 </PointText> 을 적극 활용했습니다.<br />
          Redux로 기존 useEffect 기반 로직을 정리하며, 상태 관리의 일관성을 확보하고 코드 중복을 약 30% 감소시켰습니다. <br />
        </MyMindTxt>
      </MyMind>
    </RightContainer>
  );
};

export default InterviewWrap;