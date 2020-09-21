import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';
import { cuisines } from '../constants';

interface Props {
  // Ensure that the accompanying SVG is in /assets/svgs/cuisines/name.svg
  //  where name is given in lowercase for the filename
  name: string;
  href: string;
  svg: JSX.Element;
}

function CuisineItem(props: Props) {
  return (
    <Link href={props.href}>
      <div
        className={classNames(
          'menu-item',
          'inline-flex',
          'items-center',
          'justify-between',
          'flex-1',
          'text-sm',
          'font-bold',
          'px-2',
          'py-2',
          'mx-3',
          'mt-4',
          'border-2',
          'rounded-lg',
          'bg-white',
          'text-secondary',
          'border-primary',
          'hover:text-secondary-300',
          'hover:bg-transparent',
          'lg:mt-0',
          'first:ml-0',
          'last:mr-0',
        )}
      >
        {props.name}
        {props.svg}
      </div>
    </Link>
  );
}

export function CuisineBar() {
  return (
    <div className="w-full flex">
      {cuisines.map(cuisine => (
        <CuisineItem
          key={cuisine.name}
          name={cuisine.name}
          href={cuisine.href}
          svg={cuisine.svg}
        />
      ))}
    </div>
  );
}
