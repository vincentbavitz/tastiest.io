import PageLoader from 'components/PageLoader';
import React, { ReactNode } from 'react';
import { CuisineBar } from '../cuisine/CuisineBar';
import { Footer } from '../Footer';
import { Header } from '../header/Header';
import { SignInModal } from '../modals/SignInModal';
import { AcceptTrackingPopup } from '../popups/AcceptTrackingPopup';
import { SearchOverlay } from '../search/SearchOverlay';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  // We sometimes render elements which stick to the footer,
  // like <SuggestDish />

  return (
    <>
      <PageLoader />
      <SignInModal />

      <div
        style={{ minHeight: '100vh' }}
        className="flex flex-col justify-between"
      >
        <div className="relative flex flex-col flex-grow">
          <SearchOverlay />
          <Header />
          <CuisineBar />

          {/* If you'd like an element to stick to the footer in your page, simply wrap the */}
          {/* top <div> and the button <div> in <></> and they'll be split */}
          <div className="relative flex flex-col justify-between flex-grow">
            {children}
          </div>
        </div>

        <div>
          <Footer />
        </div>
      </div>

      <AcceptTrackingPopup />
    </>
  );
}
