import {
  dlog,
  FunctionsResponse,
  UserDataApi,
  UserDataKey,
  UserRole,
} from '@tastiest-io/tastiest-utils';
import { AuthError, AuthErrorCode, AuthErrorMessageMap } from 'contexts/auth';
import { NextApiRequest, NextApiResponse } from 'next';
import { firebaseAdmin } from 'utils/firebaseAdmin';

const Analytics = require('analytics-node');

export interface RegisterParams {
  email: string;
  password: string;
  firstName: string | null;
  userAgent: string | null;
  anonymousId: string | null;
}

export type RegisterReturn = {
  user: firebaseAdmin.auth.UserRecord;
  token: string;
};

export default async function register(
  request: NextApiRequest,
  response: NextApiResponse<FunctionsResponse<RegisterReturn, AuthError>>,
) {
  // Only allow POST
  if (request.method !== 'POST') {
    response.status(405).end();
  }

  const role = UserRole.EATER;
  const isTestAccount = process.env.NODE_ENV === 'development';

  // Doesn't matter if JSON encoded or not
  let body;
  try {
    body = JSON.parse(request.body);
  } catch {
    body = request.body;
  }

  const { email, password, firstName, userAgent, anonymousId } = body;
  const analytics = new Analytics(process.env.NEXT_PUBLIC_ANALYTICS_WRITE_KEY);

  if (!email?.length || !password?.length) {
    response.json({
      data: { user: null, token: null },
      error: AuthErrorMessageMap[AuthErrorCode.INVALID_CREDENTIAL],
      success: false,
    });
    return;
  }

  let userRecord: firebaseAdmin.auth.UserRecord;
  try {
    userRecord = await firebaseAdmin.auth().createUser({
      email,
      emailVerified: false,
      displayName: firstName,
      password,
      disabled: false,
    });
  } catch (error) {
    // Firebase create-user error
    dlog('register ➡️ error:', error);
    response.json({
      data: { user: null, token: null },
      error:
        AuthErrorMessageMap[(error as AuthError).code] ??
        AuthErrorMessageMap[AuthErrorCode.INTERNAL_ERROR],
      success: false,
    });
    return;
  }

  if (!userRecord) {
    response.json({
      data: { user: null, token: null },
      error: AuthErrorMessageMap[AuthErrorCode.USER_NOT_FOUND],
      success: false,
    });
    return;
  }

  try {
    const userDataApi = new UserDataApi(firebaseAdmin, userRecord.uid);
    const setDetails = async () => {
      // Set custom user claim (user role) to `eater`
      // (as apposed to `restaurant`, `admin`).
      // This is used in authentication etc.
      await firebaseAdmin.auth().setCustomUserClaims(userRecord?.uid, {
        [UserRole.EATER]: true,
        isTestAccount,
      });

      // Set firstName if it was given
      return userDataApi.setUserData(UserDataKey.DETAILS, {
        firstName: firstName ?? null,
        email,
      });
    };

    const trackPromise = async () => {
      // Track sign up.
      await analytics.identify({
        anonymousId,
        traits: {
          userId: userRecord.uid,
          email: userRecord.email,
          firstName,
        },
        context: { userAgent },
      });

      // No need to await tracking after we've identified them
      return analytics.track({
        userId: userRecord?.uid,
        event: 'User Signed Up',
        properties: {
          role,
          name: firstName,
          email: userRecord.email,
        },
      });
    };

    // Split into separate sub-functions to run in parallel
    // avoiding awaits.
    await Promise.all([trackPromise(), setDetails()]);

    // Custom token used for signing in.
    // We can then sign in with signInWithCustomToken in useAuth
    // Ref. https://blog.usejournal.com/firesbase-authentication-through-node-js-using-rest-api-and-async-await-f3cf8875ed91
    const token = await firebaseAdmin.auth().createCustomToken(userRecord.uid);

    response
      .status(202)
      .json({ data: { user: userRecord, token }, error: null, success: true });
  } catch (error) {
    dlog('register ➡️ error:', error);
    response.json({
      data: { user: null, token: null },
      error: AuthErrorMessageMap[AuthErrorCode.INTERNAL_ERROR],
      success: false,
    });
    return;
  }
}
