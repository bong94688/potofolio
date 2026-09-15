import tw from 'tailwind-styled-components';
import SocialLinkList from '../../../components/main/SocialList';
import { AnimationP, BgText } from '../../../components/atoms/text/Text.styled';
import ScrollAni from '../../../styles/ScrollAni';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import Footer from '../../../components/footer/Footer';

export const FinishComponent = tw.article`
  relative
  min-h-screen
  flex
  flex-col
  items-center
  bg-base
  overflow-hidden
  text-white
  px-10
  pt-24
  max-sm:px-5
`;

export const Center = tw.div`
  relative
  z-10
  flex-1
  w-full
  grid
  place-items-center
  py-10
`;

export const TextWrap = tw.div`
  relative
  z-10
  w-full
  flex
  items-center
  justify-center
  flex-col
  gap-10
`;

export const TitleBox = tw.div`
  relative
  w-full
  flex
  justify-center
`;

export const Title = tw.h2`
  relative
  z-10
  text-center
  text-5xl
  font-black
  tracking-tight
  text-white

  max-sm:text-3xl
`;

export const SubText = tw.p`
  max-w-2xl
  text-center
  text-lg
  text-muted
  leading-relaxed

  max-sm:text-sm
`;

export const FooterWrap = tw.div`
  relative
  z-10
  w-full
`;

function Finish() {
  const { scrollRef, scrollEl } = useScrollAnimation();

  return (
    <FinishComponent>
      {/* 배경 데코 그라데이션 글로우 */}
      <div className='deco-glow w-[420px] h-[420px] top-[-80px] left-1/2 -translate-x-1/2 bg-accent/25' />
      <div className='deco-glow w-[360px] h-[360px] bottom-[120px] right-[-60px] bg-accent2/20' />

      <Center>
        <ScrollAni className={`${scrollEl ? 'fadeAn fadeIn' : 'fadeOut'} w-full`} ref={scrollRef} width='100%'>
          <TextWrap>
            <TitleBox>
              <Title>봐주셔서 감사합니다 :)</Title>
              <BgText className='opacity-[0.12]'>
                <AnimationP className='gradient-text'>Thank You</AnimationP>
              </BgText>
            </TitleBox>

            <SubText>
              AI를 단순한 코드 생성기가 아닌 규칙·검수·테스트·보고서로 이어지는 파이프라인으로 설계합니다.<br />
              사람은 판단에, AI는 반복에 집중하는 구조로 팀의 속도와 품질을 함께 끌어올리겠습니다.
            </SubText>

            <SocialLinkList />
          </TextWrap>
        </ScrollAni>
      </Center>

      <FooterWrap>
        <Footer />
      </FooterWrap>
    </FinishComponent>
  );
}

export default Finish;
