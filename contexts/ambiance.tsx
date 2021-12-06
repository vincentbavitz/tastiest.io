import Head from 'next/head';
import { NextRouter } from 'next/router';
import Script from 'next/script';
import React, { useEffect } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import {
  ReactReduxFirebaseProvider,
  ReactReduxFirebaseProviderProps,
} from 'react-redux-firebase';
import { createStore } from 'redux';
import { createFirestoreInstance } from 'redux-firestore';
import { setOnCheckoutPage } from 'state/checkout';
import { openAuthModal } from 'state/navigation';
import { rootReducer } from 'state/reducers';
import { METADATA } from '../constants';
import { firebaseClient } from '../utils/firebaseClient';
import TrackingProvider from './tracking';

// The AMBIANCE provider of Tastiest
// Includes location management, Firestore and Redux connectivity,
// as well as Tracking with Segment
export const AmbianceContext = React.createContext(undefined);

const store = createStore(rootReducer);
const rrfProps: ReactReduxFirebaseProviderProps = {
  firebase: firebaseClient,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance,
};

interface AmbianceProviderProps {
  router: NextRouter;
  children: any;
}

const AmbianceProvider = ({ router, children }: AmbianceProviderProps) => {
  const handleLocationChange = url => {
    // Open login modal from URL params
    if (METADATA.URL_SIGN_IN_REGEX.test(url)) {
      store.dispatch(openAuthModal());
    }

    // Update onCheckoutPage when user is checking out
    store.dispatch(
      setOnCheckoutPage(METADATA.URL_CHECKOUT_PAGE_REGEX.test(url)),
    );
  };

  useEffect(() => {
    handleLocationChange(router.route);

    router.events.on('routeChangeComplete', handleLocationChange);
    return () => router.events.off('routeChangeComplete', handleLocationChange);
  }, []);

  const renderTawkToSnippet = () =>
    router.pathname.includes('invite')
      ? ''
      : `
    <!--Start of Tawk.to Script-->
      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      (function(){
      var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
      s1.async=true;
      s1.src='https://embed.tawk.to/60cb997d65b7290ac63685ba/1f8dkv4qa';
      s1.charset='UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1,s0);
      })();
    <!--End of Tawk.to Script-->
  `;

  return (
    <>
      <Head>
        {/* Inject TawkTo */}
        <Script
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{ __html: renderTawkToSnippet() }}
        />
      </Head>

      <StoreProvider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <TrackingProvider>{children}</TrackingProvider>
        </ReactReduxFirebaseProvider>
      </StoreProvider>
    </>
  );
};

export default AmbianceProvider;
