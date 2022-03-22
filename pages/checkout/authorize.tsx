import {
  AuthTabsProvider,
  CheckoutAuthTabs,
} from 'components/checkout/CheckoutAuthTabs';
import { CheckoutCard } from 'components/checkout/CheckoutCard';
import LayoutCheckout from 'layouts/LayoutCheckout';
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
    !context.query.productId ||
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
  const productId = String(context.query.productId);
  const bookedForTimestamp = Number(context.query.bookedForTimestamp ?? 0);
  const userAgent = context.query.userAgent;

  const checkoutInitLink = `/checkout?heads=${heads}&productId=${productId}&bookedForTimestamp=${bookedForTimestamp}&userAgent=${userAgent}`;

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
    props: {
      heads,
      bookedForTimestamp,
    },
  };
};

function CheckoutAuthorize(
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  // Product comes from LayoutCheckout
  // NOTE FIX ME -> In future make a Layout context. Much cleaner.
  const { heads, product } = props as any;

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

      <LayoutCheckout.Left>
        <AuthTabsProvider>
          <CheckoutAuthTabs />
        </AuthTabsProvider>
      </LayoutCheckout.Left>

      <LayoutCheckout.Right>
        <CheckoutCard experienceImage={product?.image}>
          <div className="text-base font-medium">
            <div className="flex justify-between">
              <span>{product?.restaurant.name}</span>
            </div>

            <p className="text-sm mt-2 font-normal leading-tight text-gray-700">
              {product?.name}
            </p>

            <p className="text-sm font-normal leading-tight">
              <p>
                Booking for {heads} {heads === 1 ? 'person' : 'people'}
              </p>
            </p>
          </div>
        </CheckoutCard>
      </LayoutCheckout.Right>
    </>
  );
}

CheckoutAuthorize.layout = Layouts.CHECKOUT;
export default CheckoutAuthorize;
