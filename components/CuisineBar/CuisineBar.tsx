import classNames from 'classnames';
import React, { useRef } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import { useDispatch, useSelector } from 'react-redux';
import { useScroll } from 'react-use';
// import { useGeolocation } from 'react-use';
import { CUISINES } from '../../constants';
import { saveCuisineBarScrollPos } from '../../state/navigation';
import { IState } from '../../state/reducers';
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

  return (
    <>
      <ScrollContainer vertical={false} hideScrollbars={true}>
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
      </ScrollContainer>
    </>
  );
}
