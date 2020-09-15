import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

interface Props {
  text: string;
  svg: any;
  selected: boolean;
}

export function MenuItem(props: Props) {
  return (
    <Link href="#">
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
        {props.text}
        {props.svg}
      </div>
    </Link>
  );
}
