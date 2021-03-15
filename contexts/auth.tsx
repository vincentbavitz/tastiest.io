import firebaseApp from 'firebase/app';
import nookies from 'nookies';
import React, { createContext, useEffect, useState } from 'react';
import { useFirebase } from 'react-redux-firebase';
import { useTracking } from '../hooks/useTracking';

export const AuthContext = createContext<{ user: firebaseApp.User | null }>({
  user: null,
});

export function AuthProvider({ children }: any) {
  // Undefined while loading, null if not logged in
  const [user, setUser] = useState<firebaseApp.User | null | undefined>(
    undefined,
  );

  const firebase = useFirebase();

  useTracking();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).nookies = nookies;
    }

    firebase.auth().onIdTokenChanged(async user => {
      console.log(`token changed!`);
      if (!user) {
        console.log(`no token found...`);
        setUser(null);
        nookies.destroy(null, 'token');
        nookies.set(null, 'token', '', {});
        return;
      }

      try {
        setUser(user);

        const token = await user.getIdToken();
        nookies.destroy(null, 'token');
        nookies.set(null, 'token', token, {});
      } catch (e) {
        return;
      }
    });

    // Force refresh the token every 10 minutes
    const handle = setInterval(async () => {
      console.log(`refreshing token...`);

      const user = firebase.auth().currentUser;
      if (user) await user.getIdToken(true);
    }, 10 * 60 * 1000);

    return () => clearInterval(handle);
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
