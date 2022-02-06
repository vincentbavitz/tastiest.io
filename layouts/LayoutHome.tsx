import { useScreenSize } from 'hooks/useScreenSize';
import { InferGetServerSidePropsType } from 'next';
import { getServerSideProps } from 'pages';
import React, { useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';
import { LayoutProps } from './LayoutHandler';
import LayoutWrapper from './LayoutWrapper';

export default function LayoutHome({
  router,
  pageProps,
  children: Component,
}: LayoutProps<InferGetServerSidePropsType<typeof getServerSideProps>>) {
  const { isDesktop } = useScreenSize();

  // Remove header transparency on scroll
  const TRANSPARENCY_GLASS_CUTOFF_PX = 150;
  const { y: scrollY } = useWindowScroll();
  const [headerTransparency, setHeaderTransparency] = useState<
    'glass' | 'none' | 'full'
  >('full');

  useEffect(() => {
    if (scrollY > TRANSPARENCY_GLASS_CUTOFF_PX) {
      setHeaderTransparency('none');
    } else {
      setHeaderTransparency('glass');
    }

    return () => setHeaderTransparency('none');
  }, [scrollY]);

  return (
    <LayoutWrapper
      router={router}
      pageProps={pageProps}
      headerProps={{
        transparency: isDesktop ? 'none' : headerTransparency,
        theme: isDesktop
          ? 'light'
          : headerTransparency === 'glass'
          ? 'dark'
          : 'light',
      }}
    >
      <Component {...(pageProps as any)} />
    </LayoutWrapper>
  );
}
