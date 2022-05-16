import clsx from 'clsx';
import { Footer } from 'components/Footer';
import Header, { HeaderProps } from 'components/header/Header';
import { HeaderAvatar } from 'components/header/HeaderAvatar';
import PageLoader from 'components/loaders/PageLoader';
import { AuthModal } from 'components/modals/auth/AuthModal';
import { AcceptTrackingPopup } from 'components/popups/AcceptTrackingPopup';
import { useAuth } from 'hooks/auth/useAuth';
import { usePageLoader } from 'hooks/usePageLoader';
import { useScreenSize } from 'hooks/useScreenSize';
import React from 'react';
import { useDispatch } from 'react-redux';
import Scroll from 'react-scroll';
import { openAuthModal } from 'state/navigation';
import { LayoutProps } from './LayoutHandler';

const scroller = Scroll.scroller;

interface LayoutWrapperProps extends LayoutProps {
  children: any;
  headerProps?: HeaderProps;
  withFooter?: boolean;
}

export default function LayoutWrapper({
  router,
  pageProps,
  children,
  headerProps,
  withFooter = true,
}: LayoutWrapperProps) {
  const { isInitialLoading } = usePageLoader();
  const { isDesktop } = useScreenSize();
  const { isSignedIn } = useAuth();

  const dispatch = useDispatch();

  const scrollTo = (to: string) => {
    scroller.scrollTo(to, {
      duration: 250,
      smooth: true,
      offset: -50,
    });
  };

  return (
    <>
      {/* Page Loader on initial load */}
      <PageLoader />

      {/* Modals (inside portal) */}
      <div id="modal-root" className="absolute">
        <AuthModal />
      </div>

      <div
        style={{ minHeight: '100vh' }}
        className={clsx(
          'flex flex-col justify-between duration-300 opacity-0',
          !isInitialLoading && 'opacity-100',
        )}
      >
        <div className="relative flex flex-col flex-grow">
          <Header {...headerProps}>
            <Header.Link
              name="restaurants"
              label="Restaurants"
              href="/#restaurants"
              onClick={() => scrollTo('featured-restaurants-section')}
            />

            <Header.Link
              name="experiences"
              label="Experiences"
              href="/#experiences"
              onClick={() => scrollTo('featured-experiences-section')}
            />

            <Header.Link
              name="login"
              label="Login"
              display={!isSignedIn}
              onClick={() => dispatch(openAuthModal())}
            />

            <Header.Item desktop display={isSignedIn}>
              <HeaderAvatar />
            </Header.Item>
          </Header>

          <div className="relative font-secondary">{children}</div>
        </div>

        {withFooter ? (
          <div>
            <Footer />
          </div>
        ) : null}
      </div>

      <AcceptTrackingPopup />
    </>
  );
}
