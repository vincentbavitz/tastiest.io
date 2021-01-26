import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from './useAuth';

export function useLocationChange(callback: (url: string) => void) {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeComplete', callback);

    return () => {
      router.events.off('routeChangeComplete', callback);
    };
  }, []);
}
