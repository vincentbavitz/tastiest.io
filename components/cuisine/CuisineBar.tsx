import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMedia, useScroll, useWindowSize } from 'react-use';
import ChevronLeftSecondarySVG from '../../assets/svgs/chevron-left-secondary.svg';
import ChevronRightSecondarySVG from '../../assets/svgs/chevron-right-secondary.svg';
// import { useGeolocation } from 'react-use';
import { CUISINES, UI } from '../../constants';
import { saveCuisineBarScrollPos } from '../../state/navigation';
import { IState } from '../../state/reducers';
import { Contained } from '../Contained';
import { CuisineItem } from './CuisineItem';

interface Props {
  onItemClick?(): void;
}

export function CuisineBar(props: Props) {
  const { onItemClick } = props;
  const navigationState = useSelector((state: IState) => state.navigation);
  const dispatch = useDispatch();

  const scrollRef = useRef(null);

  const { x } = useScroll(scrollRef);
  const pageWidth = useWindowSize().width;
  const scrollDistance = pageWidth > 1400 ? 450 : pageWidth / 3;

  const [rightScrollHidden, setRightScrollHidden] = useState(false);

  // Responsive
  let isDesktop = true;
  if (typeof window !== 'undefined') {
    isDesktop = useMedia(`(min-width: ${UI.TABLET_BREAKPOINT}px)`);
  }

  const handleLeftScroll = () => {
    scrollRef.current.scrollBy({
      left: -scrollDistance,
      behavior: 'smooth',
    });
  };

  const handleRightScroll = () => {
    scrollRef.current.scrollBy({
      left: scrollDistance,
      behavior: 'smooth',
    });
  };

  function handleItemClick() {
    if (onItemClick) {
      onItemClick();
    }

    dispatch(saveCuisineBarScrollPos(x));
  }

  useEffect(() => {
    const isFullRight =
      scrollRef.current.scrollWidth - scrollRef.current.clientWidth ===
      scrollRef.current.scrollLeft;

    setRightScrollHidden(isFullRight);
  }, [x]);

  useEffect(() => {
    scrollRef.current.scrollLeft = navigationState.cuisineBarScrollPos;
  }, []);

  return (
    <Contained>
      <div className="flex relative w-full mt-20">
        <div
          className={classNames(
            'absolute left-0 flex items-center justify-between h-full w-full',
            !isDesktop && 'hidden',
          )}
        >
          <div
            className={classNames(
              'flex flex-col justify-center h-full z-50 duration-300 -ml-8',
              x === 0 && 'opacity-0',
            )}
          >
            <ChevronLeftSecondarySVG
              onClick={handleLeftScroll}
              className="h-16 cursor-pointer"
            />
          </div>

          <div
            className={classNames(
              'flex flex-col justify-center h-full z-50 duration-300 -mr-8',
              rightScrollHidden && 'opacity-0',
            )}
          >
            <ChevronRightSecondarySVG
              onClick={handleRightScroll}
              className="h-16 cursor-pointer"
            />
          </div>
        </div>

        <div
          className={classNames(
            'relative',
            'w-full',
            'hide_scroll',
            'scrolling-touch',
            isDesktop ? 'overflow-x-hidden' : 'overflow-x-scroll',
          )}
          ref={scrollRef}
        >
          <div className={classNames('flex md:px-0 overflow-y-visible')}>
            <div className={classNames('flex w-full overflow-y-visible')}>
              {Object.values(CUISINES).map(cuisine => (
                <CuisineItem
                  key={cuisine.name}
                  name={cuisine.name}
                  svg={cuisine.svg}
                  onClick={handleItemClick}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Contained>
  );
}
