import AmbianceProvider from 'contexts/ambiance';
import 'firebase/firestore'; // <- needed if using firestore
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import Layout from '../components/layout';
import { METADATA } from '../constants';
import { AuthProvider } from '../contexts/auth';
import ScreenProvider from '../contexts/screen';
import '../styles/style.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AmbianceProvider>
        <ScreenProvider>
          <Head>
            <title>{METADATA.TITLE_SUFFIX}</title>
          </Head>

          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ScreenProvider>
      </AmbianceProvider>
    </AuthProvider>
  );
}

export default App;
