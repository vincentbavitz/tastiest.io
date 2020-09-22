import classNames from 'classnames';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import TastiestLogo from '../assets/svgs/brand.svg';
import { UI } from '../constants';
import { Search } from './search/Search';

function NavBar() {
  const navBarRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const setIsMobileIfNeeded = () => {
    const width = navBarRef?.current?.getBoundingClientRect()?.width;

    console.log('Ismobile:', isMobile);

    if (!width) {
      return;
    }

    if (!isMobile && width < UI.MOBILE_BREAKPOINT) {
      setIsMobile(true);
    }

    if (isMobile && width >= UI.MOBILE_BREAKPOINT) {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileIfNeeded();
    };

    setIsMobileIfNeeded();
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <div ref={navBarRef} className="relative h-20">
      <div
        className={classNames(
          'absolute',
          'w-full',
          'h-full',
          'flex',
          'items-center',
          isMobile ? 'justify-center' : 'justify-start',
        )}
      >
        <Search isMobile={isMobile} />

        <div className="antialiased contained flex justify-between">
          <div className="flex">
            <Link href="/">
              <a className="tastiest-logo-link flex flex-shrink-0 text-primary">
                <TastiestLogo className="fill-current h-8" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
