import {
  dlog,
  FunctionsResponse,
  RestaurantDataApi,
  RestaurantDataKey,
  UserDataApi,
  UserDataKey,
} from '@tastiest-io/tastiest-utils';
import { NextApiRequest, NextApiResponse } from 'next';
import { firebaseAdmin } from 'utils/firebaseAdmin';

export interface UpdateFollowParams {
  userId: string;
  restaurantId: string;
  following: boolean;
  notifications?: boolean;
}

/**
 * Requires the following parameters
 *  ```
 *    userId: string;
 *    restaurantId: string;
 *    following: boolean;
 *    notifications?: boolean;
 *  ```
 */
export default async function updateFollowStatus(
  request: NextApiRequest,
  response: NextApiResponse<FunctionsResponse>,
) {
  // Only allow POST
  if (request.method !== 'POST') {
    response.status(405).end();
    return;
  }

  // Get body as JSON or raw
  let body;
  try {
    body = JSON.parse(request.body);
  } catch (e) {
    body = request.body;
  }

  const {
    userId = null,
    following = null,
    notifications = null,
    restaurantId = null,
  } = body;

  // Order token is required
  if (!userId || !restaurantId || following === null) {
    response.json({
      success: false,
      data: null,
      error: 'Invalid request parameters',
    });

    return;
  }

  try {
    const userDataApi = new UserDataApi(firebaseAdmin, userId);
    const restaurantDataApi = new RestaurantDataApi(
      firebaseAdmin,
      restaurantId,
    );

    const userData = await userDataApi.getUserData();
    const restaurant = await restaurantDataApi.getRestaurantData();

    // Add follower or toggle notifications
    if (following) {
      const alreadyFollowing = userData.metrics.restaurantsFollowed?.find(
        r => r.restaurantId === restaurantId,
      );

      const notificationsTogggled =
        Boolean(alreadyFollowing) &&
        alreadyFollowing.notifications !== notifications;

      if (alreadyFollowing && !notificationsTogggled) {
        response.json({
          success: false,
          data: null,
          error: 'Already following',
        });
        return;
      }

      // Update their following restaurants
      const updateUserData = async () => {
        const restaurantsFollowed =
          userData.metrics?.restaurantsFollowed?.filter(
            r => r.restaurantId !== restaurantId,
          ) ?? [];

        restaurantsFollowed.push({
          restaurantId,
          notifications: Boolean(notifications),
        });

        return userDataApi.setUserData(UserDataKey.METRICS, {
          restaurantsFollowed,
        });
      };

      // Set new followers array for restaurant
      const updateRestaurantData = async () => {
        const followers = (restaurant.metrics.followers ?? []).filter(
          f => f.userId !== userId,
        );

        followers.push({
          userId,
          name: userData.details?.firstName as string,
          email: userData.details?.email as string,
          notifications: Boolean(notifications),
          followedAt: Date.now(),
        });

        // Set restaurant followers
        return restaurantDataApi.setRestaurantData(RestaurantDataKey.METRICS, {
          followers,
        });
      };

      await Promise.all([updateUserData(), updateRestaurantData()]);

      response.json({
        success: true,
        data: null,
        error: null,
      });

      return;
    }

    // Remove follower
    const notFollowing = !userData.metrics.restaurantsFollowed?.find(
      r => r.restaurantId === restaurantId,
    );

    if (notFollowing) {
      response.json({
        success: false,
        data: null,
        error: 'Already unfollowed',
      });

      return;
    }

    // Update their following restaurants
    const restaurantsFollowed = userData.metrics.restaurantsFollowed.filter(
      r => r.restaurantId !== restaurantId,
    );

    userDataApi.setUserData(UserDataKey.METRICS, { restaurantsFollowed });

    // New followers array for restaurant
    const followers = (restaurant.metrics.followers ?? []).filter(
      f => f.userId !== userId,
    );

    // Set restaurant followers
    await restaurantDataApi.setRestaurantData(RestaurantDataKey.METRICS, {
      followers,
    });

    response.json({
      success: true,
      data: null,
      error: null,
    });
  } catch (error) {
    dlog('error', error);

    response.json({
      success: false,
      data: null,
      error: String(error),
    });
  }
}
