import { dlog, postFetch } from '@tastiest-io/tastiest-utils';
import { UpdateFollowParams } from 'pages/api/restaurant/updateFollowStatus';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { openAuthModal } from 'state/navigation';
import { LocalEndpoint } from 'types/api';
import { useAuth } from './auth/useAuth';
import { useUserData } from './useUserData';

/**
 * Managed following and setting notifications for a specific restaurant.
 */
export default function useFollow(restaurantId: string) {
  const { user } = useAuth();
  const { userData } = useUserData(user);
  const dispatch = useDispatch();

  const [following, setFollowing] = useState<boolean | null>(null);
  const [followLoading, setFollowLoading] = useState(false);

  const [notifications, setNotifications] = useState<boolean | null>(null);
  const [notificationsLoading, setNotificationsLoading] = useState(false);

  /** `null` indicates that the user isn't logged in */
  const isFollowing = (restaurantId: string) => {
    if (!userData) {
      return null;
    }

    return Boolean(
      userData?.metrics?.restaurantsFollowed?.find(
        r => r.restaurantId === restaurantId,
      ),
    );
  };

  const hasNotifications = (restaurantId: string) => {
    if (!isFollowing(restaurantId)) {
      return null;
    }

    return Boolean(
      userData?.metrics?.restaurantsFollowed?.find(
        r => r.restaurantId === restaurantId,
      )?.notifications,
    );
  };

  // Set initial values
  useEffect(() => {
    const _following = isFollowing(restaurantId);

    if (_following !== null) {
      setFollowing(_following);
      setNotifications(hasNotifications(restaurantId));
    }
  }, [userData]);

  // Set the following status on Firestore when following changes.
  const follow = async () => {
    // Request user to sign in
    if (isFollowing(restaurantId) === null) {
      dispatch(openAuthModal());
      return;
    }

    setFollowLoading(true);

    const { success, error } = await postFetch<UpdateFollowParams>(
      LocalEndpoint.UPDATE_FOLLOW_STATUS,
      {
        userId: user.uid,
        restaurantId,
        following: true,
        notifications: false,
      },
    );

    setFollowLoading(false);

    if (success) {
      setFollowing(success);
    } else if (error) {
      dlog('useFollow ➡️ error:', error);
    }
  };

  const unfollow = async () => {
    // Request user to sign in
    if (isFollowing(restaurantId) === null) {
      dispatch(openAuthModal());
      return;
    }

    setFollowLoading(true);

    const { success, error } = await postFetch<UpdateFollowParams>(
      LocalEndpoint.UPDATE_FOLLOW_STATUS,
      {
        userId: user.uid,
        restaurantId,
        following: false,
      },
    );

    setFollowLoading(false);

    if (success) {
      setFollowing(false);
      setNotifications(false);
    } else if (error) {
      dlog('useFollow ➡️ error:', error);
    }
  };

  // Set notifications for the restaurant.
  const toggleNotifications = async (on: boolean) => {
    // Request user to sign in
    if (isFollowing(restaurantId) === null) {
      dispatch(openAuthModal());
      return;
    }

    // Turning on notifications should only be possible if they're following.
    if (!userData || !isFollowing(restaurantId)) {
      return;
    }

    setNotificationsLoading(true);

    const { success, error } = await postFetch<UpdateFollowParams>(
      LocalEndpoint.UPDATE_FOLLOW_STATUS,
      {
        userId: user.uid,
        restaurantId,
        following: true,
        notifications: on,
      },
    );

    setNotificationsLoading(false);

    if (success) {
      setNotifications(on);
    } else if (error) {
      dlog('useFollow ➡️ error:', error);
    }

    return;
  };

  return {
    follow,
    unfollow,
    following,
    notifications,
    toggleNotifications,
    followLoading,
    notificationsLoading,
  };
}
