import { useFirestore } from 'react-redux-firebase';
import { v4 as uuid } from 'uuid';
import { useAuth } from './useAuth';
import { useUserData } from './useUserData';

interface IRestaurantRecommendation {
  userId: string | null;
  restaurantName: string;
  timestamp: number;
}

export function useFeedback() {
  const firestore = useFirestore();
  const { user } = useAuth();
  const { userData = {} } = useUserData(user);

  const { details: { firstName = 'User', lastName } = {} } = userData;
  const name = `${firstName}${lastName ? ' ' + lastName : ''}`;

  const suggestRestaurant = async (
    restaurantName: string,
  ): Promise<{ success: boolean }> => {
    // Send recommendation to Firestore
    const recommendation: IRestaurantRecommendation = {
      userId: user.uid,
      restaurantName,
      timestamp: Date.now(),
    };

    try {
      await firestore
        .collection('suggestions-restaurants')
        .doc(uuid())
        .set(recommendation);

      window.analytics.track(`${name} suggested a restaurant`, {
        ...recommendation,
      });

      return { success: true };
    } catch {
      return { success: false };
    }
  };

  //   const suggestDish = async (
  //     dishName: string,
  //   ): Promise<{ success: boolean }> => {
  //     const supportRequest: IUserSupportRequest = {
  //       name,
  //       email,
  //       type,
  //       subject,
  //       conversation: [initialMessage],
  //       userId: userId ?? null,
  //       seen: false,
  //       resolved: false,
  //       priority: 'normal',
  //       openedAt: Date.now(),
  //       updatedAt: null,
  //     };

  //     try {
  //       await firestore
  //         .collection('support-users')
  //         .doc(uuid())
  //         .set(supportRequest);

  //       return { success: true, errors: [] };
  //     } catch (_) {
  //       return {
  //         success: false,
  //         errors: [SupportRequestGenerationError.FIRESTORE_ERROR],
  //       };
  //     }
  //   };

  return { suggestRestaurant };
}
