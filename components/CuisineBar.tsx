import classNames from 'classnames';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useScroll } from 'react-use';
// import { useGeolocation } from 'react-use';
import { cuisines } from '../constants';
import { saveCuisineBarScrollPos } from '../state/navigation';
import { IState } from '../state/reducers';
import { generateURL } from '../utils/routing';

interface Props {
  // Ensure that the accompanying SVG is in /assets/svgs/cuisines/name.svg
  // where name is given in lowercase for the filename
  name: string;
  svg: JSX.Element;
  onClick?(): void;
}

function CuisineItem(props: Props) {
  // const state = useGeolocation();
  const { name, onClick } = props;
  const { href, as } = generateURL({ city: 'london', cuisine: name });

  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link href={href} as={as}>
      <div className="cuisine-item flex py-6" onClick={handleOnClick}>
        <div
          className={classNames(
            'overflow-y-visible',
            'rounded-xl',
            'pl-4',
            'py-3',
            'inline-flex',
            'items-center',
            'justify-between',
            'flex-1',
            'text-sm',
            'font-bold',
            'pl-2',
            'py-2',
            'border-2',
            'rounded-lg',
            'bg-white',
            'text-primary',
            'border-secondary',
            'hover:text-secondary-300',
            'hover:bg-transparent',
            'lg:mt-0',
          )}
        >
          <span className="pr-1">{props.name}</span>
          {props.svg}
        </div>
      </div>
    </Link>
  );
}

export function CuisineBar() {
  const navigationState = useSelector((state: IState) => state.navigation);

  const scrollRef = useRef(null);
  const { x } = useScroll(scrollRef);

  console.log('Current', scrollRef.current);

  const dispatch = useDispatch();
  const handleScrollPosition = () => {
    dispatch(saveCuisineBarScrollPos(x));
  };

  useEffect(() => {
    scrollRef.current.scrollLeft = navigationState.cuisineBarScrollPos;
  }, []);

  return (
    <div className="w-full overflow-x-scroll hide_scroll" ref={scrollRef}>
      <div className="flex md:px-0 overflow-y-visible scrolling-touch">
        <div className="flex w-full overflow-y-visible">
          {cuisines.map(cuisine => (
            <CuisineItem
              key={cuisine.name}
              name={cuisine.name}
              svg={cuisine.svg}
              onClick={handleScrollPosition}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
