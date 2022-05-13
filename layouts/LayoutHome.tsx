import { HomeHeroSection } from 'components/home/HomeHeroSection';
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
  const { isMobile, isDesktop } = useScreenSize();

  // Remove header transparency on scroll
  const TRANSPARENCY_Y_CUTOFF_PX = 250;
  const { y: scrollY } = useWindowScroll();
  const [headerTransparent, setHeaderTransparent] = useState(true);

  useEffect(() => {
    setHeaderTransparent(scrollY < TRANSPARENCY_Y_CUTOFF_PX);
    return () => setHeaderTransparent(false);
  }, [scrollY]);

  // https://images.ctfassets.net/tq39z0nxr0bv/72wfIiMlOgPoJr4QOXBhK2/4d91421b86e344ae0847c1ef193d34e7/Rectangle_14_2x.png?h=250

  return (
    <LayoutWrapper
      router={router}
      pageProps={pageProps}
      headerProps={{
        transparency: headerTransparent ? 'full' : 'none',
        theme: headerTransparent ? 'dark' : 'light',
      }}
    >
      <div className="-mt-8">
        <HomeHeroSection />
      </div>

      <Component {...(pageProps as any)} />
    </LayoutWrapper>
  );
}
