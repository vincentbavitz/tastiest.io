import { useRouter } from 'next/router';

enum TrackingType {
  ORDER = 'ORDER',
  ACTIVITY = 'ACTIVITY',
  PAGES = 'PAGES',
}

// Each tracking event fires in three directions.
//    1. Firebase (per user)
//    2. Segment --> Klaviyo
//               --> Google Analytics
//               --> Facebook Pixel
//               --> Google Tag Manager
//    3. Redux -> Local Storage
// So we need an abstract event firing tool that splits each event
// into these routes.

export function useTracking(type: TrackingType) {
  const router = useRouter();

  // Let all traching know about page change
  router.events.on('routeChangeComplete', url => {});
}
