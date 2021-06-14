import { LoadingOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import { useScreenSize } from 'hooks/useScreenSize';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useLockBodyScroll } from 'react-use';
import { UI } from '../constants';

export default function PageLoader() {
  const [routeLoading, setRouteLoading] = useState(false);
  const [displayRouterLoading, setDisplayRouterLoading] = useState(false);
  const router = useRouter();

  // Hide the page until we have the screen width
  const { isLoading: isScreenSizeLoading } = useScreenSize();
  const isLoading = isScreenSizeLoading || routeLoading;

  router?.events?.on('routeChangeComplete', () => {
    setRouteLoading(false);
    setDisplayRouterLoading(false);
  });

  // Loading overlay for feedback
  router?.events?.on('routeChangeStart', () => {
    // Delay the display of the loading so quick routes look instantaneous
    setRouteLoading(true);
    setTimeout(() => setDisplayRouterLoading(true), 500);
  });

  useLockBodyScroll(isScreenSizeLoading);

  return isLoading ? (
    <div
      style={{
        zIndex: UI.Z_INDEX_PAGE_LOADER,
      }}
      className={clsx(
        'fixed inset-0 duration-150 flex items-center justify-center bg-white',
        displayRouterLoading || isScreenSizeLoading
          ? 'opacity-100'
          : 'opacity-0',
        isScreenSizeLoading ? 'bg-opacity-100' : 'bg-opacity-50',
      )}
    >
      <LoadingOutlined className="text-6xl fill-current text-primary" />
    </div>
  ) : null;
}
