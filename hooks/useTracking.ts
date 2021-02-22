import { useEffect } from 'react';
import { useLocalStorage } from 'react-use';
import { LocalStorageItem } from '../types/data';
import { useAuth } from './useAuth';

enum TrackingType {
  ORDER = 'ORDER',
  ACTIVITY = 'ACTIVITY',
  PAGES = 'PAGES',
}

// enum Pages {
//   HOME = 'Home',
//   FAVOURITES = 'Favourites',
//   ARTICLE = ''
// }

// Each tracking event fires in three directions.
//    1. Firebase (per user)
//    2. Segment --> Klaviyo
//               --> Google Analytics
//               --> Facebook Pixel
//               --> Google Tag Manager
//    3. Redux -> Local Storage
// So we need an abstract event firing tool that splits each event
// into these routes.
export function useTracking() {
  const { isSignedIn, user } = useAuth();

  // ////////////////////////////////////// //
  // Turn off analytics until user opts in  //
  // ////////////////////////////////////// //
  const [hasAcceptedCookies] = useLocalStorage(
    LocalStorageItem.HAS_ACCEPTED_COOKIES,
  );

  const hasAcceptedAnalytics = isSignedIn || hasAcceptedCookies;
  useEffect(() => {
    if (!hasAcceptedAnalytics) {
      window.analytics?.off();
    }
  }, [isSignedIn, hasAcceptedCookies]);
  // ////////////////////////////////////// //
  // ////////////////////////////////////// //

  // return { track, identify, hasAcceptedAnalytics };
  return { hasAcceptedAnalytics };
}
