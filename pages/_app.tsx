import type { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { useLocation } from 'react-use';
import { createStore } from 'redux';
import '../assets/style.scss';
import { CuisineBar } from '../components/cuisine/CuisineBar';
import { Footer } from '../components/Footer';
import { Header } from '../components/header/Header';
import { SearchOverlay } from '../components/search/SearchOverlay';
import { METADATA } from '../constants';
import ScreenProvider from '../contexts/screen';
import { collapseSearchOverlay } from '../state/navigation';
import { rootReducer } from '../state/reducers';

const store = createStore(rootReducer);

function App({ Component, pageProps }: AppProps) {
  // Close search overlay on page changed
  const location = useLocation();
  useEffect(() => {
    store.dispatch(collapseSearchOverlay());
  }, [location.pathname, location.search]);

  return (
    <Provider store={store}>
      <ScreenProvider>
        <Head>
          <title>{METADATA.TITLE_SUFFIX}</title>
        </Head>

        <>
          <SearchOverlay />

          <Header />
          <CuisineBar />
          <Component {...pageProps} />

          <Footer />
        </>
      </ScreenProvider>
    </Provider>
  );
}

export default App;
