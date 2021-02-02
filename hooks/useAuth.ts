import firebaseApp from 'firebase/app';
import _ from 'lodash';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { useFirebase } from 'react-redux-firebase';
import { AuthContext } from '../contexts/auth';
import { LocalStorageItem } from '../types/data';
import { UserData } from '../types/firebase';
import { titleCase } from '../utils/text';
import { useUserData } from './useUserData';

export const useAuth = () => {
  const firebase = useFirebase();
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const [error, setError] = useState<Error | undefined>();

  const MAX_LOGIN_ATTEMPTS = 3;

  const signIn = async (email: string, password: string) => {
    const attemptSignIn = _.debounce(
      async () => firebase.auth().signInWithEmailAndPassword(email, password),
      2000,
    );

    try {
      // Retry on fail
      let credential: firebaseApp.auth.UserCredential;
      let i = 0;
      while (!user && i < MAX_LOGIN_ATTEMPTS) {
        console.log(`Attempting to log user in. (${i}/${MAX_LOGIN_ATTEMPTS})`);
        credential = await attemptSignIn();
        i += 1;
      }

      if (credential) {
        // User has accepted cookies by logging in
        localStorage.setItem(LocalStorageItem.HAS_ACCEPTED_COOKIES, '1');

        // Identify user with Segment
        window.analytics.identify(credential.user.uid, {
          context: {
            userAgent: navigator?.userAgent,
          },
        });

        // Track user sign in
        window.analytics.track('User Signed In', {
          //
        });

        return credential;
      }
    } catch (error) {
      setError(error);
    }

    return false;
  };

  // If redirectTo is given, will redirect there after sign out.
  // Else, the page will simply reload.
  const signOut = async (redirectTo?: string) => {
    setError(undefined);

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

  const resetPassword = async () => {
    if (!user.email) {
      return;
    }

    return firebase.auth().sendPasswordResetEmail(user.email);
  };

  const signUp = async (
    displayName: string,
    email: string,
    password: string,
  ) => {
    setError(undefined);

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);

      const user = firebase.auth().currentUser;
      if (user) {
        await user.updateProfile({
          displayName: titleCase(displayName),
        });

        const { setUserData } = useUserData();
        setUserData(UserData.DISPLAY_NAME, displayName);

        // Sign in user
        signIn(email, password);

        // User has accepted cookies implicitly
        localStorage.setItem(LocalStorageItem.HAS_ACCEPTED_COOKIES, '1');

        // Send email verification email
        firebase.auth().currentUser.sendEmailVerification();

        // Identify user with Segment
        window.analytics.identify(user.uid, {
          context: {
            userAgent: navigator?.userAgent,
          },
          traits: {
            // name: '',
            // address: '',
            // birthday: undefined,
            // phone,
            id: user.uid,
            email: email,
            createdAt: Date.now(),
            username: user.displayName,
          },
        });

        return true;
      }
    } catch (e) {
      setError(error);
      return false;
    }
  };

  const isSignedIn = Boolean(user);

  return {
    user,
    signUp,
    signIn,
    signOut,
    resetPassword,
    isSignedIn,
    error,
  };
};
