import { GetServerSideProps, NextPage } from 'next';
import React from 'react';

const offerRedirects = {
  ['2K6OPwu8MxTzN4pqyRK6FC']:
    'https://offers.tastiest.io/products/all-you-can-eat-burgers-and-wings-in-chalk-farm',
  ['v5WWg3Sr573AleBLH9LmH']:
    'https://offers.tastiest.io/products/19-scintillating-meats-all-you-can-eat-1',
  ['1jfZHInkintF44aehS5HZ4']:
    'https://offers.tastiest.io/products/birthday-offer',
  ['46VXx97nHDkRYyWRNdyybz']:
    'https://offers.tastiest.io/products/afternoon-tea-and-bottomless-prosecco',
  ['1H2ZQPjkOsqtnjBNrpWypM']:
    'http://tastiestio.myshopify.com/products/all-you-can-eat-caribbean',
  ['6ecz26qo6AnzZlC6EUREkW']:
    'http://tastiestio.myshopify.com/products/date-night-with-the-best-jerk-chicken-in-south-east-london',
  ['60fOUc99NMmt2klYJH8pkt']:
    'http://tastiestio.myshopify.com/products/birthday-offer-with-the-best-jerk-chicken-in-south-east-london',
};

/** Redirection takes two possible GET parameters
 * 1. ?offer=<offerId>
 * 2. ?restaurant=<restaurantURIName>
 */
export const getServerSideProps: GetServerSideProps = async context => {
  // No redirection given -- return to home.
  if (!context.query?.offer?.length && !context.query?.restaurant?.length) {
    return {
      props: {},
      redirect: {
        destination: '/',
      },
    };
  }

  const requestUTMs = {
    utm_source: context.query.utm_source ?? null,
    utm_medium: context.query.utm_medium ?? null,
    utm_campaign: context.query.utm_campaign ?? null,
    utm_term: context.query.utm_term ?? null,
    utm_content: context.query.utm_content ?? null,
  };

  const utmSuffix = Object.entries(requestUTMs)
    .filter(([_, value]) => Boolean(value))
    .map(([key, value]) => (value ? `${key}=${value}` : null));

  // Offer redirection
  const redirectDestination = offerRedirects[String(context.query.offer)];
  if (context.query.offer?.length && redirectDestination) {
    return {
      props: {},
      redirect: {
        destination: `${redirectDestination}?${utmSuffix}`,
      },
    };
  }

  return {
    props: {},
    redirect: {
      destination: 'https://offers.tastiest.io',
    },
  };
};

const Redirect: NextPage = () => {
  return <></>;
};

export default Redirect;
