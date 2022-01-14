import { ArrowUpOutlined } from '@ant-design/icons';
import { CrumbProps } from '@tastiest-io/tastiest-ui';
import { titleCase } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { ArticleSaveShareWidget } from 'components/article/widgets/ArticleSaveShareWidget';
import { ExperienceOrderPanelDesktop } from 'components/article/widgets/ExperienceOrderPanelDesktop';
import { Contained } from 'components/Contained';
import BlockButton from 'components/restaurant/BlockButton';
import RestaurantMapBlock from 'components/RestaurantMapBlock';
import { useScreenSize } from 'hooks/useScreenSize';
import { InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getStaticProps } from 'pages/[city]/[cuisine]/[restaurant]/[slug]';
import React, { useEffect, useMemo, useState } from 'react';
import { useWindowScroll } from 'react-use';
import { generateStaticURL } from 'utils/routing';
import { UI } from '../../constants';
import { LayoutProps } from '../LayoutHandler';
import LayoutWrapper from '../LayoutWrapper';

export const DESKTOP_OFFER_WIDGET_WIDTH_PX = 325;
const ARTICLE_MAX_WIDTH_DESKTOP_PX = 1000;
const ARTICLE_MAX_WIDTH_MOBILE_PX = 650;

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

  const breadcrumbs: CrumbProps[] = useMemo(() => {
    const restaurantPath = generateStaticURL({
      city: restaurant.city,
      cuisine: restaurant.cuisine,
      restaurant: restaurant.uriName,
    }).as;

    return [
      { label: restaurant.name, href: restaurantPath },
      { label: 'Experiences', href: `${restaurantPath}/experiences` },
      {
        label: post.title.slice(0, 40),
        href: `${restaurantPath}/${post.slug}`,
      },
    ];
  }, [post.slug]);

  return (
    <div className={isDesktopLayout ? null : 'pb-14'}>
      <LayoutWrapper
        router={router}
        pageProps={pageProps}
        headerProps={{
          breadcrumbs,
          transparency: headerTransparent ? 'glass' : 'none',
        }}
      >
        <div className="relative mb-24">
          {/* Restaurant's Feature Video */}
          <div
            style={{
              maxHeight: '22rem',
            }}
            className="relative flex items-center overflow-hidden"
          >
            <div className="relative w-full z-0 h-0  aspect-w-10 sm:aspect-w-12 md:aspect-w-16 aspect-h-9">
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
            {/* <div className="absolute inset-0 z-20 opacity-10 bg-light"></div> */}
            <div className="absolute inset-0 flex items-end z-20">
              <div className="inline-block w-full h-48 bg-gradient-to-t from-light"></div>
            </div>
            <div className="absolute inset-0 flex items-end z-20">
              <div className="inline-block w-full h-32 bg-gradient-to-t from-light"></div>
            </div>
          </div>

          <div className="absolute inset-0 z-20 -bottom-24 flex flex-col items-center justify-end space-y-4">
            <Contained>
              <h1 className="text-3xl leading-none text-center font-medium sm:text-3xl text-primary font-primary">
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
    </div>
  );
}

const LayoutExperienceMobile = ({
  pageProps,
  children: Component,
}: LayoutProps<InferGetStaticPropsType<typeof getStaticProps>>) => {
  const { post, posts } = pageProps;

  const restaurantPageUrl = generateStaticURL({
    city: post.restaurant.city,
    cuisine: post.restaurant.cuisine,
    restaurant: post.restaurant.uriName,
  });

  const continueUrl = restaurantPageUrl.as + '/' + post.slug + '/continue';

  return (
    <div className="pb-16">
      <Contained maxWidth={ARTICLE_MAX_WIDTH_MOBILE_PX}>
        <div className="pt-2">
          <Component {...(pageProps as any)} />
        </div>

        <div className="flex flex-col space-y-10">
          <BlockButton {...restaurantPageUrl}>
            See more form {post.restaurant.name}
            <ArrowUpOutlined className="ml-2 text-lg transform rotate-45" />
          </BlockButton>

          <RestaurantMapBlock restaurant={post.restaurant} />
        </div>
      </Contained>

      <div
        style={{ zIndex: UI.Z_INDEX_FLOATING_COMPONENTS }}
        className="fixed bottom-0 left-0 right-0"
      >
        <Link href={continueUrl}>
          <a>
            <button
              className={clsx(
                'fixed bottom-0 left-0 right-0 w-full h-14 flex items-center justify-center',
                'bg-primary hover:bg-secondary duration-300',
                'text-light text-lg outline-none font-medium tracking-wide',
              )}
            >
              Book Now
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};

const LayoutExperienceDesktop = ({
  pageProps,
  children: Component,
}: LayoutProps<InferGetStaticPropsType<typeof getStaticProps>>) => {
  const { post, posts } = pageProps;

  const restaurantPageUrl = generateStaticURL({
    city: post.restaurant.city,
    cuisine: post.restaurant.cuisine,
    restaurant: post.restaurant.uriName,
  });

  return (
    <Contained tight maxWidth={ARTICLE_MAX_WIDTH_DESKTOP_PX}>
      <div className="flex space-x-8 pt-10">
        <div className="relative">
          <Component {...(pageProps as any)} />
        </div>

        <ExperienceOrderPanelDesktop
          deal={post.deal}
          slug={post.slug}
          posts={posts}
        />
      </div>

      <div className="flex flex-col space-y-10 pt-10 pb-10">
        <BlockButton {...restaurantPageUrl}>
          See more from {post.restaurant.name}
          <ArrowUpOutlined className="ml-2 text-lg transform rotate-45" />
        </BlockButton>

        <RestaurantMapBlock restaurant={post.restaurant} />
      </div>
    </Contained>
  );
};
