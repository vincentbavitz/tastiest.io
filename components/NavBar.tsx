import classNames from 'classnames';
import Link from 'next/link';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMedia } from 'react-use';
import TastiestLogo from '../assets/svgs/brand.svg';
import SearchSVG from '../assets/svgs/search.svg';
import { UI } from '../constants';
import { expandSearchOverlay } from '../state/navigation';
import { IState } from '../state/reducers';
import { Search } from './search/Search';

function NavBar() {
  const navigationState = useSelector((state: IState) => state.navigation);
  const dispatch = useDispatch();
  const navBarRef = useRef(null);

  const { searchOverlayExpanded } = navigationState;

  const handleAvatarClick = () => {
    null;
  };

  // Responsive
  let isMobile = true;
  if (typeof window !== 'undefined') {
    isMobile = useMedia(`(max-width: ${UI.MOBILE_BREAKPOINT}px)`);
  }

  return (
    <div
      ref={navBarRef}
      style={{ zIndex: 1000, paddingLeft: '5vw', paddingRight: '5vw' }}
      className="fixed left-0 right-0 top-0 w-full h-20 bg-white"
    >
      <div
        className={classNames(
          'w-full',
          'h-full',
          'flex',
          'items-center',
          isMobile ? 'justify-center' : 'justify-start',
        )}
      >
        <div className="antialiased flex w-full justify-between">
          <div className="flex">
            <Link href="/">
              <a className="tastiest-logo-link flex items-center flex-shrink-0 text-secondary">
                <TastiestLogo className="fill-current h-8" />
              </a>
            </Link>

            <div className="ml-8" style={{ width: '16rem' }}>
              <Search
                size="small"
                className="border-secondary border-2 border-opacity-50 rounded-lg"
                renderExitButton={false}
                onFocus={() => dispatch(expandSearchOverlay())}
              />
            </div>
          </div>

          <Link href="/login">
            <div className="bg-primary rounded-full h-8 w-8 cursor-pointer"></div>
          </Link>
        </div>
      </div>

      {isMobile && (
        <div className="absolute w-full h-full">
          <div className="flex h-full items-center justify-end overflow-x-hidden">
            <div
              className="flex flex-shrink-0"
              onClick={() => dispatch(expandSearchOverlay())}
            >
              <SearchSVG className="fill-secondary h-8 cursor-pointer" />
            </div>
          </div>

          <div className="absolute right-0">
            <div onClick={handleAvatarClick}>
              <div className="bg-primary rounded-full h-8 w-8 cursor-pointer"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
