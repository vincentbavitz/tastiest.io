import { useAuth } from 'hooks/useAuth';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useLocalStorage } from 'react-use';

export enum LocalStorageItem {
  HAS_ACCEPTED_COOKIES = 'HAS_ACCEPTED_COOKIES',
}

export const TrackingContext = React.createContext(undefined);

// Tracking context for Segment
const TrackingProvider = ({ children }) => {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  // ////////////////////////////////////// //
  // Turn off analytics until user opts in  //
  // ////////////////////////////////////// //
  const [hasAcceptedCookies] = useLocalStorage(
    LocalStorageItem.HAS_ACCEPTED_COOKIES,
  );

  const [hasAcceptedAnalytics, setHasAcceptedAnalytics] = useState(
    isSignedIn || hasAcceptedCookies,
  );

  // useEffect(() => {
  //   if (!hasAcceptedAnalytics) {
  //     window.analytics?.off();
  //     setHasAcceptedAnalytics(false);
  //   }
  // }, [isSignedIn, hasAcceptedCookies]);

  // /////////////////////////////////////// //
  //  Manange location changes with Segment  //
  // /////////////////////////////////////// //
  // const handleLocationChange = url => {
  //   // Update analytics page location
  //   window.analytics.page('Page Viewed');
  // };

  // useEffect(() => {
  //   handleLocationChange(router.route);
  //   router.events.on('routeChangeComplete', handleLocationChange);
  //   return () => router.events.off('routeChangeComplete', handleLocationChange);
  // }, []);

  return (
    <TrackingContext.Provider value={hasAcceptedAnalytics}>
      {children}
    </TrackingContext.Provider>
  );
};

export default TrackingProvider;
