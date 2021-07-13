import { useAuth } from 'hooks/auth/useAuth';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export enum LocalStorageItem {
  HAS_ACCEPTED_COOKIES = 'HAS_ACCEPTED_COOKIES',
}

export const TrackingContext = React.createContext(undefined);

// Tracking context for Segment
const TrackingProvider = ({ children }) => {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  // /////////////////////////////////////// //
  //   Analytics is automatically opted in.  //
  //   User can leave otherwise.             //
  // /////////////////////////////////////// //
  useEffect(() => {
    window.analytics?.on();
  }, []);

  // /////////////////////////////////////// //
  //  Manange location changes with Segment  //
  // /////////////////////////////////////// //
  const handleLocationChange = url => {
    // Update analytics page location
    window.analytics.page();
  };

  useEffect(() => {
    handleLocationChange(router.route);
    router.events.on('routeChangeComplete', handleLocationChange);
    return () => router.events.off('routeChangeComplete', handleLocationChange);
  }, []);

  return (
    <TrackingContext.Provider value={''}>{children}</TrackingContext.Provider>
  );
};

export default TrackingProvider;
