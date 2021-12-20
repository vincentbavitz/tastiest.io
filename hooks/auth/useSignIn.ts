import { dlog } from '@tastiest-io/tastiest-utils';
import { AuthContext, AuthError, AuthErrorMessageMap } from 'contexts/auth';
import { LocalStorageItem } from 'contexts/tracking';
import { useTrack } from 'hooks/useTrack';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';
import { closeAuthModal } from 'state/navigation';
import { IState } from 'state/reducers';

export const useSignIn = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const firebase = useFirebase();

  const { user } = useContext(AuthContext);
  const { track } = useTrack();

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<AuthError | null>(null);

  const navigation = useSelector((state: IState) => state.navigation);
  useEffect(() => {
    dlog(
      'useSignIn ➡️ navigation.isAuthModalOpen:',
      navigation.isAuthModalOpen,
    );
  }, [navigation]);

  const signIn = async (email: string, password: string) => {
    setError(null);

    if (!email?.length || !password?.length) {
      return;
    }

    const anonymousId = window.analytics?.user?.()?.anonymousId?.();
    const attemptSignIn = async () => {
      try {
        setSubmitting(true);
        return firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (error) {
        setError(AuthErrorMessageMap[(error as AuthError).code]);
        setSubmitting(false);
      }
    };

    const credential = await attemptSignIn();

    if (credential) {
      setSuccess(true);
      dispatch(closeAuthModal());

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
      track('User Signed In', {
        ...user,
      });

      return credential;
    }
  };

  return { signIn, success, submitting, error };
};
