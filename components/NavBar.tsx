import classNames from 'classnames';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMedia } from 'react-use';
import TastiestLogo from '../assets/svgs/brand.svg';
import SearchSVG from '../assets/svgs/search.svg';
import { IState } from '../state/reducers';
import { OverlayCondition, Search } from './search/Search';

function NavBar() {
  const navigationState = useSelector((state: IState) => state.navigation);
  const { searchOverlayShown } = navigationState;
  const dispatch = useDispatch();
  const navBarRef = useRef(null);

  const [renderMobileSearchBar, setRenderMobileSearchBar] = useState(false);

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
              <Link href="/">
                <a className="tastiest-logo-link flex flex-shrink-0 text-secondary">
                  <TastiestLogo className="fill-current h-8" />
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute w-full h-full">
          <div className="flex h-full items-center justify-end overflow-x-hidden">
            {isMobile && (
              <div
                className="flex flex-shrink-0 contained"
                onClick={() => setRenderMobileSearchBar(true)}
              >
                <SearchSVG className="fill-secondary h-8 cursor-pointer" />
              </div>
            )}
          </div>
        </div>

        {isMobile && renderMobileSearchBar && (
          <div className="fixed w-full h-full">
            <Search overlay={OverlayCondition.ON_RENDER} />
          </div>
        )}
      </div>
    </>
  );
}

export default NavBar;
