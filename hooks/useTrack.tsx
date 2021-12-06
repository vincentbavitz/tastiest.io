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
    () => window.analytics?.user?.()?.anonymousId?.() ?? null,
    [],
  );

  const track = useMemo(
    () => async (event: string, properties: { [key: string]: any }) => {
      window.analytics.track(event, {
        userId,
        anonymousId,
        ...properties,
      });
    },
    [],
  );

  dlog('useTrack ➡️ userId:', userId);
  dlog('useTrack ➡️ anonymousId:', anonymousId);

  return {
    track,
    userId,
    anonymousId,
  };
};
