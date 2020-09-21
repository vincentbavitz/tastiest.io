import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';
import { cuisines } from '../constants';

interface Props {
  // Ensure that the accompanying SVG is in /assets/svgs/cuisines/name.svg
  // where name is given in lowercase for the filename
  name: string;
  href: string;
  svg: JSX.Element;
}

function CuisineItem(props: Props) {
  return (
    <Link href={props.href}>
      <div className="cuisine-item flex py-6">
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
            'text-secondary',
            'border-primary',
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
  return (
    <div className="w-full overflow-x-scroll hide_scroll">
      <div className="flex md:px-0 overflow-y-visible scrolling-touch">
        <div className="flex w-full overflow-y-visible">
          {cuisines.map(cuisine => (
            <CuisineItem
              key={cuisine.name}
              name={cuisine.name}
              href={cuisine.href}
              svg={cuisine.svg}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
