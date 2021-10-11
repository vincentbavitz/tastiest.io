import AmbianceProvider from 'contexts/ambiance';
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

function App({ Component, pageProps, router }: AppProps) {
  return (
    <AuthProvider>
      <AmbianceProvider>
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
              site: '@tastiest.io',
              cardType: 'summary_large_image',
            }}
            facebook={{
              appId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID,
            }}
            robotsProps={{
              notranslate: true,
              noarchive: true,
              maxSnippet: -1,
              maxImagePreview: 'none',
              maxVideoPreview: -1,
            }}
          />

          <Layout router={router} pageProps={pageProps}>
            {Component}
          </Layout>
        </ScreenProvider>
      </AmbianceProvider>
    </AuthProvider>
  );
}

export default App;
