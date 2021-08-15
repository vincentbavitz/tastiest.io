import { LoadingOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import { usePageLoader } from 'hooks/usePageLoader';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { useLockBodyScroll } from 'react-use';
import { setShouldRenderLoader } from 'state/navigation';
import { UI } from '../constants';

interface Props {
  onLoadComplete?: () => void;
}

export default function PageLoader(props: Props) {
  const { onLoadComplete } = props;

  const router = useRouter();
  const dispatch = useDispatch();

  const { isPageLoading, shouldRenderLoader } = usePageLoader({
    loaderVisibilityDelay: 500,
  });

  // Close the loader when the page is ready
  useEffect(() => {
    if (!isPageLoading) {
      dispatch(setShouldRenderLoader(false));
      onLoadComplete?.();
    }
  }, [isPageLoading, router]);

  useLockBodyScroll(shouldRenderLoader);

  if (typeof document === 'undefined' || !document.getElementById('loader')) {
    return null;
  }

  return ReactDOM.createPortal(
    shouldRenderLoader ? (
      <>
        <div
          style={{
            zIndex: UI.Z_INDEX_PAGE_LOADER,
          }}
          className={clsx(
            'fixed inset-0 duration-300 flex items-center justify-center bg-white',
            shouldRenderLoader ? 'opacity-100' : 'opacity-0',
          )}
        >
          <LoadingOutlined className="text-6xl fill-current text-primary" />
        </div>
      </>
    ) : null,
    document.getElementById('loader'),
  );
}
