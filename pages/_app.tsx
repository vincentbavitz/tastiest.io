import firebase from 'firebase';
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
import initFirebase from '../utils/auth/initFirebase';
import withAuthUser from '../utils/pageWrappers/withAuthUser';
import withAuthUserInfo from '../utils/pageWrappers/withAuthUserInfo';

initFirebase();
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

App.getInitialProps = async function () {
  const getEnvironment = firebase.functions().httpsCallable('getEnvironment');
  const result = await getEnvironment({});
  return {
    environment: result.data.environment,
  };
};

export default withAuthUser(withAuthUserInfo(App));
