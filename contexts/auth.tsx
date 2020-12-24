import { useRouter } from 'next/router';
import nookies from 'nookies';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { firebaseClient } from '../firebaseClient';

const AuthContext = createContext<{ user: firebaseClient.User | null }>({
  user: null,
});

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<firebaseClient.User | null>(null);

  useEffect(() => {
    if (typeof window !== undefined) {
      (window as any).nookies = nookies;
    }

    return firebaseClient.auth().onIdTokenChanged(async user => {
      console.log(`token changed!`);
      if (!user) {
        console.log(`no token found...`);
        setUser(null);
        nookies.destroy(null, 'token');
        nookies.set(null, 'token', '', {});
        return;
      }

      const token = await user.getIdToken();

      setUser(user);
      nookies.destroy(null, 'token');
      nookies.set(null, 'token', token, {});
    });
  }, []);

  // Force refresh the token every 10 minutes
  useEffect(() => {
    const handle = setInterval(async () => {
      console.log(`refreshing token...`);

      const user = firebaseClient.auth().currentUser;
      if (user) await user.getIdToken(true);
    }, 10 * 60 * 1000);

    return () => clearInterval(handle);
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export const useAuth = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  const signIn = async (email: string, password: string) => {
    try {
      const user = await firebaseClient
        .auth()
        .signInWithEmailAndPassword(email, password);

      console.log('user', user);

      router.push('/account');
      return { user };
    } catch (error) {
      console.log('FGSDFKJSDJF', error);
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
        displayName,
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
