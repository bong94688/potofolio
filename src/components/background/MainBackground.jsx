import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind-styled-components';
import { motion } from 'framer-motion';

// Motion + Tailwind 통합
const MainBg = motion(
  tw.div`
    absolute
    bg-cover
    bg-main
    top-0
    bottom-0
    left-0
    right-0
    z-[-1]
  `
);

function MainBackground({ initial, animate, transition }) {
  return <MainBg initial={initial} animate={animate} transition={transition} />;
}

// PropTypes 정의
MainBackground.propTypes = {
  initial: PropTypes.shape({
    opacity: PropTypes.number,
    scale: PropTypes.number,
  }),
  animate: PropTypes.shape({
    opacity: PropTypes.number,
    scale: PropTypes.number,
  }),
  transition: PropTypes.shape({
    delay: PropTypes.number,
    ease: PropTypes.string,
    duration: PropTypes.number,
  }),
};

// 기본값 설정
MainBackground.defaultProps = {
  initial: { opacity: 0, scale: 1.2 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 1, ease: 'easeOut' },
};

export default MainBackground;
