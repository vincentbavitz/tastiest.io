import {
  FollowerNotificationPreferences,
  FollowerNotificationType,
  Horus,
} from '@tastiest-io/tastiest-utils';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { openAuthModal } from 'state/navigation';
import { useAuth } from './auth/useAuth';

/**
 * Managed following and setting notifications for a specific restaurant.
 */
export default function useFollow(restaurantId: string) {
  const { user, userData, token, isSignedIn } = useAuth();
  const dispatch = useDispatch();

  const [following, setFollowing] = useState<boolean | null>(null);
  const [followLoading, setFollowLoading] = useState(false);

  const horus = useMemo(() => (token ? new Horus(token) : null), [token]);

  // FIX ME CORRECT ME
  const isFollowing = true;

  console.log('useFollow ➡️ token:', token);

  // Set following status initially
  // `null` indicates that the user isn't logged in
  useEffect(() => {
    if (!horus) {
      return;
    }

    horus.get('/users/following').then(({ data }) => data);
  }, [horus]);

  const [
    notifications,
    setNotifications,
  ] = useState<FollowerNotificationPreferences | null>(null);
  const [notificationsLoading, setNotificationsLoading] = useState(false);

  // Set initial values
  useEffect(() => {
    const _following = isFollowing;

    if (_following !== null) {
      setFollowing(_following);
      setNotifications({
        [FollowerNotificationType.LIMITED_TIME_DISHES]: true,
        [FollowerNotificationType.SPECIAL_EXPERIENCES]: true,
        [FollowerNotificationType.LAST_MINUTE_TABLES]: true,
        [FollowerNotificationType.GENERAL_INFO]: false,
        [FollowerNotificationType.NEW_MENU]: true,
      });
    }
  }, [userData]);

  // Set the following status on Firestore when following changes.
  const follow = async (notifications?: FollowerNotificationPreferences) => {
    if (isFollowing === null) {
      return;
    }

    setFollowLoading(true);

    const { error } = await horus.post('/users/follow-restaurant', {
      restaurant_id: restaurantId,
      notify_new_nenu: notifications.NEW_MENU,
      notify_general_info: notifications.GENERAL_INFO,
      notify_last_minute_tables: notifications.LAST_MINUTE_TABLES,
      notify_special_sxperiences: notifications.SPECIAL_EXPERIENCES,
    });

    setFollowLoading(false);

    if (!error) {
      setFollowing(true);
    }
  };

  const unfollow = async () => {
    // Request user to sign in
    if (isFollowing === null) {
      dispatch(openAuthModal());
      return;
    }

    setFollowLoading(true);

    const { error } = await horus.post('/users/unfollow-restaurant', {
      restaurant_id: restaurantId,
    });

    setFollowLoading(false);

    if (!error) {
      setFollowing(false);
      setNotifications(null);
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

    const { error } = await horus.post('/users/follow-restaurant', {
      restaurant_id: restaurantId,
      notify_new_nenu: notifications.NEW_MENU,
      notify_general_info: notifications.GENERAL_INFO,
      notify_last_minute_tables: notifications.LAST_MINUTE_TABLES,
      notify_special_sxperiences: notifications.SPECIAL_EXPERIENCES,
    });

    setNotificationsLoading(false);

    if (!error) {
      setNotifications(notificationPreferences);
    }

    return;
  };

  return {
    follow,
    unfollow,
    following,
    setFollowing,
    notifications,
    toggleNotifications,
    followLoading,
    notificationsLoading,
  };
}
