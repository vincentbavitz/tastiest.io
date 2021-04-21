import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import {
  ReactReduxFirebaseProvider,
  ReactReduxFirebaseProviderProps,
} from 'react-redux-firebase';
import { createStore } from 'redux';
import { createFirestoreInstance } from 'redux-firestore';
import { setOnCheckoutPage } from 'state/checkout';
import { openSignInModal } from 'state/navigation';
import { rootReducer } from 'state/reducers';
import { METADATA } from '../constants';
import { firebaseClient } from '../utils/firebaseClient';
import TrackingProvider from './tracking';

// The AMBIANCE provider of Tastiest
// Includes location management, Firestore and Redux connectivity,
// as well as Tracking with Segment
export const AmbianceContext = React.createContext(undefined);

const store = createStore(rootReducer);
const rrfProps: ReactReduxFirebaseProviderProps = {
  firebase: firebaseClient,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance,
};

const AmbianceProvider = ({ children }) => {
  const router = useRouter();

  const handleLocationChange = url => {
    // Open login modal from URL params
    if (METADATA.URL_SIGN_IN_REGEX.test(url)) {
      store.dispatch(openSignInModal());
    }

    // Update onCheckoutPage when user is checking out
    store.dispatch(
      setOnCheckoutPage(METADATA.URL_CHECKOUT_PAGE_REGEX.test(url)),
    );
  };

  useEffect(() => {
    handleLocationChange(router.route);

    router.events.on('routeChangeComplete', handleLocationChange);
    return () => router.events.off('routeChangeComplete', handleLocationChange);
  }, []);

  return (
    <StoreProvider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <TrackingProvider>{children}</TrackingProvider>
      </ReactReduxFirebaseProvider>
    </StoreProvider>
  );
};

export default AmbianceProvider;
