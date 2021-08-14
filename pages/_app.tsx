import AmbianceProvider from 'contexts/ambiance';
import { LoaderProvider } from 'contexts/loader';
import 'firebase/firestore'; // <- needed if using firestore
import { ScreenProvider } from 'hooks/useScreenSize';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import Layout from '../components/layout';
import { METADATA } from '../constants';
import { AuthProvider } from '../contexts/auth';
import '../styles/style.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AmbianceProvider>
        <LoaderProvider>
          <ScreenProvider>
            <Head>
              <title>{METADATA.TITLE_SUFFIX}</title>
            </Head>

            <DefaultSeo
              openGraph={{
                type: 'website',
                locale: 'en_GB',
                url: 'https://tastiest.io/',
                site_name: 'Tastiest',
              }}
              twitter={{
                handle: '@tastiestio',
                site: 'tastiest.io',
                cardType: 'summary_large_image',
              }}
            />

            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ScreenProvider>
        </LoaderProvider>
      </AmbianceProvider>
    </AuthProvider>
  );
}

export default App;
