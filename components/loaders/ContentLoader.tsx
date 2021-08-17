import { LoadingOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import React, { ReactNode, useEffect, useState } from 'react';
import { UI } from '../../constants';

interface Props {
  children: ReactNode;
  isContentLoading: boolean;
  timeout?: number; // automatically close after (ms)
  noSpinner?: boolean;
  spinnerAreaHeight?: number; // in px
}

export default function ContentLoader(props: Props) {
  const {
    timeout,
    children,
    isContentLoading,
    noSpinner = false,
    spinnerAreaHeight,
  } = props;

  const [isLoaderVisible, setIsLoaderVisible] = useState(isContentLoading);

  // Set display to none after it fades out
  useEffect(() => {
    if (!isContentLoading) {
      setTimeout(() => {
        if (!isContentLoading) {
          setIsLoaderVisible(false);
        }
      }, 500);
    } else {
      setIsLoaderVisible(true);
    }
  }, [isContentLoading]);

  return (
    <div>
      {/* Hide content when page is loading */}
      <div className={clsx('relative')}>
        {/* Content Loader */}
        <div
          style={{ zIndex: isLoaderVisible ? UI.Z_INDEX_PAGE_LOADER : 0 }}
          className={clsx(
            'absolute inset-0 bg-white duration-300 pointer-events-none',
            isContentLoading ? 'opacity-75' : 'opacity-0',
            isLoaderVisible ? 'block' : 'hidden',
          )}
        >
          {!noSpinner && (
            <div
              style={{
                height: spinnerAreaHeight
                  ? `${spinnerAreaHeight}px`
                  : 'calc(90vh - 10rem)',
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <LoadingOutlined className="-mt-20 text-6xl fill-current text-primary" />
            </div>
          )}
        </div>

        {children}
      </div>
    </div>
  );
}
