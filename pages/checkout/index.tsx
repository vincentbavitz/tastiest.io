import { HorusOrder } from '@tastiest-io/tastiest-horus';
import { dlog, Horus } from '@tastiest-io/tastiest-utils';
import { Layouts } from 'layouts/LayoutHandler';
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

  const { data: user } = await horus.get('/users/me');

  const heads = Number(context.query.heads);
  const productId = String(context.query.productId);
  const bookedForTimestamp = Number(context.query.bookedForTimestamp);
  const userAgent = String(context.query.userAgent);

  console.log('index ➡️ user:', user);

  // prettier-ignore
  const destination = '/checkout/authorize' + '?' +
      `heads=${heads}` + '&' +
      `product_id=${productId}` + '&' +
      `bookedForTimestamp=${bookedForTimestamp}` + '&' +
      `userAgent=${userAgent}`

  if (!user) {
    dlog('index ➡️ no user');
    return {
      redirect: {
        destination,
        permanent: false,
      },
    };
  }

  // Create a new order.
  const response = await horus.post<any, HorusOrder>('/orders/new', {
    product_id: productId,
    heads,
    booked_for_timestamp: bookedForTimestamp,
    user_agent: userAgent,
    is_test: process.env.NODE_ENV !== 'production',
    // promo_code
  });

  console.log('index ➡️ response:', response);

  const { data: order } = response;

  // Cool - a legit checkout.
  return {
    redirect: {
      destination: `/checkout/${order.token}`,
      permanent: false,
    },
  };
};

function Checkout() {
  return <div></div>;
}

Checkout.layout = Layouts.BLANK;
export default Checkout;
