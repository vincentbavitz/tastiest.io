import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import '../assets/style.scss';
import { CuisineBar } from '../components/CuisineBar/CuisineBar';
import NavBar from '../components/NavBar';
import { METADATA } from '../constants';
import { rootReducer } from '../state/reducers';

const store = createStore(rootReducer);

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>{METADATA.TITLE_SUFFIX}</title>
      </Head>

      <>
        <NavBar />
        <CuisineBar />
        {/* <SearchOverlay /> */}
        <Component {...pageProps} />
      </>
    </Provider>
  );
}

export default App;
