import tw from 'tailwind-styled-components';
import { TabsPropsT } from '../../types/type';

export const NavContainer = tw.nav`
  sticky
  top-10
  flex
  flex-col
  gap-3
  w-auto
  h-screen
  overflow-[none]

  max-md:flex-row
  max-md:bg-mainBlack
  max-md:z-[2]
  max-md:py-3
  max-md:top-0
  max-md:w-full
  max-md:h-auto
  max-md:overflow-y-scroll
  max-md:backdrop-blur-md
`;

export const NavLink = tw.button`
  text-[#34343f]
  font-black
  text-6xl
  text-left
  tracking-tight
  transition-all
  duration-300

  max-md:text-2xl
  max-lg:text-5xl
`;

function Nav({ navTabs }: TabsPropsT) {
  return (
    <NavContainer>
      {navTabs.map((tab, idx) => (
        <NavLink
          key={idx}
          onClick={tab.scrollToTarget}
          className={tab.isTarget ? 'gradient-text' : 'text-[#34343f] hover:text-[#5a5a6a]'}
        >
          {tab.targetName}
        </NavLink>
      ))}
    </NavContainer>
  );
}

export default Nav;