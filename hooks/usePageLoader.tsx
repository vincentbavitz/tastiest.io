import { dlog } from '@tastiest-io/tastiest-utils';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsPageLoading, setShouldRenderLoader } from 'state/navigation';
import { IState } from 'state/reducers';
import { NAVIGATION } from '../constants';

interface UsePageLoaderOptions {
  // Delay of the Loader popup (in ms) so quick routes look instantaneous
  loaderVisibilityDelay?: number;
}

interface UsePageLoaderReturn {
  isPageLoading: boolean;
  shouldRenderLoader: boolean | null;

  // Manually set when the page is considered loaded.
  // This will only override isPageLoading when `manual` is set.
  triggerPageIsLoaded?: () => void;
}

export function usePageLoader(
  options?: UsePageLoaderOptions,
): UsePageLoaderReturn {
  const { loaderVisibilityDelay = 500 } = options ?? {};

  const router = useRouter();
  const dispatch = useDispatch();

  const { isPageLoading, shouldRenderLoader } = useSelector(
    (state: IState) => state.navigation,
  );

  // Delay the display of the loading so quick routes look instantaneous
  useEffect(() => {
    if (isPageLoading) {
      setTimeout(() => {
        if (isPageLoading) {
          dispatch(setShouldRenderLoader(true));
        }
      }, loaderVisibilityDelay);
    }
  }, [isPageLoading]);

  // Manual trigger for isPageLoading
  const triggerPageIsLoaded = useCallback(() => {
    dlog('usePageLoader: Triggered Manual Function');

    dispatch(setIsPageLoading(false));
    dispatch(setShouldRenderLoader(false));
  }, [router, dispatch]);

  dlog(
    'usePageLoader ➡️ isPageLoading,shouldRenderLoader:',
    isPageLoading,
    shouldRenderLoader,
  );

  useEffect(() => {
    const handleStart = (url: string) => {
      if (url !== router.asPath) dispatch(setIsPageLoading(true));
    };

    const handleComplete = () => {
      const isManualPath = NAVIGATION.MANUAL_LOADING_TRIGGER_FOR_PATHS.some(
        path => path.test(router.pathname),
      );

      dlog('usePageLoader ➡️ isManualPath:', isManualPath);

      // If done manually, leave it
      if (isManualPath) {
        return;
      }

      triggerPageIsLoaded();
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
  return { isPageLoading, shouldRenderLoader, triggerPageIsLoaded };
}
