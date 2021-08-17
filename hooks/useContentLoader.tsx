import router from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  setIsPageLoading,
  setIsRouteLoading,
  setShouldRenderLoader,
} from 'state/navigation';
import { usePageLoader } from './usePageLoader';

type LoaderMode = 'instant' | 'auto' | 'manual';

interface UseContentLoaderReturn {
  // Manually set when the page is considered loaded.
  // This will only override isPageLoading when `manual` is set.
  isContentLoading: boolean;
  triggerContentLoaded?: () => void;
}

/** Content Loader manges the page content such as images */
export default function useContentLoader(
  mode: LoaderMode = 'auto',
): UseContentLoaderReturn {
  const dispatch = useDispatch();
  const { isPageLoading, isRouteLoading } = usePageLoader();
  const [isContentLoading, setIsContentLoading] = useState(
    mode === 'instant' ? false : isPageLoading,
  );

  // Manual trigger for isPageLoading
  const triggerContentLoaded = useCallback(() => {
    dispatch(setIsPageLoading(false));
    dispatch(setIsRouteLoading(false));
    dispatch(setShouldRenderLoader(false));
    setIsContentLoading(false);
  }, [router, dispatch]);

  // Automatically detect when the page is loaded.
  useEffect(() => {
    if (
      mode === 'instant' ||
      (mode === 'auto' && !isPageLoading && !isRouteLoading)
    ) {
      triggerContentLoaded();
    }
  }, [isPageLoading, isRouteLoading]);

  return { isContentLoading, triggerContentLoaded };
}
