import classNames from 'classnames';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import TastiestLogo from '../assets/svgs/brand.svg';
import { UI } from '../constants';
import { IState } from '../state/reducers';
import { Search } from './search/Search';

function NavBar() {
  const navigationState = useSelector((state: IState) => state.navigation);
  const { searchBarExpanded } = navigationState;

  const navBarRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const setIsMobileIfNeeded = () => {
    const width = navBarRef?.current?.getBoundingClientRect()?.width;

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
    <>
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
          <div className="antialiased contained flex justify-between">
            <div className="flex">
              {!searchBarExpanded && (
                <Link href="/">
                  <a className="tastiest-logo-link flex flex-shrink-0 text-secondary">
                    <TastiestLogo className="fill-current h-8" />
                  </a>
                </Link>
              )}
            </div>
          </div>
        </div>

        <Search isMobile={isMobile} />
      </div>
    </>
  );
}

export default NavBar;
