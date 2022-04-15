import { dlog } from '@tastiest-io/tastiest-utils';
import { useMemo } from 'react';
import { useAuth } from './auth/useAuth';

export type UseTrackReturn = {
  userId: string | null;
  anonymousId: string | null;
  track: (event: string, properties: { [key: string]: any }) => Promise<void>;
};

export const useTrack = (): UseTrackReturn => {
  const { user } = useAuth();

  const userId = useMemo(() => user?.uid ?? null, [user]);
  const anonymousId = useMemo(
    () =>
      typeof window === 'undefined'
        ? null
        : window?.analytics?.user?.()?.anonymousId?.() ?? null,
    [typeof window],
  );

  const track = useMemo(
    () => async (event: string, properties: { [key: string]: any }) => {
      if (typeof window === 'undefined') {
        return;
      }

      window?.analytics.track(event, {
        userId,
        anonymousId,
        ...properties,
      });
    },
    [typeof window],
  );

  dlog('useTrack ➡️ userId:', userId);
  dlog('useTrack ➡️ anonymousId:', anonymousId);

  return {
    track,
    userId,
    anonymousId,
  };
};
