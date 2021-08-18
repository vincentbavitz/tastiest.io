import {
  IPasswordResetRequest,
  reportInternalError,
  TastiestInternalErrorCode,
  UserData,
  UserDataApi,
} from '@tastiest-io/tastiest-utils';
import { GetServerSideProps } from 'next';
import nookies from 'nookies';
import React from 'react';
import { firebaseAdmin } from 'utils/firebaseAdmin';
import { useAuth } from '../../hooks/auth/useAuth';
import { useUserData } from '../../hooks/useUserData';

export const getServerSideProps: GetServerSideProps = async context => {
  // Get user ID from cookie.
  const cookieToken = nookies.get(context)?.token;
  const userDataApi = new UserDataApi(firebaseAdmin);
  const { userId } = await userDataApi.initFromCookieToken(cookieToken);

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
    // Init now that we have their email
    await userDataApi.initFromEmail(email);

    // Get password reset request
    const requests = await userDataApi.getUserData(
      UserData.PASSWORD_RESET_REQUESTS,
    );

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

    return {
      props: { resetPasswordRequest },
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

interface Props {
  resetPasswordRequest: IPasswordResetRequest;
}

function ResetPassword(props: Props) {
  const { resetPasswordRequest } = props;

  const { user } = useAuth();
  const { userData = {} } = useUserData(user);

  return <div>{resetPasswordRequest.createdAt}</div>;
}

export default ResetPassword;
