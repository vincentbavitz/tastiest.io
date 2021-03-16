import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'; // <- needed if using firestore
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createStore } from 'redux';
import { createFirestoreInstance } from 'redux-firestore';
import Layout from '../components/layout';
import { FIREBASE, METADATA } from '../constants';
import { AuthProvider } from '../contexts/auth';
import ScreenProvider from '../contexts/screen';
import { setOnCheckoutPage } from '../state/checkout';
import { openSignInModal } from '../state/navigation';
import { rootReducer } from '../state/reducers';
import '../styles/style.scss';

if (!firebase.apps.length) {
  // Initialize firebase instance
  firebase.initializeApp(FIREBASE.CLIENT_CONFIG);

  // Initialize other services on firebase instance
  firebase.firestore();
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
}

const store = createStore(rootReducer);

const rrfProps = {
  firebase,
  config: FIREBASE.RRF_CONFIG,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const handleLocationChange = url => {
    // Open login modal from URL params
    if (METADATA.URL_SIGN_IN_REGEX.test(url)) {
      store.dispatch(openSignInModal());
    }

    // Update analytics page location
    window.analytics.page();

    console.log('_app ➡️ url:', url);
    console.log(
      '_app ➡️ METADATA.URL_CHECKOUT_PAGE_REGEX:',
      METADATA.URL_CHECKOUT_PAGE_REGEX,
    );
    console.log(
      '_app ➡️ METADATA.URL_CHECKOUT_PAGE_REGEX.test(url):',
      METADATA.URL_CHECKOUT_PAGE_REGEX.test(url),
    );

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

  return (
    <StoreProvider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthProvider>
          <ScreenProvider>
            <Head>
              <title>{METADATA.TITLE_SUFFIX}</title>
            </Head>

            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ScreenProvider>
        </AuthProvider>
      </ReactReduxFirebaseProvider>
    </StoreProvider>
  );
}

export default App;
