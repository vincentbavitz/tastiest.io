import { LoadingOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
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

  // Lock scrolling on loading
  useLockBodyScroll(loading);

  return loading ? (
    <div
      style={{
        zIndex: UI.Z_INDEX_PAGE_LOADER,
      }}
      className={clsx(
        'fixed inset-0 duration-150 flex items-center justify-center bg-black bg-opacity-50',
        displayLoading ? 'opacity-100' : 'opacity-0',
      )}
    >
      <LoadingOutlined className="text-6xl text-white fill-current" />
    </div>
  ) : null;
}
