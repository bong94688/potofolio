import tw from 'tailwind-styled-components';
import RecordCard from '../../../components/cards/RecordCard';
import { TabsPropsT } from '../../../types/type';
import { recordData } from '../../../data/content/recordData';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import ScrollAni from '../../../styles/ScrollAni';
import { isMobile } from '../../../utils/isMobile';
import { useEffect, useRef } from 'react';

export const RecordComponent = tw.article`
  grid
  grid-cols-2
  grid-row-3
  gap-4
  h-screen
  pt-[-1rem]
  mt-[-1rem]

  max-lg:grid-cols-1
  max-xl:grid-cols-2  
  max-md:pt-[5rem]

  max-lg:h-auto
`;

function Record({ id, navTabs }: TabsPropsT) {
  const vhRef = useRef(0);
useEffect(() => {
    if (isMobile) {
      vhRef.current = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vhRef.current}px`);
    }
  }, []);  const { scrollRef, scrollEl } = useScrollAnimation();

  return (
    <ScrollAni className={`${scrollEl ? 'fadeAn fadeIn' : 'fadeOut'} mdH`} ref={scrollRef}>
    {isMobile ? (
      <RecordComponent id={id} ref={navTabs[2].targetRef}>
        {recordData.map((item, idx) => (
          <RecordCard
            key={idx}
            data={item.data}
            title={item.title}
            role={item.role}
            infos={item.infos}
            stacks={item.stacks}
          />
        ))}
      </RecordComponent>
    ) : (
      <RecordComponent
        id={id}
        ref={navTabs[2].targetRef}
        style={{ height: '1000px' }}
      >
        {recordData.map((item, idx) => (
          <RecordCard
            key={idx}
            data={item.data}
            title={item.title}
            role={item.role}
            infos={item.infos}
            stacks={item.stacks}
          />
        ))}
      </RecordComponent>
    )}
  </ScrollAni>
  );
}

export default Record;