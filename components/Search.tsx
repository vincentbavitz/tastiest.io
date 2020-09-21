import classNames from 'classnames';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import SearchSVG from '../assets/svgs/search-icon.svg';
import { UI } from '../constants';

export function Search() {
  const searchContainerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const setIsMobileIfNeeded = () => {
    const width = searchContainerRef.current.getBoundingClientRect()?.width;

    if (!width) {
      return;
    }

    if (width < UI.MOBILE_BREAKPOINT) {
      if (!isMobile) {
        setIsMobile(true);
      }
    }

    if (width >= UI.MOBILE_BREAKPOINT) {
      if (isMobile) {
        setIsMobile(false);
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileIfNeeded();
    };

    setIsMobileIfNeeded();
    window.addEventListener('resize', handleResize);
  });

  const renderSearchComponent = () => (
    <Link href="/blog">
      <a className="flex flex-shrink-0">
        <SearchSVG className="fill-secondary h-6" />
      </a>
    </Link>
  );

  return (
    <div
      className="absolute w-full h-full flex items-center justify-end"
      ref={searchContainerRef}
    >
      <div className="flex contained mb-2 w-1/3 max-w-1/2 justify-end">
        <div
          className={classNames(
            'inline-flex',
            'items-center',
            'content-between',
            !isMobile && 'border-2',
            'border-primary',
            'focus:shadow-outline',
            'focus:outline-none',
            'rounded-lg',
            'px-2',
            'h-8',
          )}
        >
          {!isMobile && (
            <input
              className={classNames(
                'pl-1',
                'border-none',
                'outline-none',
                'text-sm',
              )}
              placeholder={'Search'}
            />
          )}
          {renderSearchComponent()}
        </div>
      </div>
    </div>
  );
}
