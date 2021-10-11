import { dlog } from '@tastiest-io/tastiest-utils';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLockBodyScroll } from 'react-use';
import {
  setIsInitialLoading,
  setIsPageLoading,
  setIsRouteLoading,
  setShouldRenderLoader,
} from 'state/navigation';
import { IState } from 'state/reducers';
import { useScreenSize } from './useScreenSize';

interface UsePageLoaderOptions {
  // Delay of the Loader popup (in ms) so quick routes look instantaneous
  loaderVisibilityDelay?: number;
}

interface UsePageLoaderReturn {
  isPageLoading: boolean;
  isRouteLoading: boolean;
  isInitialLoading: boolean;
  shouldRenderLoader: boolean | null;
}

export function usePageLoader(
  options?: UsePageLoaderOptions,
): UsePageLoaderReturn {
  const { loaderVisibilityDelay = 500 } = options ?? {};

  const router = useRouter();
  const dispatch = useDispatch();

  const { isLoading: isScreenSizeLoading } = useScreenSize();
  const {
    isPageLoading,
    isRouteLoading,
    isInitialLoading,
    shouldRenderLoader,
  } = useSelector((state: IState) => state.navigation);

  // Delay the display of the loading so quick routes look instantaneous
  useEffect(() => {
    if (isPageLoading) {
      setTimeout(() => {
        if (isPageLoading) dispatch(setShouldRenderLoader(true));
      }, loaderVisibilityDelay);
    } else {
      dispatch(setShouldRenderLoader(false));
    }
  }, [router, isPageLoading]);

  // Set first page load to complete
  useEffect(() => {
    if (isInitialLoading) {
      dispatch(setIsInitialLoading(false));
    }
  }, [isPageLoading]);

  // Lock body when we're moving
  useLockBodyScroll(isPageLoading);

  dlog('usePageLoader ➡️ isRouteLoading:', isRouteLoading);
  dlog('usePageLoader ➡️ isPageLoading:', isPageLoading);

  // Consider the page load complete when screen size is done loading
  useEffect(() => {
    if (!isRouteLoading && !isScreenSizeLoading) {
      dispatch(setIsPageLoading(false));
      dispatch(setShouldRenderLoader(false));
    }
  }, [isRouteLoading, isScreenSizeLoading]);

  useEffect(() => {
    const handleStart = (url: string) => {
      if (url !== router.asPath) {
        dispatch(setIsPageLoading(true));
        dispatch(setIsRouteLoading(true));
      }
    };

    const handleComplete = () => {
      dispatch(setIsRouteLoading(false));
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  // Custom definition of when the page is loaded. Eg. when images need to be loaded
  return {
    isPageLoading,
    isRouteLoading,
    isInitialLoading,
    shouldRenderLoader,
  };
}
