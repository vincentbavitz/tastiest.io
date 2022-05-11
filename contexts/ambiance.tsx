import { useImplicitFollowSyncs } from 'hooks/restaurants/useImplicitFollowSyncs';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { createStore } from 'redux';
import { openAuthModal } from 'state/navigation';
import { rootReducer } from 'state/reducers';
import { METADATA } from '../constants';

// The AMBIANCE provider of Tastiest
// Includes location management, Firestore and Redux connectivity,
// as well as Tracking with Segment
export const AmbianceContext = React.createContext(undefined);

const store = createStore(rootReducer);

interface AmbianceProviderProps {
  children: any;
}

const AmbianceProvider = ({ children }: AmbianceProviderProps) => {
  const router = useRouter();

  // Handle the user's pending follow syncs when they sign in.
  useImplicitFollowSyncs();

  const handleLocationChange = url => {
    // Open login modal from URL params
    if (METADATA.URL_SIGN_IN_REGEX.test(url)) {
      store.dispatch(openAuthModal());
    }
  };

  useEffect(() => {
    handleLocationChange(router.route);

    router.events.on('routeChangeComplete', handleLocationChange);
    return () => router.events.off('routeChangeComplete', handleLocationChange);
  }, []);

  return (
    <>
      <StoreProvider store={store}>{children}</StoreProvider>
    </>
  );
};

export default AmbianceProvider;
