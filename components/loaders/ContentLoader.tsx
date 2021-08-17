import { LoadingOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { UI } from '../../constants';

interface Props {
  children: ReactNode;
  isContentLoading: boolean;
  noSpinner?: boolean;
}

export default function ContentLoader(props: Props) {
  const { children, isContentLoading, noSpinner = false } = props;

  return (
    <div>
      {/* Hide content when page is loading */}
      <div className={clsx('relative')}>
        {/* Content Loader */}
        <div
          style={{ zIndex: UI.Z_INDEX_PAGE_LOADER }}
          className={clsx(
            'absolute inset-0 bg-white duration-300 pointer-events-none',
            isContentLoading ? 'opacity-50' : 'opacity-0',
          )}
        >
          {!noSpinner && (
            <div
              style={{ height: '80vh' }}
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
