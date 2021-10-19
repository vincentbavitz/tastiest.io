import { LoadingOutlined } from '@ant-design/icons';
import { dlog } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { usePageLoader } from 'hooks/usePageLoader';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeAuthModal, collapseSearchOverlay } from 'state/navigation';
import { UI } from '../../constants';

/** Page loader used only on initial page load */
export default function PageLoader() {
  // Loading params
  const { isInitialLoading, isPageLoading } = usePageLoader();
  const [isDisplayed, setIsDisplayed] = useState(true);
  const [shouldRenderSpinner, setShouldRenderSpinner] = useState(false);

  // Consider page loaded when screen width is determined
  useEffect(() => {
    // Disappear after fade out
    if (!isInitialLoading) {
      // setTimeout(() => setIsDisplayed(false), 300);
      null;
    }
  }, [isInitialLoading]);

  // Display spinner if page is taking a long time
  useEffect(() => {
    setTimeout(() => {
      if (isInitialLoading) {
        setShouldRenderSpinner(true);
      }
    }, 1000);
  }, [isInitialLoading]);

  // Close the search overlay on route change.
  // Close auth modal on route change.
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(collapseSearchOverlay());
    dispatch(closeAuthModal());
  }, [isPageLoading]);

  dlog('PageLoader ➡️ isPageLoading:', isPageLoading);

  return isDisplayed ? (
    <div
      style={{ zIndex: UI.Z_INDEX_PAGE_LOADER }}
      className={clsx(
        'fixed inset-0 flex items-center justify-center bg-white',
        'pointer-events-none duration-300',
        isInitialLoading ? 'opacity-100' : 'opacity-0',
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
