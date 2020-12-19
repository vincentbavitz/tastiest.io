import Link from 'next/link';
import React, { useContext, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TastiestLogo from '../../assets/svgs/brand.svg';
import SearchPrimarySVG from '../../assets/svgs/search-primary.svg';
import { ScreenContext } from '../../contexts/screen';
import { expandSearchOverlay } from '../../state/navigation';
import { IState } from '../../state/reducers';
import { Contained } from '../Contained';
import { HeaderAvatar } from './HeaderAvatar';
import { HeaderSavedPlaces } from './HeaderSavedPlaces';
import { HeaderSearch } from './HeaderSearch';

export function Header() {
  const { isMobile } = useContext(ScreenContext);

  const handleAvatarClick = () => {
    null;
  };

  return <div>{isMobile ? <MobileHeader /> : <DesktopHeader />}</div>;
}

function MobileHeader() {
  const navigationState = useSelector((state: IState) => state.navigation);
  const searchState = useSelector((state: IState) => state.search);
  const dispatch = useDispatch();

  const handleExpandSearch = (e: React.MouseEvent) => {
    // Timeout to prevent action immediately firing on the elemnt under with onMouseUp
    setTimeout(() => dispatch(expandSearchOverlay()), 50);
    e.stopPropagation();
  };

  return (
    <div
      style={{ zIndex: 1000, paddingLeft: '5vw', paddingRight: '5vw' }}
      className="fixed left-0 right-0 top-0 w-full h-24 bg-white"
    >
      <div className="w-full h-full flex items-center justify-between">
        <div className="flex flex-shrink-0" onMouseDown={handleExpandSearch}>
          <SearchPrimarySVG className="h-10 cursor-pointer" />
        </div>

        <div className="antialiased">
          <Link href="/">
            <a className="tastiest-logo-link flex items-center flex-shrink-0 text-secondary">
              <TastiestLogo className="fill-current h-8" />
            </a>
          </Link>
        </div>

        <HeaderAvatar />
      </div>
    </div>
  );
}

function DesktopHeader() {
  const nagivationState = useSelector((state: IState) => state.navigation);
  const { searchOverlayExpanded } = nagivationState;
  const navBarRef = useRef(null);

  return (
    <div
      ref={navBarRef}
      style={{ zIndex: searchOverlayExpanded ? 20001 : 1000 }}
      className="fixed left-0 right-0 top-0 w-full h-20 bg-white flex items-center"
    >
      <Contained>
        <div className="w-full h-full flex items-center">
          <div className="antialiased flex w-full items-center justify-between">
            <div className="flex flex-grow">
              <Link href="/">
                <a className="tastiest-logo-link flex items-center flex-shrink-0 text-secondary">
                  <TastiestLogo className="fill-current h-8" />
                </a>
              </Link>
              <HeaderSearch />
            </div>

            <HeaderSavedPlaces />
            <HeaderAvatar />
          </div>
        </div>
      </Contained>
    </div>
  );
}
