import { SVG } from '@tastiest-io/tastiest-utils';
import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';
import { generateStaticURL } from 'utils/routing';

interface Props {
  // Ensure that the accompanying SVG is in /assets/cuisines
  // where name is given in lowercase for the filename
  name: string;
  svg: SVG;
  onClick?(): void;
}

export function CuisineItem(props: Props) {
  // const state = useGeolocation();
  const { name, onClick } = props;
  const { href, as } = generateStaticURL({ city: 'london', cuisine: name });

  const handleOnClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link href={href} as={as}>
      <a className="hover:no-underline">
        <div
          className="flex py-6 mx-2 mt-1 cursor-pointer tablet:py-4 tablet:mt-0"
          onClick={handleOnClick}
        >
          <div
            style={{
              maxHeight: '3.33em',
            }}
            className={classNames(
              'relative',
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
              'border-2',
              'rounded-lg',
              'duration-150',
              'text-primary',
              'border-secondary',
              'hover:text-secondary',
              'hover:bg-transparent',
            )}
          >
            <span className="pr-1">{props.name}</span>
            <props.svg className="pr-1 h-14" />
          </div>
        </div>
      </a>
    </Link>
  );
}
