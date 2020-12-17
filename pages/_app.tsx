import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import '../assets/style.scss';
import { CuisineBar } from '../components/cuisine/CuisineBar';
import { Header } from '../components/header/Header';
import { SearchOverlay } from '../components/search/SearchOverlay';
import { METADATA } from '../constants';
import ScreenProvider from '../contexts/screen';
import { rootReducer } from '../state/reducers';

const store = createStore(rootReducer);

function App({ Component, pageProps }: AppProps) {
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
        </>
      </ScreenProvider>
    </Provider>
  );
}

export default App;
