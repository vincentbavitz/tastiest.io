import firebaseApp from 'firebase/app';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { useFirebase } from 'react-redux-firebase';
import { AuthContext } from '../contexts/auth';
import { titleCase } from '../utils/text';

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
        firebase.auth().currentUser.sendEmailVerification();
        router.push('/account');
        return { user };
      }
    } catch (error) {
      setError(error);
    }
  };

  // If redirectTo is given, will redirect there after sign out.
  // Else, the page will simply reload.
  const signOut = async (redirectTo?: string) => {
    await firebase.auth().signOut();

    if (redirectTo) {
      router.push(redirectTo);
    } else {
      router.reload();
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
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);

      const user = firebase.auth().currentUser;
      if (user) {
        await user.updateProfile({
          displayName: titleCase(displayName),
        });
      }

      router.push('/account');
    } catch (e) {
      setError(error);
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
