import {
  dlog,
  Horus,
  postFetch,
  UserDataApi,
} from '@tastiest-io/tastiest-utils';
import { GetServerSidePropsContext } from 'next';
import nookies from 'nookies';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { firebaseAdmin } from 'utils/firebaseAdmin';

/**
 * This page does nothing except create a new order and redirect to /checkout/[token].
 * It renders nothing.
 */
export const getServerSideProps = async (
  context: GetServerSidePropsContext<ParsedUrlQuery>,
) => {
  const cookieToken = nookies.get(context)?.token;
  const horus = new Horus(cookieToken);

  // CORRECT ME
  // const { data: user } = await horus.get('/users/me');
  const userDataApi = new UserDataApi(firebaseAdmin);
  const { userId } = await userDataApi.initFromCookieToken(cookieToken);

  dlog('index ➡️ cookieToken:', cookieToken);
  dlog('index ➡️ user:', userId);

  // prettier-ignore
  const destination = '/checkout/authorize' + '?' +
      `heads=${context.query.heads}` + '&' +
      `experienceId=${context.query.experienceId}` + '&' +
      `bookedForTimestamp=${context.query.bookedForTimestamp}` + '&' +
      `userAgent=${context.query.userAgent}`

  if (!userId) {
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
