import { TastiestBrand } from '@tastiest-io/tastiest-components';
import { HamburgerIcon } from '@tastiest-io/tastiest-icons';
import clsx from 'clsx';
import { usePageLoader } from 'hooks/usePageLoader';
import { useScreenSize } from 'hooks/useScreenSize';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useToggle } from 'react-use';
import { UI } from '../../constants';
import { expandSearchOverlay } from '../../state/navigation';
import { IState } from '../../state/reducers';
import { Contained } from '../Contained';
import { HeaderAvatar } from './HeaderAvatar';

export interface HeaderProps {
  transparent?: boolean;
}

export function Header(props: HeaderProps) {
  const { isDesktop } = useScreenSize();
  return isDesktop ? <DesktopHeader {...props} /> : <MobileHeader {...props} />;
}

function MobileHeader(props: HeaderProps) {
  const { transparent } = props;
  const dispatch = useDispatch();

  const handleExpandSearch = (e: React.MouseEvent) => {
    // Timeout to prevent action immediately firing on the elemnt under with onMouseUp
    setTimeout(() => dispatch(expandSearchOverlay()), 50);
    e.stopPropagation();
  };

  const [isMobileMenuOpen, toggleIsMobileMenuOpen] = useToggle(false);

  // Prevent clicking when things are loading
  const { isPageLoading } = usePageLoader();

  return (
    <div
      style={{
        paddingLeft: `${UI.PAGE_CONTAINED_PADDING_VW}vw`,
        paddingRight: `${UI.PAGE_CONTAINED_PADDING_VW}vw`,
        height: `${UI.HEADER_HEIGHT_MOBILE_REM}rem`,
        zIndex: UI.Z_INDEX_HEADER,
      }}
      className={clsx(
        'fixed top-0 left-0 right-0 w-full duration-500 shadow-xl',
        transparent ? 'glass' : 'bg-white',
        isPageLoading ? 'pointer-events-none' : 'pointer-events-auto',
      )}
    >
      <div className="relative flex items-center justify-between w-full h-full">
        <Link href="/">
          <a className="flex items-center flex-shrink-0 no-underline">
            <TastiestBrand size={8} />
          </a>
        </Link>

        <HamburgerIcon
          onClick={() => toggleIsMobileMenuOpen()}
          className="h-8 cursor-pointer fill-current text-primary"
        />
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen ? (
        <div
          style={{
            top: `${UI.HEADER_HEIGHT_MOBILE_REM}rem`,
            zIndex: UI.Z_INDEX_HEADER,
            paddingLeft: `${UI.PAGE_CONTAINED_PADDING_VW}vw`,
            paddingRight: `${UI.PAGE_CONTAINED_PADDING_VW}vw`,
          }}
          className="fixed left-0 right-0 flex flex-col py-3 space-y-3 bg-gray-100 shadow-lg"
        >
          <div className="flex items-center space-x-2">
            <span>Profile</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function DesktopHeader(props: HeaderProps) {
  const { transparent } = props;

  const { searchOverlayExpanded } = useSelector(
    (state: IState) => state.navigation,
  );
  const { searchBarPinnedToHeader } = useSelector(
    (state: IState) => state.search,
  );

  // Prevent clicking when things are loading
  const { isPageLoading } = usePageLoader();

  // We only wnat the searchbar to be invisible on the home page
  // and given that they have not scrolled past the main home search
  const [searchIsShown, setSearchIsShown] = useState(false);
  useEffect(() => {
    if (
      (location.pathname === '/' && searchBarPinnedToHeader) ||
      location.pathname !== '/'
    ) {
      if (!searchIsShown) {
        setSearchIsShown(true);
      }
    } else {
      if (searchIsShown) {
        setSearchIsShown(false);
      }
    }
  }, [location.pathname, searchBarPinnedToHeader]);

  const navBarRef = useRef(null);

  return (
    <div
      ref={navBarRef}
      style={{
        zIndex:
          searchOverlayExpanded && searchIsShown
            ? UI.Z_INDEX_HEADER_SEARCH
            : UI.Z_INDEX_HEADER,
        height: `${UI.HEADER_HEIGHT_DESKTOP_REM}rem`,
      }}
      className={clsx(
        'fixed top-0 left-0 right-0 flex items-center duration-500 w-full',
        transparent ? 'glass' : 'bg-white',
        isPageLoading ? 'pointer-events-none' : 'pointer-events-auto',
      )}
    >
      <Contained>
        <div className="flex items-center w-full h-full">
          <div className="flex items-center justify-between w-full antialiased">
            <div className="flex flex-grow">
              <Link href="/">
                <a className="no-underline">
                  <TastiestBrand type="full" size={10} />
                </a>
              </Link>

              {/* <HeaderSearch
                isShown={searchIsShown}
                innerOverlayStyle={{
                  // When pinned to header, limit height to vh and lock body scroll
                  maxHeight: searchIsShown ? '80vh' : 'unset',
                }}
              /> */}
            </div>

            {/* <HeaderSavedPlaces /> */}
            <HeaderAvatar />
          </div>
        </div>
      </Contained>
    </div>
  );
}

function CheckoutHeader({ isDesktop }: { isDesktop: boolean }) {
  const InnerContent = () => (
    <div
      style={{
        height: `${
          isDesktop ? UI.HEADER_HEIGHT_DESKTOP_REM : UI.HEADER_HEIGHT_MOBILE_REM
        }rem`,
      }}
      className={clsx(
        'flex items-center w-full antialiased',
        isDesktop ? 'justify-between' : 'justify-center',
      )}
    >
      <div className="flex items-center flex-shrink-0">
        <TastiestBrand type="full" />
      </div>
    </div>
  );

  return isDesktop ? (
    <Contained maxWidth={UI.CHECKOUT_WIDTH_PX}>
      <InnerContent />
    </Contained>
  ) : (
    <InnerContent />
  );
}
