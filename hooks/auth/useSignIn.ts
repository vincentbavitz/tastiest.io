import { UserCredential } from '@firebase/auth-types';
import { AuthContext, AuthError, AuthErrorMessageMap } from 'contexts/auth';
import { LocalStorageItem } from 'contexts/tracking';
import { useTrack } from 'hooks/useTrack';
import { useContext, useState } from 'react';
import { useFirebase } from 'react-redux-firebase';

export const useSignIn = () => {
  const firebase = useFirebase();
  const { user } = useContext(AuthContext);
  const { track } = useTrack();

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<AuthError | null>(null);

  const signIn = async (email: string, password: string) => {
    if (!email?.length || !password?.length) {
      return;
    }

    const anonymousId = window.analytics?.user?.()?.anonymousId?.();
    const attemptSignIn = async () => {
      let credential: UserCredential;

      try {
        setSubmitting(true);
        credential = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
      } catch (error) {
        setError(AuthErrorMessageMap[(error as AuthError).code]);

        setSubmitting(false);
        return credential;
      }
    };

    const credential = await attemptSignIn();

    if (credential) {
      setSuccess(true);
      setError(null);

      // User has accepted cookies by logging in
      localStorage.setItem(LocalStorageItem.HAS_ACCEPTED_COOKIES, '1');

      // Identify user with Segment
      window.analytics.identify(anonymousId, {
        userId: credential.user.uid,
        email: user.email,
        context: {
          userAgent: navigator?.userAgent,
        },
      });

      // Track user sign in
      track('User Signed In', {
        ...user,
      });

      return credential;
    }

    // setError(AuthErrorMessageMap[AuthErrorCode.INTERNAL_ERROR]);
  };

  return { signIn, success, submitting, error };
};
