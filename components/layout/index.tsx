import { LoadingOutlined } from '@ant-design/icons';
import { dlog } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { usePageLoader } from 'hooks/usePageLoader';
import { useRouter } from 'next/router';
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
  // We sometimes render elements which stick to the footer,
  // like <SuggestRestaurant />
  const { shouldRenderLoader } = usePageLoader({});

  const router = useRouter();
  dlog('index ➡️ router.pathname:', router.pathname);

  return (
    <>
      {/* Page Loader (inside portal) */}
      {/* <div id="loader">
        <PageLoader />
      </div> */}

      {/* Modals (inside portal) */}
      <div id="modal-root" className="absolute">
        <AuthModal />
      </div>

      <div
        style={{ minHeight: '100vh' }}
        className="flex flex-col justify-between"
      >
        <div className="relative flex flex-col flex-grow">
          <Header />
          <CuisineBar />

          {/* Content Loader */}
          {shouldRenderLoader && (
            <div
              style={{ minHeight: '500px' }}
              className="relative flex items-center justify-center flex-grow"
            >
              <LoadingOutlined className="-mt-20 text-6xl fill-current text-primary" />
            </div>
          )}

          {/* Hide content when page is loading */}
          <div className={clsx(shouldRenderLoader && 'hidden')}>
            {/* If you'd like an element to stick to the footer in your page, simply wrap the */}
            {/* top <div> and the button <div> in <></> and they'll be split */}
            <div className="relative flex flex-col justify-between flex-grow">
              {children}
            </div>
            <SearchOverlay />
          </div>
        </div>

        {/* Hide content when page is loading */}
        {/* <div className={clsx(isPageLoading && 'hidden')}> */}
        <div>
          <Footer />
        </div>
        {/* </div> */}
      </div>

      <AcceptTrackingPopup />
    </>
  );
}
