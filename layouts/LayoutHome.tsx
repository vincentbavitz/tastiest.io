import { InferGetStaticPropsType } from 'next';
import { getStaticProps } from 'pages';
import React, { useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';
import { LayoutProps } from './LayoutHandler';
import LayoutWrapper from './LayoutWrapper';

export default function LayoutHome({
  router,
  pageProps,
  children: Component,
}: LayoutProps<InferGetStaticPropsType<typeof getStaticProps>>) {
  // Remove header transparency on scroll
  const TRANSPARENCY_Y_CUTOFF_PX = 175;
  const { y: scrollY } = useWindowScroll();
  const [headerTransparent, setHeaderTransparent] = useState(true);

  useEffect(() => {
    if (scrollY > TRANSPARENCY_Y_CUTOFF_PX) {
      setHeaderTransparent(false);
    } else {
      setHeaderTransparent(true);
    }

    return () => setHeaderTransparent(false);
  }, [scrollY]);

  return (
    <LayoutWrapper
      router={router}
      pageProps={pageProps}
      headerProps={{
        transparency: headerTransparent ? 'full' : 'none',
        theme: headerTransparent ? 'dark' : 'light',
      }}
    >
      <Component {...(pageProps as any)} />
    </LayoutWrapper>
  );
}
