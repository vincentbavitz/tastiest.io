import { LogoutOutlined, SettingOutlined } from '@ant-design/icons';
import { HamburgerIcon } from '@tastiest-io/tastiest-icons';
import { Dropdown, TastiestBrand } from '@tastiest-io/tastiest-ui';
import clsx from 'clsx';
import { UserAvatar } from 'components/avatar/UserAvatar';
import { useAuth } from 'hooks/auth/useAuth';
import { useSignOut } from 'hooks/auth/useSignOut';
import { usePageLoader } from 'hooks/usePageLoader';
import { useScreenSize } from 'hooks/useScreenSize';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UI } from '../../constants';
import { openAuthModal } from '../../state/navigation';
import { IState } from '../../state/reducers';
import { Contained } from '../Contained';
import { HeaderAvatar } from './HeaderAvatar';

export interface HeaderProps {
  transparency?: 'glass' | 'full' | 'none';
  theme?: 'light' | 'dark';
}

export function Header(props: HeaderProps) {
  const { isDesktop } = useScreenSize();
  return isDesktop ? <DesktopHeader {...props} /> : <MobileHeader {...props} />;
}

function MobileHeader(props: HeaderProps) {
  const { isSignedIn } = useAuth();
  const { signOut } = useSignOut();

  const { transparency = 'none', theme = 'light' } = props;
  const dispatch = useDispatch();

  // const handleExpandSearch = (e: React.MouseEvent) => {
  //   // Timeout to prevent action immediately firing on the elemnt under with onMouseUp
  //   setTimeout(() => dispatch(expandSearchOverlay()), 50);
  //   e.stopPropagation();
  // };

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
        'fixed top-0 left-0 right-0 w-full duration-500',
        transparency === 'glass' && 'glass',
        transparency === 'none' ? 'bg-white' : 'bg-none',
        isPageLoading ? 'pointer-events-none' : 'pointer-events-auto',
      )}
    >
      <div className="relative flex items-center justify-between w-full h-full">
        <Link href="/">
          <a className="flex items-center flex-shrink-0 no-underline">
            <TastiestBrand type="full" theme={theme} size={8} />
          </a>
        </Link>

        <Dropdown offset={30}>
          <Dropdown.Trigger>
            <HamburgerIcon
              className={clsx(
                'h-8 cursor-pointer fill-current duration-500',
                theme === 'light' ? 'text-primary' : 'text-light',
              )}
            />
          </Dropdown.Trigger>

          <Dropdown.Item
            display={isSignedIn}
            href="/account/preferences"
            icon={<SettingOutlined />}
          >
            Preferences
          </Dropdown.Item>

          <Dropdown.Item
            display={isSignedIn}
            icon={<LogoutOutlined />}
            onClick={() => {
              signOut();
            }}
          >
            Sign out
          </Dropdown.Item>

          <Dropdown.Item
            display={!isSignedIn}
            onClick={() => dispatch(openAuthModal())}
          >
            <div className="flex items-center gap-4">
              <UserAvatar /> Sign in
            </div>
          </Dropdown.Item>
        </Dropdown>
      </div>
    </div>
  );
}

function DesktopHeader(props: HeaderProps) {
  const { transparency = 'none', theme = 'light' } = props;

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
        transparency === 'glass' && 'glass',
        transparency === 'none' ? 'bg-white' : 'bg-none',
        isPageLoading ? 'pointer-events-none' : 'pointer-events-auto',
      )}
    >
      <Contained>
        <div className="flex items-center w-full h-full">
          <div className="flex items-center justify-between w-full antialiased">
            <div className="flex flex-grow">
              <Link href="/">
                <a className="no-underline">
                  <TastiestBrand theme={theme} type="full" size={10} />
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
