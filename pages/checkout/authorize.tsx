import {
  AuthTabsProvider,
  CheckoutAuthTabs,
} from 'components/checkout/CheckoutAuthTabs';
import { Layouts } from 'layouts/LayoutHandler';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import nookies from 'nookies';
import React from 'react';

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const cookieToken = nookies.get(context)?.token;

  // Somehow their query paramters got messed up.
  if (
    !context.query.heads ||
    !context.query.experienceId ||
    !context.query.bookedForTimestamp
  ) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  // Now let's make a new order and redirect to /checkout/[token]
  const heads = Number(context.query.heads ?? 0);
  const experienceId = context.query.experienceId;
  const bookedForTimestamp = Number(context.query.bookedForTimestamp ?? 0);
  const userAgent = context.query.userAgent;

  const checkoutInitLink = `/checkout?heads=${heads}&experienceId=${experienceId}&bookedForTimestamp=${bookedForTimestamp}&userAgent=${userAgent}`;

  // They're already logged in, take them to the checkout.
  if (cookieToken) {
    return {
      redirect: {
        destination: checkoutInitLink,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

function CheckoutAuthorize(
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
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

      <div className="">
        <AuthTabsProvider>
          <CheckoutAuthTabs />
        </AuthTabsProvider>
      </div>
    </>
  );
}

CheckoutAuthorize.layout = Layouts.CHECKOUT;
export default CheckoutAuthorize;
