import {
  dlog,
  FollowerNotificationPreferences,
  FollowerNotificationType,
  Horus,
} from '@tastiest-io/tastiest-utils';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { openAuthModal } from 'state/navigation';
import { useAuth } from './auth/useAuth';

type FollowRelation = {
  id: string;
  followed_at: string;
  notify_new_menu: boolean;
  notify_general_info: boolean;
  notify_last_minute_tables: boolean;
  notify_limited_time_dishes: boolean;
  notify_special_experiences: boolean;
  user_id: string;
  restaurant_id: string;
};

/**
 * Managed following and setting notifications for a specific restaurant.
 */
export default function useFollow(restaurantId: string) {
  const { user, userData, token, isSignedIn } = useAuth();
  const dispatch = useDispatch();

  const [following, setFollowing] = useState<boolean | null>(null);
  const [followLoading, setFollowLoading] = useState(false);

  const horus = useMemo(() => (token ? new Horus(token) : null), [token]);

  console.log('useFollow ➡️ token:', token);

  // Set following status initially
  // `null` indicates that the user isn't logged in
  useEffect(() => {
    if (!horus) {
      return;
    }

    horus.get<FollowRelation[]>('/users/following').then(({ data }) => {
      dlog('useFollow ➡️ data:', data);
      const _followRelation: FollowRelation = data?.find(
        r => r.restaurant_id === restaurantId,
      );

      setFollowing(Boolean(_followRelation));

      // Set thie notifcations of the follow relation.
      setNotifications({
        [FollowerNotificationType.LIMITED_TIME_DISHES]:
          _followRelation.notify_limited_time_dishes,
        [FollowerNotificationType.SPECIAL_EXPERIENCES]:
          _followRelation.notify_special_experiences,
        [FollowerNotificationType.LAST_MINUTE_TABLES]:
          _followRelation.notify_last_minute_tables,
        [FollowerNotificationType.GENERAL_INFO]:
          _followRelation.notify_general_info,
        [FollowerNotificationType.NEW_MENU]: _followRelation.notify_new_menu,
      });
    });
  }, [horus]);

  const [
    notifications,
    setNotifications,
  ] = useState<FollowerNotificationPreferences | null>(null);

  const [notificationsLoading, setNotificationsLoading] = useState(false);

  // Set the following status on Firestore when following changes.
  const follow = async (notifications?: FollowerNotificationPreferences) => {
    dlog('useFollow ➡️ following:', following);

    if (following === null) {
      return;
    }

    setFollowLoading(true);

    const { error } = await horus.post('/users/follow-restaurant', {
      restaurant_id: restaurantId,
      notify_new_nenu: notifications?.NEW_MENU ?? true,
      notify_general_info: notifications?.GENERAL_INFO ?? true,
      notify_last_minute_tables: notifications?.LAST_MINUTE_TABLES ?? true,
      notify_special_experiences: notifications?.SPECIAL_EXPERIENCES ?? true,
      notify_limited_time_dishes: notifications?.LIMITED_TIME_DISHES ?? true,
    });

    setFollowLoading(false);

    if (!error) {
      setFollowing(true);
    }
  };

  const unfollow = async () => {
    // Request user to sign in
    if (following === null) {
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
    if (following === null) {
      dispatch(openAuthModal());
      return;
    }

    setNotificationsLoading(true);

    const { error } = await horus.post('/users/follow-restaurant', {
      restaurant_id: restaurantId,
      notify_new_nenu: notifications?.NEW_MENU ?? true,
      notify_general_info: notifications?.GENERAL_INFO ?? true,
      notify_last_minute_tables: notifications?.LAST_MINUTE_TABLES ?? true,
      notify_special_experiences: notifications?.SPECIAL_EXPERIENCES ?? true,
      notify_limited_time_dishes: notifications?.LIMITED_TIME_DISHES ?? true,
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
