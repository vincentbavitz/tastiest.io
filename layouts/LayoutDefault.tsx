import { useScreenSize } from 'hooks/useScreenSize';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IState } from 'state/reducers';
import { UI } from '../constants';
import { LayoutProps } from './LayoutHandler';
import LayoutWrapper from './LayoutWrapper';

export default function LayoutDefault({
  router,
  pageProps,
  children: Component,
}: LayoutProps) {
  const { isDesktop } = useScreenSize();
  const { isContentLoading } = useSelector((state: IState) => state.navigation);

  // Scroll to top on load
  useEffect(() => {
    if (isContentLoading && typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, [isContentLoading]);

  return (
    <LayoutWrapper router={router} pageProps={pageProps}>
      {/* Header Spacer */}
      <div
        style={{
          paddingTop: `${
            isDesktop
              ? UI.HEADER_HEIGHT_DESKTOP_REM
              : UI.HEADER_HEIGHT_MOBILE_REM
          }rem`,
        }}
      ></div>

      {/* If you'd like an element to stick to the footer in your page, simply wrap the */}
      {/* top <div> and the button <div> in <></> and they'll be split */}
      <div className="relative flex flex-col justify-between flex-grow bg-light text-dark font-secondary">
        {/* All pages control when they are considered loaded */}
        <Component {...pageProps} />
      </div>
    </LayoutWrapper>
  );
}
