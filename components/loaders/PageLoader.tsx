import { LoadingOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import { usePageLoader } from 'hooks/usePageLoader';
import { useScreenSize } from 'hooks/useScreenSize';
import React, { useEffect, useState } from 'react';
import { UI } from '../../constants';

/** Page loader used only on initial page load */
export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDisplayed, setIsDisplayed] = useState(true);
  const [shouldRenderSpinner, setShouldRenderSpinner] = useState(false);

  // Loading params
  const { isPageLoading } = usePageLoader();
  const { isLoading: isScreenSizeLoading } = useScreenSize();

  // Consider page loaded when screen width is determined
  useEffect(() => {
    if (!isScreenSizeLoading && !isPageLoading) {
      setIsLoading(false);

      // Disappear after fade out
      setTimeout(() => setIsDisplayed(false), 300);
    }
  }, [isScreenSizeLoading, isPageLoading]);

  // Display spinner if page is taking a long time
  useEffect(() => {
    setTimeout(() => {
      if (isLoading) {
        setShouldRenderSpinner(true);
      }
    }, 1000);
  }, []);

  return isDisplayed ? (
    <div
      style={{ zIndex: UI.Z_INDEX_PAGE_LOADER }}
      className={clsx(
        'fixed inset-0 flex items-center justify-center bg-white',
        'pointer-events-none duration-300',
        isLoading ? 'opacity-100' : 'opacity-0',
      )}
    >
      <LoadingOutlined
        className={clsx(
          'text-6xl fill-current duration-150 text-primary',
          shouldRenderSpinner ? 'opacity-100' : 'opacity-0',
        )}
      />
    </div>
  ) : null;
}
