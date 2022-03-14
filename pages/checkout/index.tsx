import { dlog, Horus, postFetch } from '@tastiest-io/tastiest-utils';
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

  // prettier-ignore
  const destination = '/checkout/authorize' + '?' +
      `heads=${heads}` + '&' +
      `productId=${productId}` + '&' +
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

  // CORRECT ME
  // Create a new order.
  const { data } = await postFetch(
    'https://tastiest.io/api/payments/createNewOrder',
    {
      userId,
      dealId: String(context.query.experienceId),
      heads: Number(context.query.heads),
      fromSlug: 'a-taste-of-numa-vegetarian',
      bookedForTimestamp: Number(context.query.bookedForTimestamp),
    },
  );

  await horus.post('/orders/new', {
    productId: '3AHThFL0lfX3z8mjRgnp6M',
    heads: 5,
    userId: 'uEmkrFSIDoZmBadkIKP7upMMjUo2',
    bookedForTimestamp: 1644453648600,
    fromSlug: 'any-2-items-from-the-numa-menu-with-a-glass-of-wine-or-cocktail',
  });

  // Cool - a legit checkout.
  // CORRECT ME
  return {
    redirect: {
      destination: `/checkout/${data.token}`,
      permanent: false,
    },
  };
};

export default function Checkout() {
  return <div>hi</div>;
}
