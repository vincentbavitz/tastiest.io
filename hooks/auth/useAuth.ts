import { FIREBASE, FirebaseAuthError } from '@tastiest-io/tastiest-utils';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { useFirebase } from 'react-redux-firebase';
import { AuthContext } from '../../contexts/auth';
import { useUserData } from '../useUserData';

export const useAuth = () => {
  const firebase = useFirebase();
  const router = useRouter();
  const [error, _setError] = useState<string>(null);
  const { user } = useContext(AuthContext);
  const { setUserData } = useUserData(user);

  // Convert firebase error code to Tastiest auth error message
  const setError = (e: { code: string; message: string }) => {
    const error =
      FIREBASE.ERROR_MESSAGES[e?.code] ??
      FIREBASE.ERROR_MESSAGES[FirebaseAuthError.OTHER];

    _setError(error);
  };

  // If redirectTo is given, will redirect there after sign out.
  // Else, the page will simply reload.
  const signOut = async (redirectTo?: string) => {
    _setError(null);

    try {
      await firebase.auth().signOut();

      if (redirectTo) {
        router.push(redirectTo);
      } else {
        router.reload();
      }
    } catch (error) {
      setError(error);
    }
  };

  const resetPassword = async (email: string) => {
    _setError(null);

    //  Email must be given as a parameter because user might not be logged in.
    if (!email?.length) {
      return;
    }

    try {
      await firebase.auth().sendPasswordResetEmail(email);
      return true;
    } catch (error) {
      setError(error);
      return false;
    }
  };

  // Null if the user information has not been loaded yet -- else boolean
  const isSignedIn = user === undefined ? null : Boolean(user?.uid);

  return {
    user,
    signOut,
    resetPassword,
    isSignedIn,
    error,
  };
};
