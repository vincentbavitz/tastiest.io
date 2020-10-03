import classNames from 'classnames';
import Link from 'next/link';
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useMedia } from 'react-use';
import TastiestLogo from '../assets/svgs/brand.svg';
import { IState } from '../state/reducers';
import { Search } from './search/Search';

function NavBar() {
  const navigationState = useSelector((state: IState) => state.navigation);
  const { searchBarExpanded } = navigationState;

  const navBarRef = useRef(null);

  // Responsive
  let isMobile = true;
  if (typeof window !== 'undefined') {
    isMobile = useMedia('(max-width: 500px)');
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

        <Search />
      </div>
    </>
  );
}

export default NavBar;
