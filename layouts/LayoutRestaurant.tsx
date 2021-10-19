import { titleCase } from '@tastiest-io/tastiest-utils';
import FollowButton from 'components/restaurant/FollowButton';
import TabbedContent from 'components/TabbedContent';
import { InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import { getStaticProps } from 'pages/[city]/[cuisine]/[restaurant]';
import React, { useEffect, useMemo, useState } from 'react';
import { useWindowScroll } from 'react-use';
import { generateStaticURL } from 'utils/routing';
import { LayoutProps } from './LayoutHandler';
import LayoutWrapper from './LayoutWrapper';

type RestaurantTabs = 'experiences' | 'about';

export default function LayoutRestaurant({
  router,
  pageProps,
  children: Component,
}: LayoutProps<InferGetStaticPropsType<typeof getStaticProps>>) {
  const { restaurant } = pageProps;

  // Remove header transparency on scroll
  const TRANSPARENCY_Y_CUTOFF_PX = 250;
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

  const isExperiencesPage = useMemo(
    () => router.asPath.includes('experiences'),
    [router.asPath],
  );

  const baseRestaurantPath = useMemo(
    () =>
      generateStaticURL({
        city: restaurant.city,
        cuisine: restaurant.cuisine,
        restaurant: restaurant.uriName,
      }),
    [restaurant],
  );

  const experiencesPath = useMemo(
    () => ({
      href: `${baseRestaurantPath.href}/experiences`,
      as: `${baseRestaurantPath.as}/experiences`,
    }),
    [baseRestaurantPath],
  );

  const [selectedTab, setSelectedTab] = useState<RestaurantTabs>(
    isExperiencesPage ? 'experiences' : 'about',
  );

  // Prefetch the other tab
  useEffect(() => {
    const path = isExperiencesPage ? experiencesPath : baseRestaurantPath;
    router.prefetch(path.href, path.as);
  }, [isExperiencesPage]);

  const setManualSelected = useMemo(
    () => (tabId: RestaurantTabs) => {
      setSelectedTab(tabId);
      const goingToExperiences = tabId === 'experiences';

      // Push to /experiences.
      if (goingToExperiences) {
        router.replace(experiencesPath.href, experiencesPath.as, {
          shallow: true,
        });

        return;
      }

      // Push to base restaurant page.
      router.replace(baseRestaurantPath.href, baseRestaurantPath.as, {
        shallow: true,
      });
    },
    [isExperiencesPage],
  );

  return (
    <LayoutWrapper
      router={router}
      pageProps={pageProps}
      headerProps={{ transparent: headerTransparent }}
    >
      {/* Restaurant's Feature Video */}
      <div
        style={{
          maxHeight: '28rem',
        }}
        className="relative flex items-center overflow-hidden"
      >
        <div className="relative w-full z-0 h-0 aspect-w-10 sm:aspect-w-12 md:aspect-w-16 aspect-h-9">
          <Image src={'/test.png'} loading={'eager'} layout="fill" priority />
          <video
            loop
            muted
            autoPlay
            src={'/test.mp4'}
            className="object-cover w-full h-full bg-gray-400"
          />
        </div>

        {/* White overlays */}
        <div className="absolute inset-0 z-20 opacity-10 bg-light"></div>
        <div className="absolute inset-0 flex items-end z-20">
          <div className="inline-block w-full h-64 bg-gradient-to-t from-light"></div>
        </div>
        <div className="absolute inset-0 flex items-end z-20">
          <div className="inline-block w-full h-64 opacity-50 bg-gradient-to-t from-light"></div>
        </div>

        <div className="absolute inset-0 z-20 bottom-2 flex flex-col items-center justify-end space-y-4">
          {/* Restaurant Name */}
          <h1 className="text-3xl font-medium sm:text-4xl text-primary font-primary">
            {titleCase(restaurant.name)} -{' '}
            {titleCase(restaurant.location.displayLocation)}
          </h1>

          {/* Follow and Notifications */}
          <FollowButton restaurant={restaurant} />
        </div>
      </div>

      <div className="pt-10"></div>

      <TabbedContent
        contained
        manualSelected={selectedTab}
        setManualSelected={setManualSelected}
      >
        {[
          {
            id: 'about',
            label: 'About',
            content: (
              <div className="">
                <Component {...(pageProps as any)} />
              </div>
            ),
          },
          {
            id: 'experiences',
            label: 'Experiences',
            content: (
              <div className="">
                <Component {...(pageProps as any)} />
              </div>
            ),
          },
        ]}
      </TabbedContent>
    </LayoutWrapper>
  );
}
