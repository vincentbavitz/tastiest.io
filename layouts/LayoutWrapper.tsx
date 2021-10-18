import clsx from 'clsx';
import { Footer } from 'components/Footer';
import { Header } from 'components/header/Header';
import ContentLoader from 'components/loaders/ContentLoader';
import PageLoader from 'components/loaders/PageLoader';
import { AuthModal } from 'components/modals/auth/AuthModal';
import { AcceptTrackingPopup } from 'components/popups/AcceptTrackingPopup';
import { SearchOverlay } from 'components/search/SearchOverlay';
import { usePageLoader } from 'hooks/usePageLoader';
import { useScreenSize } from 'hooks/useScreenSize';
import { NextComponentType, NextPageContext } from 'next';
import { Router } from 'next/router';
import React from 'react';
import { UI } from '../constants';

export interface LayoutProps {
  pageProps: any;
  router: Router;
  children: NextComponentType<NextPageContext>;
}

export default function LayoutWrapper({
  router,
  pageProps,
  children: Component,
}: LayoutProps) {
  const { isInitialLoading } = usePageLoader();
  const { isDesktop } = useScreenSize();

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
            <div className="relative flex flex-col justify-between flex-grow bg-light text-dark font-secondary">
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
