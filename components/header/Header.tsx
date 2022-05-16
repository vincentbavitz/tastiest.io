import {
  CalendarOutlined,
  LogoutOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { HamburgerIcon } from '@tastiest-io/tastiest-icons';
import {
  Breadcrumbs,
  CrumbProps,
  Dropdown,
  TastiestBrand,
} from '@tastiest-io/tastiest-ui';
import clsx from 'clsx';
import { UserAvatar } from 'components/avatar/UserAvatar';
import { useAuth } from 'hooks/auth/useAuth';
import { useSignOut } from 'hooks/auth/useSignOut';
import { usePageLoader } from 'hooks/usePageLoader';
import { useScreenSize } from 'hooks/useScreenSize';
import Link from 'next/link';
import React, { ReactElement, ReactNode, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { UI } from '../../constants';
import { openAuthModal } from '../../state/navigation';
import { Contained } from '../Contained';

type HeaderAllowedChildren = HeaderItemProps | HeaderLinkProps;

export interface HeaderProps {
  transparency?: 'glass' | 'full' | 'none';
  breadcrumbs?: Omit<CrumbProps, 'selected'>[];
  theme?: 'light' | 'dark';
  blank?: boolean;
  children?:
    | ReactElement<HeaderAllowedChildren>
    | ReactElement<HeaderAllowedChildren>[];
}

function Header(props: HeaderProps) {
  const { isDesktop } = useScreenSize();

  return isDesktop ? <DesktopHeader {...props} /> : <MobileHeader {...props} />;
}

function MobileHeader(props: HeaderProps) {
  const { isSignedIn, userData } = useAuth();
  const { signOut } = useSignOut();

  const { transparency = 'none', breadcrumbs, theme = 'light', blank } = props;
  const dispatch = useDispatch();

  // Prevent clicking when things are loading
  const { isPageLoading } = usePageLoader();

  return (
    <>
      <div
        style={{
          paddingLeft: `${UI.PAGE_CONTAINED_PADDING_VW}vw`,
          paddingRight: `${UI.PAGE_CONTAINED_PADDING_VW}vw`,
          height: `${UI.HEADER_HEIGHT_MOBILE_REM}rem`,
          zIndex: UI.Z_INDEX_HEADER,
        }}
        className={clsx(
          'fixed left-0 right-0 w-full duration-500',
          breadcrumbs ? 'top-9' : 'top-0',
          transparency === 'glass' && 'glass',
          transparency === 'none'
            ? theme === 'light'
              ? 'bg-white'
              : 'bg-dark'
            : 'bg-none',
          isPageLoading ? 'pointer-events-none' : 'pointer-events-auto',
        )}
      >
        <div className="relative flex items-center justify-between w-full h-full">
          <div className="flex flex-grow space-x-4">
            <Link href="/">
              <a className="flex items-center flex-shrink-0 no-underline">
                <TastiestBrand type="full" theme={theme} size={8} />
              </a>
            </Link>
          </div>

          {blank ? null : (
            <Dropdown offset={20}>
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
                href="/account/bookings"
                icon={<UserOutlined />}
              >
                {userData?.first_name ?? 'Profile'}
              </Dropdown.Item>

              <Dropdown.Item
                display={isSignedIn}
                href="/account/bookings"
                icon={<CalendarOutlined />}
              >
                Bookings
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
                  <UserAvatar initial="T" /> Sign in
                </div>
              </Dropdown.Item>
            </Dropdown>
          )}
        </div>
      </div>

      {breadcrumbs ? (
        <div
          style={{ zIndex: 999 }}
          className="fixed top-0 left-0 right-0 h-9 bg-white flex items-center"
        >
          <Contained>
            <Breadcrumbs size="small">
              {breadcrumbs.map((crumb, key) => (
                <Breadcrumbs.Crumb key={key} {...crumb} />
              ))}
            </Breadcrumbs>
          </Contained>
        </div>
      ) : null}
    </>
  );
}

function DesktopHeader(props: HeaderProps) {
  const {
    transparency = 'none',
    breadcrumbs,
    theme = 'light',
    blank,
    children,
  } = props;

  const navBarRef = useRef(null);

  return (
    <nav
      ref={navBarRef}
      style={{
        zIndex: UI.Z_INDEX_HEADER,
        height: `${UI.HEADER_HEIGHT_DESKTOP_REM}rem`,
      }}
      className={clsx(
        'fixed left-0 right-0 flex items-center duration-500 w-full',
        breadcrumbs ? 'top-9' : 'top-0',
        transparency === 'glass' && 'glass',
        transparency === 'none'
          ? theme === 'light'
            ? 'bg-white'
            : 'bg-dark'
          : 'bg-none',
      )}
    >
      <Contained>
        <div className="flex items-center w-full h-full">
          <div className="flex items-center justify-between w-full antialiased">
            <div className="flex-grow">
              <div style={{ width: 'min-content' }}>
                <Link href="/">
                  <a className="no-underline">
                    <TastiestBrand theme={theme} type="full" size={10} />
                  </a>
                </Link>
              </div>
            </div>

            {!blank && (
              <div
                className={clsx(
                  'flex space-x-8 h-full font-primary text-base',
                  theme === 'light' ? 'text-dark' : 'text-light',
                )}
              >
                {children}
              </div>
            )}
          </div>
        </div>
      </Contained>
    </nav>
  );
}

interface HeaderLinkProps {
  name: string;
  label: string;
  href?: string;
  display?: boolean;
  onClick?: () => void;
}

const HeaderLink = (props: HeaderLinkProps) => {
  const { label, href, display = true, onClick = () => null } = props;

  const HeaderLinkInner = () => (
    <div
      onClick={onClick}
      className="flex items-center duration-300 opacity-75 hover:opacity-100 cursor-pointer leading-none"
    >
      {label}
    </div>
  );

  if (!display) {
    return null;
  }

  return href ? (
    <Link href={href}>
      <a>
        <HeaderLinkInner />
      </a>
    </Link>
  ) : (
    <HeaderLinkInner />
  );
};

interface HeaderItemProps {
  children: ReactNode;
  display?: boolean;

  /**
   * Include if you'd like to render only on Desktop
   */
  desktop?: boolean;

  /**
   * Include if you'd like to render only on Mobile
   */
  mobile?: boolean;
}

const HeaderItem = (props: HeaderItemProps) => {
  const { display = true, desktop = false, mobile = false, children } = props;

  const { isDesktop } = useScreenSize();

  if (!display) {
    return null;
  }

  // prettier-ignore
  const shouldRender =
    (!desktop && !mobile) ||
    (isDesktop && desktop) ||
    (!isDesktop && mobile);

  return shouldRender ? <div className="h-full">{children}</div> : null;
};

Header.Link = HeaderLink;
Header.Item = HeaderItem;

export default Header;
