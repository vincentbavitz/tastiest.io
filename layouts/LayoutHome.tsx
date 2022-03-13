import clsx from 'clsx';
import { HomeHeroSection } from 'components/home/HomeHeroSection';
import { useScreenSize } from 'hooks/useScreenSize';
import { InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
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

  return (
    <LayoutWrapper
      router={router}
      pageProps={pageProps}
      headerProps={{
        transparency: headerTransparent ? 'glass' : 'none',
        theme: headerTransparent ? 'dark' : 'light',
      }}
    >
      <div className="">
        <div style={{}} className="relative flex items-center overflow-hidden">
          <div className="absolute inset-0 w-full z-0 h-auto">
            <Image
              src={
                'https://images.ctfassets.net/tq39z0nxr0bv/t9LBT7P7dVavzwRaECbVn/5d0b7e83c3039a648bd914fb46c0758f/Numa_carousel_2.png'
              }
              layout="fill"
              loading={'eager'}
              priority
            />
            <video
              loop
              muted
              autoPlay
              src={''}
              className={clsx('object-cover w-full h-full')}
              playsInline // prevent fullscreen on iOS
            />
          </div>

          <div
            style={{ marginLeft: '5vw' }}
            className={clsx(
              'flex items-center justify-start w-full z-50',
              isDesktop ? 'mt-28 mb-12' : 'mt-24 mb-14',
            )}
          >
            <HomeHeroSection />
          </div>
        </div>

        <Component {...(pageProps as any)} />
      </div>
    </LayoutWrapper>
  );
}
