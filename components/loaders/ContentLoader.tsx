import { LoadingOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import { usePageLoader } from 'hooks/usePageLoader';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  triggerLoaded?: () => void;
}

export default function ContentLoader(props: Props) {
  const { children } = props;
  const { isPageLoading } = usePageLoader();

  return (
    <div>
      {/* Content Loader */}
      {isPageLoading && (
        <div
          style={{ minHeight: '500px' }}
          className="relative flex items-center justify-center flex-grow"
        >
          <LoadingOutlined className="-mt-20 text-6xl fill-current text-primary" />
        </div>
      )}

      {/* Hide content when page is loading */}
      <div className={clsx(isPageLoading && 'hidden')}>{children}</div>
    </div>
  );
}
