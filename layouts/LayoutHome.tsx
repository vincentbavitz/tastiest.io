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
  const TRANSPARENCY_GLASS_CUTOFF_PX = 10;
  const TRANSPARENCY_Y_CUTOFF_PX = 250;
  const { y: scrollY } = useWindowScroll();
  const [headerTransparency, setHeaderTransparency] = useState<
    'glass' | 'none' | 'full'
  >('full');

  useEffect(() => {
    if (scrollY > TRANSPARENCY_GLASS_CUTOFF_PX) {
      if (scrollY > TRANSPARENCY_Y_CUTOFF_PX) {
        setHeaderTransparency('none');
      } else {
        setHeaderTransparency('glass');
      }
    } else {
      setHeaderTransparency('full');
    }

    return () => setHeaderTransparency('none');
  }, [scrollY]);

  return (
    <LayoutWrapper
      router={router}
      pageProps={pageProps}
      headerProps={{
        transparency: headerTransparency,
        theme: headerTransparency === 'none' ? 'light' : 'light',
      }}
    >
      <Component {...(pageProps as any)} />
    </LayoutWrapper>
  );
}
