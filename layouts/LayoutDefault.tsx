import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IState } from 'state/reducers';
import LayoutWrapper, { LayoutProps } from './LayoutWrapper';

export default function LayoutDefault({
  router,
  pageProps,
  children,
}: LayoutProps) {
  const { isContentLoading } = useSelector((state: IState) => state.navigation);

  // Scroll to top on load
  useEffect(() => {
    if (isContentLoading && typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, [isContentLoading]);

  return (
    <LayoutWrapper router={router} pageProps={pageProps}>
      {children}
    </LayoutWrapper>
  );
}
