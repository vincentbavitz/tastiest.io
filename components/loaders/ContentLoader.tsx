import { LoadingOutlined } from '@ant-design/icons';
import clsx from 'clsx';
import { usePageLoader } from 'hooks/usePageLoader';
import { useRouter } from 'next/router';
import React, { ReactNode, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsContentLoading } from 'state/navigation';
import { IState } from 'state/reducers';
import { NAVIGATION, UI } from '../../constants';

interface Props {
  children: ReactNode;
  noSpinner?: boolean;
  spinnerAreaHeight?: number; // in px
}

export default function ContentLoader(props: Props) {
  const router = useRouter();
  const { children, noSpinner = false, spinnerAreaHeight } = props;

  const dispatch = useDispatch();
  const { isPageLoading } = usePageLoader();
  const { isContentLoading } = useSelector((state: IState) => state.navigation);
  const [isLoaderVisible, setIsLoaderVisible] = useState(isContentLoading);
  const [isSpinnnerVisible, setIsSpinnerVisible] = useState(false);

  // Spinner visible after a delay;
  // only when page is taking a long time to load
  useEffect(() => {
    if (isContentLoading) {
      setTimeout(() => {
        if (isContentLoading) {
          setIsSpinnerVisible(true);
        }
      }, 1500);
    } else {
      setIsSpinnerVisible(false);
    }
  }, [isContentLoading]);

  // Reset content loading status on route change
  useEffect(() => {
    router?.events?.on?.('routeChangeStart', () => {
      dispatch(setIsContentLoading(true));
    });
  }, [router, dispatch]);

  // Set to manually trigger content loaded on certain pages
  useEffect(() => {
    const manual = NAVIGATION.MANUAL_LOADING_TRIGGER_FOR_PATHS.some(path =>
      path.test(router?.pathname),
    );

    if (!manual && !isPageLoading) {
      dispatch(setIsContentLoading(false));
    }
  }, [router, dispatch, isPageLoading]);

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
            isContentLoading ? 'opacity-100' : 'opacity-0',
            isLoaderVisible ? 'block' : 'hidden',
          )}
        >
          {noSpinner ? null : (
            <div
              style={{
                height: `calc(100vh - ${UI.HEADER_HEIGHT_MOBILE_REM}rem)`,
                // height: spinnerAreaHeight
                //   ? `${spinnerAreaHeight}px`
                //   : 'calc(80vh - 10rem)',
              }}
              className={clsx(
                'absolute duration-500 inset-0 flex items-center justify-center',
                isSpinnnerVisible ? 'opacity-100' : 'opacity-0',
              )}
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
