import { LoadingOutlined } from '@ant-design/icons';
import { dlog } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { usePageLoader } from 'contexts/loader';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useLockBodyScroll } from 'react-use';
import { UI } from '../constants';

interface Props {
  override?: boolean;
  withPageDecorations?: boolean;
  onLoadComplete?: () => void;
}

export default function PageLoader(props: Props) {
  const { override, onLoadComplete } = props;
  const router = useRouter();

  const { isPageLoading } = usePageLoader();
  const [displayLoader, setDisplayLoader] = useState(false);

  // Delay the display of the loading so quick routes look instantaneous
  useEffect(() => {
    if (isPageLoading) {
      setTimeout(() => {
        setDisplayLoader(true);
      }, 500);
    }
  }, [isPageLoading]);

  dlog('PageLoader ➡️ isPageLoading:', isPageLoading);
  dlog('PageLoader ➡️ displayLoader:', displayLoader);

  // Close the loader when the page is ready
  useEffect(() => {
    if (router.isReady || !isPageLoading) {
      setDisplayLoader(false);
      onLoadComplete?.();
    }
  }, [isPageLoading, router]);

  useLockBodyScroll(override || displayLoader);

  if (typeof document === 'undefined' || !document.getElementById('loader')) {
    return null;
  }

  return ReactDOM.createPortal(
    override || displayLoader ? (
      <>
        <div
          style={{
            zIndex: UI.Z_INDEX_PAGE_LOADER,
          }}
          className={clsx(
            'fixed inset-0 duration-300 flex items-center justify-center bg-white',
            displayLoader || override ? 'opacity-100' : 'opacity-0',
          )}
        >
          <LoadingOutlined className="text-6xl fill-current text-primary" />
        </div>
      </>
    ) : null,
    document.getElementById('loader'),
  );
}
