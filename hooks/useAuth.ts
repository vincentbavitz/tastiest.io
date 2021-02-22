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
  const [error, setError] = useState<Error | undefined>();
  const { user } = useContext(AuthContext);
  const { setUserData } = useUserData(user);

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
      const { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      if (!user) {
        console.log('Sign Up: No user!!!');
        return false;
      }

      await user.updateProfile({
        displayName: titleCase(displayName),
      });
      console.log('Sign Up: Updated profile');

      // User data
      setUserData(UserData.DISPLAY_NAME, displayName);
      console.log('Sign Up: Set display name');

      // Sign in user
      await signIn(email, password);
      console.log('Sign Up: Signed in');

      // User has accepted cookies implicitly
      localStorage.setItem(LocalStorageItem.HAS_ACCEPTED_COOKIES, '1');
      console.log('Sign Up: set cookies');

      // Send email verification email
      firebase.auth().currentUser.sendEmailVerification();
      console.log('Sign Up: Sent email verification');

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
          username: user.displayName ?? null,
        },
      });

      console.log('Sign Up: Tracked with segment');

      return true;
    } catch (e) {
      console.log('Sign Up: CAUGHT ERROR', e);

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
