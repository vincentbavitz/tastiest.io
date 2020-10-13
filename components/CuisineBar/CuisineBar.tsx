import classNames from 'classnames';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useScroll } from 'react-use';
// import { useGeolocation } from 'react-use';
import { CUISINES } from '../../constants';
import { saveCuisineBarScrollPos } from '../../state/navigation';
import { IState } from '../../state/reducers';
import { Contained } from '../Contained';
import { CuisineItem } from './CuisineItem';

interface Props {
  shouldOverflow?: boolean;
  onItemClick?(): void;
}

export function CuisineBar(props: Props) {
  const { shouldOverflow, onItemClick } = props;
  const navigationState = useSelector((state: IState) => state.navigation);

  const scrollRef = useRef(null);
  const { x } = useScroll(scrollRef);

  const dispatch = useDispatch();

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
    <Contained allowRight>
      <div
        className={classNames(
          'w-full hide_scroll',
          !shouldOverflow && 'overflow-x-scroll',
        )}
        ref={scrollRef}
      >
        <div
          className={classNames(
            'flex md:px-0 overflow-y-visible scrolling-touch',
            shouldOverflow && 'flex-wrap',
          )}
        >
          <div
            className={classNames(
              'flex w-full overflow-y-visible',
              shouldOverflow && 'flex-wrap',
            )}
          >
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
    </Contained>
  );
}
