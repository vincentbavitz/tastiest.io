import React from 'react';
import { useDispatch } from 'react-redux';
import { CUISINES } from '../../constants';
import { HorizontalScrollable } from '../HorizontalScrollable';
import { CuisineItem } from './CuisineItem';

interface Props {
  onItemClick?(): void;
}

export function CuisineBar(props: Props) {
  const { onItemClick } = props;
  const dispatch = useDispatch();

  const handleItemClick = () => {
    if (onItemClick) {
      onItemClick();
    }

    // dispatch(saveCuisineBarScrollPos(x));
  };

  return (
    <div className="mt-20">
      <HorizontalScrollable {...props}>
        {Object.values(CUISINES).map(cuisine => (
          <CuisineItem
            key={cuisine.name}
            name={cuisine.name}
            svg={cuisine.svg}
            onClick={handleItemClick}
          />
        ))}
      </HorizontalScrollable>
    </div>
  );
}

// function CuisineBarContent({ onItemClick }: Props) {
//   const navigationState = useSelector((state: IState) => state.navigation);
//   const dispatch = useDispatch();

//   const scrollRef = useRef(null);
//   const { x } = useScroll(scrollRef);
//   const pageWidth = useWindowSize().width;
//   const scrollDistance = pageWidth > 1400 ? 450 : pageWidth / 3;

//   const [rightScrollHidden, setRightScrollHidden] = useState(false);

//   const { isDesktop, isMobile } = useContext(ScreenContext);

//   const handleLeftScroll = () => {
//     scrollRef.current.scrollBy({
//       left: -scrollDistance,
//       behavior: 'smooth',
//     });
//   };

//   const handleRightScroll = () => {
//     scrollRef.current.scrollBy({
//       left: scrollDistance,
//       behavior: 'smooth',
//     });
//   };

//   function handleItemClick() {
//     if (onItemClick) {
//       onItemClick();
//     }

//     dispatch(saveCuisineBarScrollPos(x));
//   }

//   useEffect(() => {
//     const isFullRight =
//       scrollRef.current.scrollWidth - scrollRef.current.clientWidth ===
//       scrollRef.current.scrollLeft;

//     setRightScrollHidden(isFullRight);
//   }, [x]);

//   return (
//     <div className="flex relative w-full mt-20">
//       <div
//         className={classNames(
//           'absolute left-0 flex items-center justify-between h-full w-full',
//           !isDesktop && 'hidden',
//         )}
//       >
//         <div
//           className={classNames(
//             'flex flex-col justify-center h-full z-50 duration-300 -ml-8',
//             x <= 1 && 'opacity-0',
//           )}
//         >
//           <ChevronLeftSecondarySVG
//             onClick={handleLeftScroll}
//             className="h-20 mt-1 cursor-pointer"
//           />
//         </div>

//         <div
//           className={classNames(
//             'flex flex-col justify-center h-full z-50 duration-300 -mr-8',
//             rightScrollHidden && 'opacity-0',
//           )}
//         >
//           <ChevronRightSecondarySVG
//             onClick={handleRightScroll}
//             className="h-20 mt-1 cursor-pointer"
//           />
//         </div>
//       </div>
//       <div
//         ref={scrollRef}
//         className={classNames(
//           'relative',
//           'w-full',
//           'hide_scroll',
//           'scrolling-touch',
//           isDesktop ? 'overflow-x-scroll' : 'overflow-x-scroll',
//         )}
//       >
//         <div
//           className={classNames('flex md:px-0 overflow-y-visible')}
//           style={{
//             width: 'fit-content',
//             marginLeft: `${!isDesktop ? UI.PAGE_CONTAINED_PADDING_VW : 0}vw`,
//           }}
//         >
//           {Object.values(CUISINES).map(cuisine => (
//             <CuisineItem
//               key={cuisine.name}
//               name={cuisine.name}
//               svg={cuisine.svg}
//               onClick={handleItemClick}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
