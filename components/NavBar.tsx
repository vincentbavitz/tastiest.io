import classNames from 'classnames';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { useMedia } from 'react-use';
import TastiestLogo from '../assets/svgs/brand.svg';
import SearchSVG from '../assets/svgs/search.svg';
import { UI } from '../constants';
import { Search } from './search/Search';

function NavBar() {
  const navBarRef = useRef(null);
  const [renderMobileSearchBar, setRenderMobileSearchBar] = useState(false);

  // Responsive
  let isMobile = true;
  if (typeof window !== 'undefined') {
    isMobile = useMedia(`(max-width: ${UI.MOBILE_BREAKPOINT}px)`);
  }

  return (
    <>
      <div ref={navBarRef} className="relative h-20 -mb-4">
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
              <Link href="/">
                <a className="tastiest-logo-link flex flex-shrink-0 text-secondary">
                  <TastiestLogo className="fill-current h-8" />
                </a>
              </Link>
            </div>
          </div>
        </div>

        {isMobile && (
          <div className="absolute w-full h-full">
            <div className="flex h-full items-center justify-end overflow-x-hidden">
              <div
                className="flex flex-shrink-0 contained"
                onClick={() => setRenderMobileSearchBar(true)}
              >
                <SearchSVG className="fill-secondary h-8 cursor-pointer" />
              </div>
            </div>
          </div>
        )}

        {isMobile && renderMobileSearchBar && (
          <Search onExit={() => setRenderMobileSearchBar(false)} />
        )}
      </div>
    </>
  );
}

export default NavBar;
