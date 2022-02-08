import {
  dlog,
  Horus,
  reportInternalError,
  TastiestInternalErrorCode,
} from '@tastiest-io/tastiest-utils';
import { GetServerSidePropsContext } from 'next';
import nookies from 'nookies';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';

/**
 * This page does nothing except create a new order and redirect to /checkout/[token].
 * It renders nothing.
 */
export const getServerSideProps = async (
  context: GetServerSidePropsContext<ParsedUrlQuery>,
) => {
  const cookieToken = nookies.get(context)?.token;
  const horus = new Horus(cookieToken);

  try {
    dlog('index ➡️ cookieToken:', cookieToken);

    const { data: user } = await horus.get('/users/me');

    if (!user) {
      return {
        redirect: {
          destination: '/checkout/authorize',
          permanent: false,
        },
      };
    }

    // Ok cool -- user exists and is valid.
    // Now let's make a new order and redirect to /checkout/[token]
    const heads = Number(context.query.heads ?? 0);
    const experienceId = context.query.experienceId;
    const bookedForTimestamp = Number(context.query.bookedForTimestamp ?? 0);
    const userAgent = context.query.userAgent;

    dlog('index ➡️ heads:', heads);
    dlog('index ➡️ experienceId:', experienceId);
    dlog('index ➡️ bookedForTimestamp:', bookedForTimestamp);
    dlog('index ➡️ context.query:', context.query);

    // Horus will tell us whether or not the order was valid.
    const { data: order, error } = await horus.post('/orders/new', {
      experienceId,
      userId: user.id,
      heads,
      userAgent,
      bookedForTimestamp,
      isTest: process.env.NODE_ENV !== 'production',
    });

    dlog('index ➡️ order:', order);
    dlog('index ➡️ erorr:', error);

    // Serious checkout error. Report internal error.
    if (error) {
      await reportInternalError({
        code: TastiestInternalErrorCode.PAGE_PREFETCH_ERROR,
        message:
          'Checkout creation of order from Horus.post failed in getServerSideProps.',
        timestamp: Date.now(),
        shouldAlert: false,
        originFile: '/pages/checkout/index.tsx',
        severity: 'HIGH',
        properties: { error },
        raw: error,
      });

      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }

    return {
      redirect: {
        destination: `/checkout/${order.token}`,
        permanent: false,
      },
    };

    // dlog('index ➡️ user:', user);
  } catch (error) {
    dlog('index ➡️ error:', error);
  }

  return { props: {} };

  //   const token = String(context.query.token);

  //   // If no order exists in URI, redirect to home.
  //   if (!token) {
  //     dlog('no order token');

  //     return {
  //       redirect: {
  //         destination: '/',
  //         permanent: false,
  //       },
  //     };
  //   }
};

export default function Checkout() {
  return <div>hi</div>;
}
