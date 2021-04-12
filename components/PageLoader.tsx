import { LoadingOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import { useScreenSize } from 'hooks/useScreenSize';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useLockBodyScroll } from 'react-use';
import { UI } from '../constants';

export default function PageLoader() {
  const [loading, setLoading] = useState(false);
  const [displayLoading, setDisplayLoading] = useState(false);
  const router = useRouter();

  // Close mobile overlay once we move to /checkout
  router?.events?.on('routeChangeComplete', () => {
    setLoading(false);
    setDisplayLoading(false);
  });

  // Loading overlay for feedback
  router?.events?.on('routeChangeStart', () => {
    // Delay the display of the loading so quick routes look instantaneous
    setLoading(true);
    setTimeout(() => setDisplayLoading(true), 500);
  });

  // Hide the page until we have the screen width
  const { isLoaded } = useScreenSize();
  useEffect(() => {
    if (isLoaded) {
      setLoading(false);
      setDisplayLoading(false);
    } else {
      setLoading(true);
      setDisplayLoading(true);
    }
  }, [isLoaded]);

  // Lock scrolling on loading
  useLockBodyScroll(loading);

  return loading ? (
    <div
      style={{
        zIndex: UI.Z_INDEX_PAGE_LOADER,
      }}
      className={clsx(
        'fixed inset-0 duration-150 flex items-center justify-center bg-white bg-opacity-50',
        displayLoading ? 'opacity-100' : 'opacity-0',
      )}
    >
      <LoadingOutlined className="text-6xl fill-current text-primary" />
    </div>
  ) : null;
}
