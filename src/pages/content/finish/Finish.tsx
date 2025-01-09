import tw from 'tailwind-styled-components';
import SocialLinkList from '../../../components/main/SocialList';
import { AnimationP, BgText, MainSubText, MainTitle } from '../../../components/atoms/text/Text.styled';
import MainBackground from '../../../components/atoms/background/MainBackground';
import ScrollAni from '../../../styles/ScrollAni';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import Footer from '../../../components/footer/Footer';

export const FinishComponent = tw.article`
  relative
  h-screen
  flex
  items-center
  justify-center
  flex-col
  px-10
  pt-10
  gap-20
  max-sm:pt-5
  max-sm:px-5
`;

export const TextWrap = tw.div`
  w-full
  flex
  items-center
  justify-center
  flex-col
  gap-10
`;

export const FooterWrap = tw.div`
  absolute
  bottom-0
  w-full
`

function Finish() {
  const { scrollRef, scrollEl } = useScrollAnimation();

  return (
    <>
      <FinishComponent>
        <MainBackground />
        <ScrollAni className={`${scrollEl ? 'fadeAn fadeIn' : 'fadeOut'}`} ref={scrollRef} width='100%'>
          <TextWrap>
            <MainTitle>
              봐주셔서 감사합니다 :)
              <BgText>
                <AnimationP>Thank You</AnimationP>
              </BgText>
            </MainTitle>

            <MainSubText>
            새로운 기술 도전에 열정적이며, 사용자와 비즈니스의 니즈를 이해하는 개발자가 되고자 합니다.<br />
            협업과 소통을 통해 더 나은 서비스를 제공하며 지속적으로 성장하겠습니다.
            </MainSubText>
            <SocialLinkList />
          </TextWrap>
        </ScrollAni>
        <FooterWrap>
          <Footer />
        </FooterWrap>
      </FinishComponent>
    </>
  );
}

export default Finish;
