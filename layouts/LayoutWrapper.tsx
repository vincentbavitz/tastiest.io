import clsx from 'clsx';
import { Footer } from 'components/Footer';
import { Header, HeaderProps } from 'components/header/Header';
import PageLoader from 'components/loaders/PageLoader';
import { AuthModal } from 'components/modals/auth/AuthModal';
import { AcceptTrackingPopup } from 'components/popups/AcceptTrackingPopup';
import { usePageLoader } from 'hooks/usePageLoader';
import { useScreenSize } from 'hooks/useScreenSize';
import React from 'react';
import { UI } from '../constants';
import { LayoutProps } from './LayoutHandler';

interface LayoutWrapperProps extends LayoutProps {
  children: any;
  headerProps?: HeaderProps;
}

export default function LayoutWrapper({
  router,
  pageProps,
  children,
  headerProps,
}: LayoutWrapperProps) {
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
          <div style={{ zIndex: UI.Z_INDEX_HEADER }}>
            <Header {...headerProps} />
          </div>

          <div className="relative">{children}</div>
        </div>

        <div>
          <Footer />
        </div>
      </div>

      <AcceptTrackingPopup />
    </>
  );
}
