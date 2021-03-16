import DebouncePromise from 'awesome-debounce-promise';
import firebaseApp from 'firebase/app';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { useFirebase } from 'react-redux-firebase';
import { FIREBASE } from '../constants';
import { AuthContext } from '../contexts/auth';
import { LocalStorageItem } from '../types/data';
import { FirebaseAuthError, UserData } from '../types/firebase';
import { titleCase } from '../utils/text';
import { useUserData } from './useUserData';

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

  const signIn = async (email: string, password: string) => {
    _setError(null);
    if (!email?.length || !password?.length) {
      return;
    }

    const attemptSignIn = DebouncePromise(
      () => firebase.auth().signInWithEmailAndPassword(email, password),
      2000,
    );

    try {
      // Retry on fail
      let credential: firebaseApp.auth.UserCredential;
      let i = 0;
      while (!user && i < FIREBASE.MAX_LOGIN_ATTEMPTS) {
        credential = await attemptSignIn();
        i++;

        console.log(
          `Attempting to log user in. (${i}/${FIREBASE.MAX_LOGIN_ATTEMPTS})`,
        );
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
          userId: user.uid,
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

  const signUp = async (
    displayName: string,
    email: string,
    password: string,
  ) => {
    _setError(null);

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
          id: user.uid,
          email: email,
          createdAt: Date.now(),
          username: user.displayName ?? null,
        },
      });

      // Sends a confirmation email with firebase funnctions
      console.log('Sign Up: Tracked with segment');

      return true;
    } catch (error) {
      setError(error);
      return false;
    }
  };

  // Null if the user information has not been loaded yet. else boolean
  const isSignedIn = user === undefined ? null : Boolean(user?.uid);

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
