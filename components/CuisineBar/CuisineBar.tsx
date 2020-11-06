import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMedia, useScroll } from 'react-use';
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

  const [rightScrollHidden, setRightScrollHidden] = useState(false);

  // Responsive
  let isDesktop = true;
  if (typeof window !== 'undefined') {
    isDesktop = useMedia(`(min-width: ${UI.TABLET_BREAKPOINT}px)`);
  }

  const handleLeftScroll = () => {
    scrollRef.current.scrollBy({
      left: -333,
      behavior: 'smooth',
    });
  };

  const handleRightScroll = () => {
    scrollRef.current.scrollBy({
      left: 333,
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
      <div className="flex relative w-full">
        <div
          className={classNames(
            'absolute left-0 flex items-center justify-between h-full w-full',
            !isDesktop && 'hidden',
          )}
        >
          <div
            className={classNames(
              'flex justify-center items-center h-12 w-12 pt-3 -ml-5 bg-gray-200 z-50 rounded-full duration-300 cursor-pointer',
              x === 0 && 'opacity-0',
            )}
            onClick={handleLeftScroll}
          >
            <LeftOutlined className="h-10 text-twoxl" />
          </div>
          <div
            className={classNames(
              'flex justify-center items-center h-12 w-12 pt-3 -mr-5 bg-gray-200 z-50 rounded-full duration-300 cursor-pointer',
              rightScrollHidden && 'hidden',
            )}
            onClick={handleRightScroll}
          >
            <RightOutlined className="h-10 text-twoxl" />
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
              {CUISINES.map(cuisine => (
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
