import tw from "tailwind-styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { filteringAcitions } from "../../store/filtering-slice";

const TabButton = tw.button`
  text-muted
  font-medium
  rounded-full
  px-5
  py-2
  bg-transparent
  transition-all
  duration-300
  hover:bg-white/10
  hover:text-white

  max-sm:w-full
  max-sm:text-xs
`

const TabBtn = ({ children, type }: { children: React.ReactNode, type: string }) => {
  const dispatch = useDispatch();
  const keyword = useSelector((state: RootState) => state.filteringKeyword.keyword);

  const getKeyword = (type: string) => {
    dispatch(filteringAcitions.getKeyword(type));
  }

  const handlerFiltering = (type: string) => {
    getKeyword(type);
    dispatch(filteringAcitions.getFilteringData());
  }

  return (
    <TabButton
      className={keyword === type ? 'bg-grad text-white font-semibold shadow-glow-sm hover:bg-grad hover:text-white' : ''}
      name={type}
      onClick={() => handlerFiltering(type)}
    >
      {children}
    </TabButton>
  );
};

export default TabBtn;