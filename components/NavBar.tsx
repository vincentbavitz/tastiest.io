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
import { Contained } from './Contained';

function NavBar() {
  const navigationState = useSelector((state: IState) => state.navigation);
  const dispatch = useDispatch();
  const navBarRef = useRef(null);

  const { searchOverlayExpanded } = navigationState;

  // Responsive
  let isMobile = true;
  if (typeof window !== 'undefined') {
    isMobile = useMedia(`(max-width: ${UI.MOBILE_BREAKPOINT}px)`);
  }

  return (
    <Contained>
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
          <div className="antialiased flex w-full justify-between">
            <div className="flex">
              <Link href="/">
                <a className="tastiest-logo-link flex flex-shrink-0 text-secondary">
                  <TastiestLogo className="fill-current h-8" />
                </a>
              </Link>
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
              <Link href="/login">
                <div className="bg-primary rounded-full h-8 w-8 cursor-pointer"></div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </Contained>
  );
}

export default NavBar;
