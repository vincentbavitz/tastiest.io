import * as AuthTypes from '@firebase/auth-types';
import { HorusUser } from '@tastiest-io/tastiest-horus';
import { dlog, Horus, useHorusSWR } from '@tastiest-io/tastiest-utils';
import nookies from 'nookies';
import React, { createContext, useEffect, useState } from 'react';
import { firebaseClient } from '../utils/firebaseClient';
import { ANONYMOUS_USER_ID, LocalStorageItem } from './tracking';

type SignInFn = (
  email: string,
  password: string,
) => Promise<{
  credential: AuthTypes.UserCredential | null;
  error: AuthError | null;
}>;

type RegisterFn = (
  email: string,
  password: string,
  firstName: string,
) => Promise<{ success: boolean; error: string | null }>;

type AuthContextShape = {
  user: firebaseClient.User | null;
  userData: HorusUser | null;
  isSignedIn: null | boolean;
  isSigningIn: boolean;
  token: string | null;
  register?: RegisterFn;
  signIn?: SignInFn;
};

// Example taken from  https://github1s.com/colinhacks/next-firebase-ssr/blob/HEAD/auth.tsx
export const AuthContext = createContext<AuthContextShape>({
  user: null,
  userData: null,
  token: null,
  isSignedIn: null,
  isSigningIn: false,
});

export function AuthProvider({ children }: any) {
  // Undefined while loading, null if not logged in
  const [user, setUser] = useState<firebaseClient.User | null | undefined>(
    undefined,
  );

  const [token, setToken] = useState<string | null>(null);
  const [isSigningIn, setIsSigningIn] = useState(false);

  // Null if the user information has not been loaded yet -- else boolean
  const isSignedIn = user === undefined ? null : Boolean(user?.uid);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).nookies = nookies;
    }

    return firebaseClient.auth().onIdTokenChanged(async user => {
      dlog(`Token changed!`);
      if (!user) {
        dlog(`No token found...`);

        nookies.destroy(null, 'token');
        nookies.set(null, 'token', '', { path: '/' });
        setUser(null);
        setToken(null);
        return;
      }

      const _token = await user.getIdToken();
      dlog(`Updating token...`, _token);

      nookies.destroy(null, 'token');
      nookies.set(null, 'token', _token, { path: '/' });
      setUser(user);
      setToken(_token);
    });
  }, []);

  // Force refresh the token every 10 minutes
  useEffect(() => {
    const handle = setInterval(async () => {
      dlog(`Refreshing token...`);
      const user = firebaseClient.auth().currentUser;
      if (user) await user.getIdToken(true);
    }, 10 * 60 * 1000);

    return () => clearInterval(handle);
  }, []);

  useEffect(() => {
    dlog('User', user);
  }, [user]);

  // Store user data in the provider.
  const { data: userData, mutate } = useHorusSWR<HorusUser>(
    token ? '/users/me' : null,
    { token },
    {
      refreshInterval: 30000,
    },
  );

  // Manually fetch user-data for the mutation on useHorusSWR.
  // This occurs when the user logs in or out.
  const fetchUserData = async (token: string) => {
    const horus = new Horus(token);
    const { data: _userData, error } = await horus.get<HorusUser>('/users/me');

    if (error) {
      return null;
    }

    return _userData as HorusUser;
  };

  // Mutate userData as soon as they sign in.
  useEffect(() => {
    if (!token) {
      return;
    }

    mutate(() => fetchUserData(token));
  }, [token]);

  dlog('auth ➡️ data:', userData);

  const register = async (
    email: string,
    password: string,
    firstName: string,
  ) => {
    if (isSignedIn) {
      return;
    }

    const horus = new Horus(null);
    const { data, error } = await horus.post('/auth/public/register', {
      email,
      password,
      firstName,
      userAgent: navigator?.userAgent ?? null,
      anonymousId:
        window?.analytics?.user?.()?.anonymousId() ?? ANONYMOUS_USER_ID,
    });

    if (error) {
      return { success: false, error };
    }

    dlog('auth ➡️ data:', data);

    // User has accepted cookies implicitly
    localStorage.setItem(LocalStorageItem.HAS_ACCEPTED_COOKIES, '1');

    // Sign user in.
    await signIn(email, password);
    setToken(data.token);

    return { success: true, error: null };
  };

  const signIn: SignInFn = async (email, password) => {
    if (!email?.length || !password?.length) {
      return {
        credential: null,
        error: AuthErrorMessageMap[AuthErrorCode.INVALID_ARGUMENT],
      };
    }

    const anonymousId = window.analytics?.user?.()?.anonymousId?.();

    setIsSigningIn(true);

    let credential: AuthTypes.UserCredential;
    try {
      credential = await window?.firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
    } catch (error) {
      setIsSigningIn(false);

      return {
        credential: null,
        error: AuthErrorMessageMap[(error as AuthError).code],
      };
    }

    if (credential) {
      setIsSigningIn(false);

      console.log('auth ➡️ credential:', credential);

      // User has accepted cookies by logging in
      localStorage.setItem(LocalStorageItem.HAS_ACCEPTED_COOKIES, '1');

      // Identify user with Segment
      window.analytics.identify(anonymousId, {
        userId: credential.user.uid,
        email: credential.user.email,
        context: {
          userAgent: navigator?.userAgent,
        },
      });

      // Track user sign in
      window.analytics.track('User Signed In', {
        userId: credential.user.uid,
        anonymousId: null,
        properties: credential.user,
      });

      return {
        credential: credential as AuthTypes.UserCredential,
        error: null,
      };
    }

    return {
      credential: null,
      error: AuthErrorMessageMap[AuthErrorCode.INTERNAL_ERROR],
    };
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        userData,
        token,
        isSignedIn,
        isSigningIn,
        register,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Firebase Auth Error codes
// Ref: https://firebase.google.com/docs/auth/admin/errors
export enum AuthErrorCode {
  CLAIMS_TOO_LARGE = 'auth/claims-too-large',
  EMAIL_ALREADY_EXISTS = 'auth/email-already-exists',
  ID_TOKEN_EXPIRED = 'auth/id-token-expired',
  ID_TOKEN_REVOKED = 'auth/id-token-revoked',
  INSUFFICIENT_PERMISSION = 'auth/invalid-permission',
  INVALID_ARGUMENT = 'auth/invalid-argument',
  INVALID_CLAIMS = 'auth/invalid-claims',
  INVALID_CREATION_TIME = 'auth/invalid-creation-time',
  INVALID_CREDENTIAL = 'auth/invalid-credential',
  INVALID_DISABLED_FIELD = 'auth/invalid-disabled-field',
  INVALID_DISPLAY_NAME = 'auth/invalid-display-name',
  INVALID_EMAIL = 'auth/invalid-email',
  INVALID_EMAIL_VERIFIED = 'auth/invalid-email-verified',
  INVALID_ID_TOKEN = 'auth/invalid-id-token',
  INVALID_PASSWORD = 'auth/invalid-password',
  INVALID_PHONE_NUMBER = 'auth/invalid-phone-number',
  INVALID_UID = 'auth/invalid-uid',
  MISSING_UID = 'auth/missing-uid',
  OPERATION_NOT_ALLOWED = 'auth/operation-not-allowed',
  UID_ALREADY_EXISTS = 'auth/uid-already-exists',
  USER_NOT_FOUND = 'auth/user-not-found',
  WRONG_PASSWORD = 'auth/wrong-password',
  TOO_MANY_REQUESTS = 'auth/too-many-requests',

  // Tastiest Custom Auth Error Codes
  INTERNAL_ERROR = 'auth/internal-error',
  PASSWORDS_DO_NOT_MATCH = 'auth/passwords-do-not-match', // when registering
}

export const userFacingUnknownError =
  'An unknown error occured; please try again';

export type AuthError = {
  code: AuthErrorCode;
  message: string;
  userFacingMessage?: string;
};

export const AuthErrorMessageMap = {
  [AuthErrorCode.CLAIMS_TOO_LARGE]: {
    code: AuthErrorCode.CLAIMS_TOO_LARGE,
    message: '',
    userFacingMessage: '',
  },
  [AuthErrorCode.EMAIL_ALREADY_EXISTS]: {
    code: AuthErrorCode.EMAIL_ALREADY_EXISTS,
    message: '',
    userFacingMessage: 'This email already exists',
  },
  [AuthErrorCode.ID_TOKEN_EXPIRED]: {
    code: AuthErrorCode.ID_TOKEN_EXPIRED,
    message: '',
    userFacingMessage: 'Login expired. Please try again.',
  },
  [AuthErrorCode.ID_TOKEN_REVOKED]: {
    code: AuthErrorCode.ID_TOKEN_REVOKED,
    message: '',
    userFacingMessage: userFacingUnknownError,
  },
  [AuthErrorCode.INSUFFICIENT_PERMISSION]: {
    code: AuthErrorCode.INSUFFICIENT_PERMISSION,
    message: '',
    userFacingMessage: userFacingUnknownError,
  },
  [AuthErrorCode.INTERNAL_ERROR]: {
    code: AuthErrorCode.INTERNAL_ERROR,
    message: '',
    userFacingMessage: userFacingUnknownError,
  },
  [AuthErrorCode.INVALID_ARGUMENT]: {
    code: AuthErrorCode.INVALID_ARGUMENT,
    message: '',
    userFacingMessage: userFacingUnknownError,
  },
  [AuthErrorCode.INVALID_CLAIMS]: {
    code: AuthErrorCode.INVALID_CLAIMS,
    message: '',
    userFacingMessage: userFacingUnknownError,
  },
  [AuthErrorCode.INVALID_CREATION_TIME]: {
    code: AuthErrorCode.INVALID_CREATION_TIME,
    message: '',
    userFacingMessage: userFacingUnknownError,
  },
  [AuthErrorCode.INVALID_CREDENTIAL]: {
    code: AuthErrorCode.INVALID_CREDENTIAL,
    message: '',
    userFacingMessage:
      'Login details incorrect. Please ensure you typedd in your details correctly.',
  },
  [AuthErrorCode.INVALID_DISABLED_FIELD]: {
    code: AuthErrorCode.INVALID_DISABLED_FIELD,
    message: '',
    userFacingMessage: userFacingUnknownError,
  },
  [AuthErrorCode.INVALID_DISPLAY_NAME]: {
    code: AuthErrorCode.INVALID_DISPLAY_NAME,
    message: '',
    userFacingMessage: "This display name isn't valid",
  },
  [AuthErrorCode.INVALID_EMAIL]: {
    code: AuthErrorCode.INVALID_EMAIL,
    message: '',
    userFacingMessage: 'Please ensure your Email is typed in correctly.',
  },
  [AuthErrorCode.INVALID_EMAIL_VERIFIED]: {
    code: AuthErrorCode.INVALID_EMAIL_VERIFIED,
    message: '',
    userFacingMessage: 'This email is not valid.',
  },
  [AuthErrorCode.INVALID_ID_TOKEN]: {
    code: AuthErrorCode.INVALID_ID_TOKEN,
    message: '',
    userFacingMessage: userFacingUnknownError,
  },
  [AuthErrorCode.INVALID_PASSWORD]: {
    code: AuthErrorCode.INVALID_PASSWORD,
    message: '',
    userFacingMessage: 'Please include at least 6 characters in your password.',
  },
  [AuthErrorCode.INVALID_PHONE_NUMBER]: {
    code: AuthErrorCode.INVALID_PHONE_NUMBER,
    message: '',
    userFacingMessage: 'Your phone number is not valid.',
  },
  [AuthErrorCode.INVALID_UID]: {
    code: AuthErrorCode.INVALID_UID,
    message: '',
    userFacingMessage: userFacingUnknownError,
  },
  [AuthErrorCode.MISSING_UID]: {
    code: AuthErrorCode.MISSING_UID,
    message: '',
    userFacingMessage: userFacingUnknownError,
  },
  [AuthErrorCode.OPERATION_NOT_ALLOWED]: {
    code: AuthErrorCode.OPERATION_NOT_ALLOWED,
    message: '',
    userFacingMessage: userFacingUnknownError,
  },
  [AuthErrorCode.UID_ALREADY_EXISTS]: {
    code: AuthErrorCode.UID_ALREADY_EXISTS,
    message: '',
    userFacingMessage: userFacingUnknownError,
  },
  [AuthErrorCode.USER_NOT_FOUND]: {
    code: AuthErrorCode.USER_NOT_FOUND,
    message: '',
    userFacingMessage: "We couldn't find your account. Why not make one now?",
  },
  [AuthErrorCode.TOO_MANY_REQUESTS]: {
    code: AuthErrorCode.TOO_MANY_REQUESTS,
    message: '',
    userFacingMessage: 'Too many attempts. Please try again later.',
  },
  [AuthErrorCode.WRONG_PASSWORD]: {
    code: AuthErrorCode.WRONG_PASSWORD,
    message: '',
    userFacingMessage: 'Incorrect password.',
  },
  [AuthErrorCode.PASSWORDS_DO_NOT_MATCH]: {
    code: AuthErrorCode.PASSWORDS_DO_NOT_MATCH,
    message: '',
    userFacingMessage: 'Passwords do not match.',
  },
} as { [key: string]: AuthError };
