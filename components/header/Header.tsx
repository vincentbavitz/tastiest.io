import classNames from 'classnames';
import Link from 'next/link';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useMedia, useWindowScroll } from 'react-use';
import TastiestLogo from '../../assets/svgs/brand.svg';
import HeartPrimarySVG from '../../assets/svgs/heart-primary.svg';
import SearchPrimarySVG from '../../assets/svgs/search-primary.svg';
import { UI } from '../../constants';
import { expandSearchOverlay } from '../../state/navigation';
import { IState } from '../../state/reducers';
import { Contained } from '../Contained';
import { Search } from '../search/Search';
import { Title } from '../Title';
import { HeaderAvatar } from './HeaderAvatar';

export function Header() {
  // Responsive
  let isMobile;
  if (typeof window !== 'undefined') {
    isMobile = useMedia(`(max-width: ${UI.TABLET_BREAKPOINT}px)`);
  }

  const handleAvatarClick = () => {
    null;
  };

  return <div>{isMobile ? <MobileHeader /> : <DesktopHeader />}</div>;
}

function MobileHeader() {
  const navigationState = useSelector((state: IState) => state.navigation);
  const searchState = useSelector((state: IState) => state.search);
  const dispatch = useDispatch();

  return (
    <div
      style={{ zIndex: 1000, paddingLeft: '5vw', paddingRight: '5vw' }}
      className="fixed left-0 right-0 top-0 w-full h-24 bg-white"
    >
      <div className="w-full h-full flex items-center justify-between">
        {/* AVATAR */}
        <Link href="/login">
          <div className="bg-primary rounded-full h-8 w-8 cursor-pointer"></div>
        </Link>

        <div className="antialiased">
          <Link href="/">
            <a className="tastiest-logo-link flex items-center flex-shrink-0 text-secondary">
              <TastiestLogo className="fill-current h-8" />
            </a>
          </Link>
        </div>

        <div
          className="flex flex-shrink-0"
          onClick={() => dispatch(expandSearchOverlay())}
        >
          <SearchPrimarySVG className="fill-secondary h-8 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

function DesktopHeader() {
  const navigationState = useSelector((state: IState) => state.navigation);
  const searchState = useSelector((state: IState) => state.search);
  const dispatch = useDispatch();

  const navBarRef = useRef(null);

  const location = useLocation();
  const { y } = useWindowScroll();

  // Pull into the location context of search bar
  const searchBarGeometry = searchState.searchBarGeometry;
  const { searchOverlayExpanded } = navigationState;

  // Navbar search only visible on desktop AND
  // IF on homepage, ONLY after scrolling beyond MainPageSearch
  // ELSE always show
  const searchToNavbarY =
    location.pathname === '/'
      ? y > searchBarGeometry.top - searchBarGeometry.height
      : true;

  return (
    <div
      ref={navBarRef}
      style={{ zIndex: 1000 }}
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

              {/* DESKTOP SEARCH */}
              <div
                className={classNames(
                  'mx-8',
                  searchToNavbarY ? 'block' : 'hidden',
                )}
                style={{ minWidth: '10rem', maxWidth: '20rem', width: '100%' }}
              >
                <Search
                  size="small"
                  theme="secondary"
                  className="border-secondary border-2 border-opacity-50 rounded-lg duration-300 w-full"
                  renderExitButton={false}
                  onFocus={() => dispatch(expandSearchOverlay())}
                />
              </div>
            </div>

            {/* SAVED PLACES */}
            <div className="flex items-center px-4 cursor-pointer">
              <HeartPrimarySVG className="h-8 mr-1" />
              <Title
                level={4}
                margin={false}
                className="text-primary font-somantic"
              >
                Saved Places
              </Title>
            </div>

            {/* AVATAR */}
            <HeaderAvatar />
          </div>
        </div>
      </Contained>
    </div>
  );
}
