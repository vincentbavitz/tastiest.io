import {
  reportInternalError,
  TastiestInternalErrorCode,
} from '@tastiest-io/tastiest-utils';
import { GetServerSideProps } from 'next';
import nookies from 'nookies';
import React, { useEffect } from 'react';
import { useFirebase } from 'react-redux-firebase';
import { useAuth } from '../../hooks/auth/useAuth';

interface Props {
  signInToken: string;
  resetPasswordRequest: any;
}

export const getServerSideProps: GetServerSideProps = async context => {
  // Get user ID from cookie.
  const cookieToken = nookies.get(context)?.token;
  // const userDataApi = new UserDataApi(firebaseAdmin);
  // const { userId } = await userDataApi.initFromCookieToken(cookieToken);
  const userId = null;

  // If user is signed in, redirect to home.
  if (userId) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  // Get reset password token from params
  const email = String(context.query.email) ?? null;
  const token = String(context.query.token) ?? null;
  if (!token || !email) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  try {
    // Get password reset requests
    // await userDataApi.initFromEmail(email);
    // const { passwordResetRequests: requests } = await userDataApi.getUserData();
    const requests = [];

    if (requests.length === 0) {
      await reportInternalError({
        code: TastiestInternalErrorCode.PASSWORD_RESET,
        message: 'Password reset request not found',
        timestamp: Date.now(),
        shouldAlert: false,
        originFile: '/pages/account/reset-password.tsx',
        severity: 'LOW',
        properties: { email, token },
      });

      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }

    // Most recent request
    const resetPasswordRequest = requests.sort(
      (a, b) => b.createdAt - a.createdAt,
    )[0];

    // Token correct?
    if (resetPasswordRequest.token !== token) {
      await reportInternalError({
        code: TastiestInternalErrorCode.PASSWORD_RESET,
        message: 'Password reset token invalid',
        timestamp: Date.now(),
        shouldAlert: false,
        originFile: '/pages/account/reset-password.tsx',
        severity: 'LOW',
        properties: { resetPasswordRequest, email, token },
      });
    }

    // Create a sign in token for them
    // const signInToken = await firebaseAdmin
    //   .auth()
    //   .createCustomToken(userDataApi.userId);
    const signInToken = '';

    const props: Props = { signInToken, resetPasswordRequest };
    return {
      props,
    };
  } catch (error) {
    await reportInternalError({
      code: TastiestInternalErrorCode.PASSWORD_RESET,
      message: 'Unknown password reset failure',
      timestamp: Date.now(),
      shouldAlert: false,
      originFile: '/pages/account/reset-password.tsx',
      severity: 'CRITICAL',
      properties: { email, token },
      raw: String(error),
    });
  }

  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
};

function ResetPassword(props: Props) {
  const { signInToken, resetPasswordRequest } = props;
  const { user, userData } = useAuth();

  const firebase = useFirebase();

  // Don't sign in until their pw is changed.
  useEffect(() => {
    //   firebase.auth().pass
  });

  return <div>{resetPasswordRequest.token}</div>;
}

export default ResetPassword;
