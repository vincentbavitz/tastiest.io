import { TrackingContext } from 'contexts/tracking';
import { useContext } from 'react';

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
  return useContext(TrackingContext);
}

// function useSession() {
//   // Find Session or make a new one
//   const [tastiestSessionId, setTastiestSessionId] = useLocalStorage<string>(
//     'tastiest-session-id',
//   );

//   if (!tastiestSessionId) {
//     // Make a new session
//     const _sessionId = uuid();
//     setTastiestSessionId(_sessionId);

//   }
// }
