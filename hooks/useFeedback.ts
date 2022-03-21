import {
  Address,
  dlog,
  FirestoreCollection,
} from '@tastiest-io/tastiest-utils';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useFirestore } from 'react-redux-firebase';
import { v4 as uuid } from 'uuid';
import { useAuth } from './auth/useAuth';
import { useTrack } from './useTrack';

interface IRecommendationDetails {
  // For home page recommendation
  userGivenDish: string | null;
  userGivenCuisine: string | null;
  userGivenLocation: string | null;
  userGivenRestaurantName: string | null;

  // For article page recommendation
  dish: string | null;
  cuisine: string | null;
  location: Address | null;
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
  const { track } = useTrack();
  const firestore = useFirestore();
  const { user, userData } = useAuth();

  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { firstName, lastName } = {
    firstName: userData?.first_name ?? 'User',
    lastName: userData?.last_name ?? undefined,
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

      track('User Made a Recommendation', {
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
