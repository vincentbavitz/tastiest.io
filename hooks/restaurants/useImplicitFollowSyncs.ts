import {
  FollowerNotificationPreferences,
  Horus,
} from '@tastiest-io/tastiest-utils';
import { useAuth } from 'hooks/auth/useAuth';
import { SyncFollow } from 'hooks/useFollow';
import { useEffect } from 'react';
import { useLocalStorage } from 'react-use';
import { LocalStorageItem } from 'types/localStorage';

/**
 * Use this hook in a parent that is across all pages.
 * It will automatically sync the user's pending follows.
 */
export const useImplicitFollowSyncs = () => {
  const { token, isSignedIn } = useAuth();

  // Pending Syncs when the user isn't signed in.
  const [pendingSyncs, setPendingSyncs] = useLocalStorage<SyncFollow[]>(
    LocalStorageItem.SYNC_FOLLOWING,
    [],
  );

  const followParticularRestaurant = async (
    _token,
    restaurantId: string,
    notifications?: FollowerNotificationPreferences,
  ) => {
    const horus = new Horus(_token);

    await horus.post('/users/follow-restaurant', {
      restaurant_id: restaurantId,
      notify_new_nenu: notifications?.NEW_MENU ?? true,
      notify_general_info: notifications?.GENERAL_INFO ?? true,
      notify_last_minute_tables: notifications?.LAST_MINUTE_TABLES ?? true,
      notify_special_experiences: notifications?.SPECIAL_EXPERIENCES ?? true,
      notify_limited_time_dishes: notifications?.LIMITED_TIME_DISHES ?? true,
    });
  };

  console.log('useImplicitFollowSyncs ➡️ pendingSyncs:', pendingSyncs);

  // When the user signs in, we sync the user's pending follows.
  useEffect(() => {
    if (!isSignedIn || !token) {
      return;
    }

    if (pendingSyncs.length === 0) {
      return;
    }

    console.log('useImplicitFollowSyncs: SYNCING');

    const syncPromises = pendingSyncs.map(sync =>
      followParticularRestaurant(token, sync.restaurantId, sync.notifications),
    );

    Promise.all(syncPromises)
      .then(() => {
        setPendingSyncs([]);
      })
      .catch(error => {
        // Some weren't synced; keep them in the pending syncs.
        console.log('useFollowTagger ➡️ error:', error);
      });
  }, [isSignedIn, token]);
};
