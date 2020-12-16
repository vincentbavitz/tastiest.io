import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';
import { generateURL } from '../../utils/routing';

interface Props {
  // Ensure that the accompanying SVG is in /assets/svgs/cuisines/name.svg
  // where name is given in lowercase for the filename
  name: string;
  svg: JSX.Element;
  onClick?(): void;
}

export function CuisineItem(props: Props) {
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
            'select-none',
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
            'text-primary',
            'border-secondary',
            'hover:text-secondary-300',
            'hover:bg-transparent',
          )}
        >
          <span className="pr-1">{props.name}</span>
          {props.svg}
        </div>
      </div>
    </Link>
  );
}
