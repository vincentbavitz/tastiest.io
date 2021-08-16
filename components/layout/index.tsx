import clsx from 'clsx';
import ContentLoader from 'components/loaders/ContentLoader';
import PageLoader from 'components/loaders/PageLoader';
import { usePageLoader } from 'hooks/usePageLoader';
import React, { ReactNode } from 'react';
import { CuisineBar } from '../cuisine/CuisineBar';
import { Footer } from '../Footer';
import { Header } from '../header/Header';
import { AuthModal } from '../modals/auth/AuthModal';
import { AcceptTrackingPopup } from '../popups/AcceptTrackingPopup';
import { SearchOverlay } from '../search/SearchOverlay';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  const { isRouteLoading } = usePageLoader();

  return (
    <>
      {/* Modals (inside portal) */}
      <div id="modal-root" className="absolute">
        <AuthModal />
      </div>

      <div
        style={{ minHeight: '100vh' }}
        className={clsx(
          'flex flex-col justify-between duration-300 opacity-0',
          !isRouteLoading && 'opacity-100',
        )}
      >
        <div className="relative flex flex-col flex-grow">
          <Header />
          <CuisineBar />

          <ContentLoader>
            {/* If you'd like an element to stick to the footer in your page, simply wrap the */}
            {/* top <div> and the button <div> in <></> and they'll be split */}
            <div className="relative flex flex-col justify-between flex-grow">
              {children}
            </div>
            <SearchOverlay />
          </ContentLoader>
        </div>

        <div>
          <Footer />
        </div>
      </div>

      <AcceptTrackingPopup />

      {/* Page Loader on initial load */}
      <PageLoader />
    </>
  );
}
