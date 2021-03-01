import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import nookies from 'nookies';
import React from 'react';
import firebaseAdmin from '../services/firebaseAdmin';

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const cookies = nookies.get(ctx);
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);

    // the user is authenticated!
    const { uid, email } = token;

    // Get user's settings

    return {
      props: { token },
    };
  } catch (err) {
    // either the `token` cookie didn't exist
    // or token verification failed
    // either way: redirect to the login
    ctx.res.writeHead(302, { Location: '/?login=1' });
    ctx.res.end();
    // `as never` prevents inference issues
    // with InferGetServerSidePropsType.
    // The props returned here don't matter because we've
    // already redirected the user.
    return { props: { token: 'sdfdsf' } as never };
  }
};

const Settings = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) => <div>{props.token} sdfsfsdf</div>;

export default Settings;
