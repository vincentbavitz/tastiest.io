import { dlog, FirestoreCollection } from '@tastiest-io/tastiest-utils';
import { IAddress } from '@tastiest-io/tastiest-utils/dist/types/geography';
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
  location: IAddress | null;
  restaurantName: string | null;
}

interface IRecommendation extends IRecommendationDetails {
  email: string | null;
  userId: string | null;
  anonymousEmail: string | null;
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

  const makeRecommendation = async (
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
    anonymousEmail?: string,
  ): Promise<{ success: boolean }> => {
    // Send recommendation to Firestore
    const recommendation: IRecommendation = {
      email: user?.email ?? null,
      userId: user?.uid ?? null,
      anonymousEmail: user?.email ? null : anonymousEmail ?? null,
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
        .collection(FirestoreCollection.SUGGESTIONS)
        .doc(uuid())
        .set(recommendation);

      window.analytics.track('User Made a Recommendation', {
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

  return { makeRecommendation, isSubmitting };
}
