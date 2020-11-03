import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import React, { useEffect, useRef } from 'react';
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

  const scrollRef = useRef(null);
  const { x } = useScroll(scrollRef);

  const dispatch = useDispatch();

  // Responsive
  let isDesktop = true;
  if (typeof window !== 'undefined') {
    isDesktop = useMedia(`(min-width: ${UI.TABLET_BREAKPOINT}px)`);
  }

  const handleLeftScroll = (event: React.MouseEvent) => {
    scrollRef.current.scrollLeft = scrollRef.current.scrollLeft += 200;
  };

  const handleRightScroll = (event: React.MouseEvent) => {
    scrollRef.current.scrollLeft = scrollRef.current.scrollLeft += 200;
  };

  function handleItemClick() {
    if (onItemClick) {
      onItemClick();
    }

    dispatch(saveCuisineBarScrollPos(x));
  }

  useEffect(() => {
    scrollRef.current.scrollLeft = navigationState.cuisineBarScrollPos;
  }, []);

  return (
    <Contained>
      <div className="flex relative w-full">
        <div className="absolute left-0 flex items-center justify-between h-full w-full">
          <div
            className="flex justify-center items-center h-10 w-10 pt-3 bg-gray-200 z-50 rounded-full duration-300 cursor-pointer"
            onClick={handleLeftScroll}
          >
            <LeftOutlined className="h-10 text-twoxl" />
          </div>
          <div
            className="flex justify-center items-center h-10 w-10 pt-3 bg-gray-200 z-50 rounded-full duration-300 cursor-pointer"
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
            isDesktop && 'overflow-x-hidden',
          )}
          ref={scrollRef}
        >
          <div
            className={classNames(
              'flex md:px-0 overflow-y-visible scrolling-touch',
            )}
          >
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
