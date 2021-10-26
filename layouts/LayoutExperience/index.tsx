import { titleCase } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { ArticleSaveShareWidget } from 'components/article/widgets/ArticleSaveShareWidget';
import ExperienceOrderPanelMobile from 'components/article/widgets/ExperienceOrderPanelMobile';
import { Contained } from 'components/Contained';
import RestaurantMapBlock from 'components/RestaurantMapBlock';
import { useScreenSize } from 'hooks/useScreenSize';
import { InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import { getStaticProps } from 'pages/[city]/[cuisine]/[restaurant]/[slug]';
import React, { useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';
import { LayoutProps } from '../LayoutHandler';
import LayoutWrapper from '../LayoutWrapper';
import FloatingOrderPanel from './FloatingOrderPanel';

export default function LayoutExperience({
  router,
  pageProps,
  children,
}: LayoutProps<InferGetStaticPropsType<typeof getStaticProps>>) {
  const { post } = pageProps;
  const { title, restaurant } = post;

  // Remove header transparency on scroll
  const TRANSPARENCY_Y_CUTOFF_PX = 250;
  const { y: scrollY } = useWindowScroll();
  const [headerTransparent, setHeaderTransparent] = useState(true);

  // Desktop layout with floating order panel on custom breakpoint.
  const DESKTOP_LAYOUT_BREAKPOINT_PX = 833;
  const { width: pageWidth, isLoading } = useScreenSize();
  const isDesktopLayout =
    !isLoading && pageWidth > DESKTOP_LAYOUT_BREAKPOINT_PX;

  useEffect(() => {
    setHeaderTransparent(scrollY < TRANSPARENCY_Y_CUTOFF_PX);
    return () => setHeaderTransparent(false);
  }, [scrollY]);

  return (
    <LayoutWrapper
      router={router}
      pageProps={pageProps}
      headerProps={{ transparency: headerTransparent ? 'glass' : 'none' }}
      withFooter={false}
    >
      {/* Restaurant's Feature Video */}
      <div
        style={{
          maxHeight: '28rem',
        }}
        className="relative flex items-center overflow-hidden"
      >
        <div className="relative w-full z-0 h-0 aspect-w-10 sm:aspect-w-12 md:aspect-w-16 aspect-h-9">
          <Image
            src={restaurant.backdropStillFrame.url}
            loading={'eager'}
            layout="fill"
            priority
          />
          <video
            loop
            muted
            autoPlay
            src={restaurant.backdropVideo.url}
            className={clsx('object-cover w-full h-full')}
            playsInline // prevent fullscreen on iOS
          />
        </div>

        {/* White overlays */}
        <div className="absolute inset-0 z-20 opacity-10 bg-light"></div>
        <div className="absolute inset-0 flex items-end z-20">
          <div className="inline-block w-full h-64 bg-gradient-to-t from-light"></div>
        </div>
        <div className="absolute inset-0 flex items-end z-20">
          <div className="inline-block w-full h-64 bg-gradient-to-t from-light"></div>
        </div>

        <div className="absolute inset-0 z-20 bottom-2 flex flex-col items-center justify-end space-y-4">
          <Contained>
            <h1 className="text-3xl text-center font-medium sm:text-3xl text-primary font-primary">
              {titleCase(title)}
            </h1>
          </Contained>

          <ArticleSaveShareWidget {...post} />
        </div>
      </div>

      <div className="relative">
        {isDesktopLayout ? (
          <LayoutExperienceDesktop router={router} pageProps={pageProps}>
            {children}
          </LayoutExperienceDesktop>
        ) : (
          <LayoutExperienceMobile router={router} pageProps={pageProps}>
            {children}
          </LayoutExperienceMobile>
        )}
      </div>
    </LayoutWrapper>
  );
}

const LayoutExperienceMobile = ({
  pageProps,
  children: Component,
}: LayoutProps<InferGetStaticPropsType<typeof getStaticProps>>) => {
  const { post, posts } = pageProps;

  return (
    <div className="pb-20">
      <Contained maxWidth={650}>
        <div className="flex space-x-4">
          <div className="">
            <Component {...(pageProps as any)} />
          </div>
        </div>

        <RestaurantMapBlock restaurant={post.restaurant}>.</RestaurantMapBlock>
      </Contained>

      <ExperienceOrderPanelMobile
        deal={post.deal}
        slug={post.slug}
        posts={posts}
      />
    </div>
  );
};

const LayoutExperienceDesktop = ({
  pageProps,
  children: Component,
}: LayoutProps<InferGetStaticPropsType<typeof getStaticProps>>) => {
  const { post, posts } = pageProps;

  return (
    <Contained>
      <div className="flex space-x-4">
        <div className="">
          <Component {...(pageProps as any)} />
        </div>

        <FloatingOrderPanel post={post} posts={posts} />
      </div>
    </Contained>
  );
};
