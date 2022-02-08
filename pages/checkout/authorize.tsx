import {
  AuthTabsProvider,
  CheckoutAuthTabs,
} from 'components/checkout/CheckoutAuthTabs';
import { Layouts } from 'layouts/LayoutHandler';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import React from 'react';

function CheckoutAuthorize() {
  return (
    <>
      <Head>
        <title>Checkout - Tastiest</title>
      </Head>
      <NextSeo
        title="Tastiest - Checkout"
        description="Tastiest Payment & Checkout"
        openGraph={{
          title: 'Tastiest - Checkout',
          description: 'Tastiest - Payment & Checkout',
          images: [
            {
              url: 'https://tastiest.io/assets/seo/page/checkout-800x600.png',
              width: 800,
              height: 600,
              alt: 'Tastiest Checkout Hero',
            },
            {
              url: 'https://tastiest.io//assets/seo/page/checkout-400x300.png',
              width: 400,
              height: 300,
              alt: 'Tastiest Checkout Hero',
            },
          ],
        }}
      />

      <div className="bg-red-300">
        <AuthTabsProvider>
          <CheckoutAuthTabs />
        </AuthTabsProvider>
      </div>
    </>
  );
}

CheckoutAuthorize.layout = Layouts.CHECKOUT;
export default CheckoutAuthorize;
