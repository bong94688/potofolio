import tw from 'tailwind-styled-components';

const FooterContainer = tw.footer`
  relative
  z-1
  px-10
  py-8
  flex
  flex-col
  gap-2
  items-center
  justify-center
  border-t
  border-white/10
`;

const FooterTxt = tw.p`
  text-muted
  text-xs
  text-center
  leading-relaxed
  tracking-wide
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterTxt>
        Copyright 2023. choijieun all rights reserved.<br />
        React, Styled Components, Tailwind CSS 기반으로 제작된 사이트입니다.
      </FooterTxt>
    </FooterContainer>
  );
}

export default Footer