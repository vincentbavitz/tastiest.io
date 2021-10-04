import clsx from 'clsx';
import ContentLoader from 'components/loaders/ContentLoader';
import PageLoader from 'components/loaders/PageLoader';
import { usePageLoader } from 'hooks/usePageLoader';
import { useScreenSize } from 'hooks/useScreenSize';
import { NextComponentType, NextPageContext } from 'next';
import { Router } from 'next/router';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IState } from 'state/reducers';
import { UI } from '../../constants';
import { Footer } from '../Footer';
import { Header } from '../header/Header';
import { AuthModal } from '../modals/auth/AuthModal';
import { AcceptTrackingPopup } from '../popups/AcceptTrackingPopup';
import { SearchOverlay } from '../search/SearchOverlay';

interface Props {
  pageProps: any;
  children: NextComponentType<NextPageContext>;
  router: Router;
}

export default function Layout({
  router,
  pageProps,
  children: Component,
}: Props) {
  const { isInitialLoading } = usePageLoader();
  const { isContentLoading } = useSelector((state: IState) => state.navigation);
  const { isDesktop } = useScreenSize();

  // Scroll to top on load
  useEffect(() => {
    if (isContentLoading && typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, [isContentLoading]);

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
          <Header />
          {/* <CuisineBar /> */}

          {/* Spacer */}
          <div
            style={{
              paddingTop: `${
                isDesktop
                  ? UI.HEADER_HEIGHT_DESKTOP_REM
                  : UI.HEADER_HEIGHT_MOBILE_REM
              }rem`,
            }}
          ></div>

          <ContentLoader router={router}>
            {/* If you'd like an element to stick to the footer in your page, simply wrap the */}
            {/* top <div> and the button <div> in <></> and they'll be split */}
            <div className="relative flex flex-col justify-between flex-grow font-secondary bg-tertiary">
              {/* All pages control when they are considered loaded */}
              <Component {...pageProps} />
            </div>
            <SearchOverlay />
          </ContentLoader>
        </div>

        <div>
          <Footer />
        </div>
      </div>

      <AcceptTrackingPopup />
    </>
  );
}
