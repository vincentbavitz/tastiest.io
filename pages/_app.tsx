import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'; // <- needed if using firestore
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { useLocation } from 'react-use';
import { createStore } from 'redux';
import { createFirestoreInstance } from 'redux-firestore';
import '../assets/style.scss';
import { CuisineBar } from '../components/cuisine/CuisineBar';
import { Footer } from '../components/Footer';
import { Header } from '../components/header/Header';
import { SearchOverlay } from '../components/search/SearchOverlay';
import { FIREBASE, METADATA } from '../constants';
import { AuthProvider } from '../contexts/auth';
import ScreenProvider from '../contexts/screen';
import { collapseSearchOverlay } from '../state/navigation';
import { rootReducer } from '../state/reducers';

if (!firebase.apps.length) {
  // Initialize firebase instance
  firebase.initializeApp(FIREBASE.CLIENT_CONFIG);

  // Initialize other services on firebase instance
  firebase.firestore();
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
}

const store = createStore(rootReducer);

const rrfProps = {
  firebase,
  config: FIREBASE.RRF_CONFIG,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

function App({ Component, pageProps }: AppProps) {
  // Close search overlay on page changed
  const location = useLocation();
  useEffect(() => {
    store.dispatch(collapseSearchOverlay());
  }, [location.pathname, location.search]);

  return (
    <StoreProvider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthProvider>
          <ScreenProvider>
            <Head>
              <title>{METADATA.TITLE_SUFFIX}</title>
            </Head>

            <div
              style={{ height: '100vh' }}
              className="flex flex-col justify-between"
            >
              <div className="relative flex-grow">
                <SearchOverlay />

                <Header />
                <CuisineBar />

                <div className="flex-grow">
                  <Component {...pageProps} />
                </div>
              </div>

              <div>
                <Footer />
              </div>
            </div>
          </ScreenProvider>
        </AuthProvider>
      </ReactReduxFirebaseProvider>
    </StoreProvider>
  );
}

export default App;
