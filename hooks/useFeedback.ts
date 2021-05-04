import {
  dlog,
  FirestoreCollection,
  ILocation,
} from '@tastiest-io/tastiest-utils';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useFirestore } from 'react-redux-firebase';
import { v4 as uuid } from 'uuid';
import { useAuth } from './useAuth';
import { useUserData } from './useUserData';

interface IRecommendationDetails {
  // For home page recommendation
  userGivenDish: string | null;
  userGivenCuisine: string | null;
  userGivenLocation: string | null;
  userGivenRestaurantName: string | null;

  // For article page recommendation
  dish: string | null;
  cuisine: string | null;
  location: ILocation | null;
  restaurantName: string | null;
}

interface IRestaurantRecommendation extends IRecommendationDetails {
  userId: string | null;
  timestamp: number;
  fromPage: string;
  fromArticlePage: boolean;
}

export function useFeedback() {
  const firestore = useFirestore();
  const { user } = useAuth();
  const { userData = {} } = useUserData(user);

  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { firstName, lastName } = userData?.details ?? {
    firstName: 'User',
    lastName: undefined,
  };

  const name = `${firstName}${lastName ? ' ' + lastName : ''}`;

  const suggestRestaurant = async (
    fromArticlePage: boolean,
    {
      dish,
      cuisine,
      location,
      restaurantName,
      userGivenDish,
      userGivenCuisine,
      userGivenLocation,
      userGivenRestaurantName,
    }: Partial<IRecommendationDetails>,
  ): Promise<{ success: boolean }> => {
    // Send recommendation to Firestore
    const recommendation: IRestaurantRecommendation = {
      userId: user?.uid ?? null,
      timestamp: Date.now(),
      fromPage: router.asPath,
      fromArticlePage,

      // Recommendation details
      dish: dish ?? null,
      cuisine: cuisine ?? null,
      location: location ?? null,
      restaurantName: restaurantName ?? null,
      userGivenDish: userGivenDish ?? null,
      userGivenCuisine: userGivenCuisine ?? null,
      userGivenLocation: userGivenLocation ?? null,
      userGivenRestaurantName: userGivenRestaurantName ?? null,
    };

    try {
      setIsSubmitting(true);
      await firestore
        .collection(FirestoreCollection.SUGGESTIONS_RESTAURANTS)
        .doc(uuid())
        .set(recommendation);

      window.analytics.track('User suggested a restaurant', {
        name,
        ...recommendation,
      });

      setIsSubmitting(false);
      return { success: true };
    } catch (e) {
      dlog('Error', e);
    }

    setIsSubmitting(false);
    return { success: false };
  };

  return { suggestRestaurant, isSubmitting };
}
