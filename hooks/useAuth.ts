import firebaseApp from 'firebase/app';
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
    const attemptSignIn = async () =>
      firebase.auth().signInWithEmailAndPassword(email, password);

    try {
      // Retry on fail
      let user: firebaseApp.auth.UserCredential;
      const i = 0;
      while (!user && i < MAX_LOGIN_ATTEMPTS) {
        console.log(
          `Attempting to log user in. (${i + 1}/${MAX_LOGIN_ATTEMPTS})`,
        );

        user = await attemptSignIn();
      }

      if (user) {
        // User has accepted cookies by logging in
        localStorage.setItem(LocalStorageItem.HAS_ACCEPTED_COOKIES, '1');
        return user;
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
