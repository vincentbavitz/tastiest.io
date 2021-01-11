import { useRouter } from 'next/router';
import { useContext } from 'react';
import { AuthContext } from '../contexts/auth';
import { firebaseClient } from '../firebaseClient';
import { titleCase } from '../utils/text';

export const useAuth = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  const MAX_LOGIN_ATTEMPTS = 3;

  const signIn = async (email: string, password: string) => {
    const attemptSignIn = async () =>
      await firebaseClient.auth().signInWithEmailAndPassword(email, password);
    try {
      // Retry on fail
      let user: firebaseClient.auth.UserCredential;
      const i = 0;
      while (!user && i < MAX_LOGIN_ATTEMPTS) {
        console.log(
          `Attempting to log user in. (${i + 1}/${MAX_LOGIN_ATTEMPTS})`,
        );

        user = await attemptSignIn();
      }

      if (user) {
        router.push('/account');
        return { user };
      }
    } catch (error) {
      return { error };
    }
  };

  // If redirectTo is given, will redirect there after sign out.
  // Else, the page will simply reload.
  const signOut = async (redirectTo?: string) => {
    await firebaseClient.auth().signOut();

    if (redirectTo) {
      router.push(redirectTo);
    } else {
      router.reload();
    }
  };

  const createUser = async (
    displayName: string,
    email: string,
    password: string,
  ) => {
    await firebaseClient.auth().createUserWithEmailAndPassword(email, password);

    const user = firebaseClient.auth().currentUser;
    if (user) {
      await user.updateProfile({
        displayName: titleCase(displayName),
      });
    }

    router.push('/account');
  };

  const isSignedIn = Boolean(user);

  return {
    user,
    signIn,
    signOut,
    createUser,
    isSignedIn,
  };
};
