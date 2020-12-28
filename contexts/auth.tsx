import nookies from 'nookies';
import React, { createContext, useEffect, useState } from 'react';
import { firebaseClient } from '../firebaseClient';

export const AuthContext = createContext<{ user: firebaseClient.User | null }>({
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
