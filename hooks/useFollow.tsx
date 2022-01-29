import {
  dlog,
  FollowerNotificationPreferences,
  FOLLOWER_NOTIFICATION_TYPE,
  postFetch,
} from '@tastiest-io/tastiest-utils';
import { UpdateFollowParams } from 'pages/api/restaurant/updateFollowStatus';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { openAuthModal } from 'state/navigation';
import { LocalEndpoint } from 'types/api';
import { useAuth } from './auth/useAuth';
import { useUserData } from './useUserData';

/**
 * Managed following and setting notifications for a specific restaurant.
 */
export default function useFollow(restaurantId: string) {
  const { user, isSignedIn } = useAuth();
  const { userData } = useUserData(user);
  const dispatch = useDispatch();

  const [following, setFollowing] = useState<boolean | null>(null);
  const [followLoading, setFollowLoading] = useState(false);

  const [
    notifications,
    setNotifications,
  ] = useState<FollowerNotificationPreferences | null>(null);
  const [notificationsLoading, setNotificationsLoading] = useState(false);

  /** `null` indicates that the user isn't logged in */
  const isFollowing = useMemo(() => {
    if (!userData) {
      return null;
    }

    return Boolean(
      userData?.metrics?.restaurantsFollowed?.find(
        r => r.restaurantId === restaurantId,
      ),
    );
  }, [restaurantId, user, isSignedIn]);

  // Set initial values
  useEffect(() => {
    const _following = isFollowing;

    if (_following !== null) {
      setFollowing(_following);
      setNotifications({
        [FOLLOWER_NOTIFICATION_TYPE.LIMITED_TIME_DISHES]: true,
        [FOLLOWER_NOTIFICATION_TYPE.SPECIAL_EXPERIENCES]: true,
        [FOLLOWER_NOTIFICATION_TYPE.LAST_MINUTE_TABLES]: true,
        [FOLLOWER_NOTIFICATION_TYPE.GENERAL_INFO]: true,
        [FOLLOWER_NOTIFICATION_TYPE.NEW_MENU]: true,
      });
    }
  }, [userData]);

  // Set the following status on Firestore when following changes.
  const follow = async (notifications?: FollowerNotificationPreferences) => {
    if (isFollowing === null) {
      return;
    }

    setFollowLoading(true);

    const { success, error } = await postFetch<UpdateFollowParams>(
      LocalEndpoint.UPDATE_FOLLOW_STATUS,
      {
        userId: user.uid,
        restaurantId,
        following: true,
        notifications,
      },
    );

    dlog('useFollow ➡️ success:', success);
    dlog('useFollow ➡️ error:', error);

    setFollowLoading(false);

    if (success) {
      setFollowing(success);
    } else if (error) {
      dlog('useFollow ➡️ error:', error);
    }
  };

  const unfollow = async () => {
    // Request user to sign in
    if (isFollowing === null) {
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
      setNotifications(null);
    } else if (error) {
      dlog('useFollow ➡️ error:', error);
    }
  };

  // Set notifications for the restaurant.
  const toggleNotifications = async (
    notificationPreferences: FollowerNotificationPreferences,
  ) => {
    // Request user to sign in
    if (isFollowing === null) {
      dispatch(openAuthModal());
      return;
    }

    // Turning on notifications should only be possible if they're following.
    if (!userData || !isFollowing) {
      return;
    }

    setNotificationsLoading(true);

    const { success, error } = await postFetch<UpdateFollowParams>(
      LocalEndpoint.UPDATE_FOLLOW_STATUS,
      {
        userId: user.uid,
        restaurantId,
        following: true,
        notifications: notificationPreferences,
      },
    );

    setNotificationsLoading(false);

    if (success) {
      setNotifications(notificationPreferences);
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
