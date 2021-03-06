import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button, CrumbProps } from '@tastiest-io/tastiest-ui';
import {
  dlog,
  generateStaticURL,
  titleCase,
} from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { Contained } from 'components/Contained';
import BlockButton from 'components/restaurant/BlockButton';
import FollowButton from 'components/restaurant/FollowButton';
import OpenTimes from 'components/restaurant/OpenTimes';
import RestaurantMapBlock from 'components/RestaurantMapBlock';
import { SectionTitle } from 'components/SectionTitle';
import TabbedContent from 'components/TabbedContent';
import { useScreenSize } from 'hooks/useScreenSize';
import { InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getStaticProps } from 'pages/[city]/[cuisine]/[restaurant]';
import React, { useEffect, useMemo, useState } from 'react';
import { useLockBodyScroll, useWindowScroll } from 'react-use';
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

  const { isMobile, isTablet, isDesktop } = useScreenSize();

  useEffect(() => {
    setHeaderTransparent(scrollY < TRANSPARENCY_Y_CUTOFF_PX);
    return () => setHeaderTransparent(false);
  }, [scrollY]);

  const isExperiencesPage = useMemo(
    () =>
      router._inFlightRoute
        ? router._inFlightRoute.includes('experiences')
        : router.asPath.includes('experiences'),
    [router._inFlightRoute],
  );

  dlog('LayoutRestaurant ➡️ router.route:', router.route);
  dlog('LayoutRestaurant ➡️ router6.asPath:', router.asPath);
  dlog('LayoutRestaurant ➡️ router._inFlightRoute:', router._inFlightRoute);
  dlog('LayoutRestaurant ➡️ restaurant:', restaurant);

  const baseRestaurantPath = useMemo(
    () =>
      generateStaticURL({
        city: restaurant.city,
        cuisine: restaurant.cuisine,
        restaurant: restaurant.uri_name,
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

  // Stay up to date when tab changes outside of clicking context
  useEffect(() => {
    setSelectedTab(isExperiencesPage ? 'experiences' : 'about');
  }, [isExperiencesPage]);

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
          scroll: false,
        });

        return;
      }

      // Push to base restaurant page.
      router.replace(baseRestaurantPath.href, baseRestaurantPath.as, {
        shallow: true,
        scroll: false,
      });
    },
    [isExperiencesPage],
  );

  const breadcrumbs: CrumbProps[] = useMemo(() => {
    const currentPath = generateStaticURL({
      city: restaurant.city,
      cuisine: restaurant.cuisine,
      restaurant: restaurant.uri_name,
    }).as;

    const crumbs = [{ label: restaurant.name, href: currentPath }];

    if (isExperiencesPage) {
      crumbs.push({ label: 'Experiences', href: `${currentPath}/experiences` });
    }

    return crumbs;
  }, [isExperiencesPage]);

  // FIX ME CORRECT ME
  // Greyed out for Numa
  const isComingSoon = restaurant.name.includes('Numa');
  useLockBodyScroll(isComingSoon);

  return (
    <>
      {/* Greyed out for 'Coming soon' restaurants */}
      {isComingSoon ? (
        <div
          style={{ zIndex: 100000 }}
          className="flex fixed inset-0 flex-col gap-4 items-center justify-center bg-dark bg-opacity-75"
        >
          <div className="text-3xl font-medium text-white">
            {restaurant.name} Coming Soon
          </div>

          <Link href="/">
            <a className="no-underline">
              <Button size="large" prefix={<LeftOutlined />}>
                Take me back
              </Button>
            </a>
          </Link>
        </div>
      ) : null}

      <LayoutWrapper
        router={router}
        pageProps={pageProps}
        headerProps={{
          breadcrumbs,
          transparency: headerTransparent ? 'glass' : 'none',
        }}
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
              src={restaurant.backdrop_still_frame.url}
              loading={'eager'}
              layout="fill"
              priority
            />
            <video
              loop
              muted
              autoPlay
              src={restaurant.backdrop_video.url}
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
            <div className="inline-block w-full h-64 opacity-50 bg-gradient-to-t from-light"></div>
          </div>

          <div className="absolute inset-0 z-20 bottom-2 flex flex-col items-center justify-end space-y-4">
            {/* Restaurant Name */}
            <h1 className="text-4xl font-semibold sm:text-4xl text-primary font-primary leading-none tracking-wide">
              {titleCase(restaurant.name)}
            </h1>

            <h2 className="text-base text-secondary leading-none font-secondary">
              {restaurant.location_display
                ? `${titleCase(restaurant.location_display)}`
                : null}
            </h2>

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
              label: 'Information',
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

        <Contained maxWidth={900}>
          <div className="pt-10 pb-4">
            <SectionTitle>Details</SectionTitle>
          </div>

          <div className="flex flex-col space-y-10 pb-10">
            <div className="flex flex-wrap gap-10 w-full">
              <div
                className={clsx(
                  'flex items-end',
                  !isDesktop ? 'flex-grow' : '',
                )}
              >
                <OpenTimes restaurantId={restaurant.id} wide small />
              </div>
            </div>

            <div className="pt-2">
              <RestaurantMapBlock restaurant={restaurant} />
            </div>

            <div>
              {/* <div
                style={{
                  height: isMobile ? '8rem' : '15rem',
                  minWidth: '19rem',
                }}
                className="relative flex-grow mb-10"
              >
                <Image
                  src={restaurant.hero_illustration.url}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="bottom"
                />
              </div> */}

              {isExperiencesPage ? (
                <BlockButton
                  href={baseRestaurantPath.href}
                  as={baseRestaurantPath.as}
                  autoHeight
                >
                  <div className="flex items-center justify-between relative py-4 leading-normal w-full">
                    <LeftOutlined className="text-2xl" />

                    <div className="flex space-x-4 items-center">
                      <div className="text-right">
                        Learn more about <br />
                        <span className="font-medium">{restaurant.name}</span>
                      </div>

                      <div
                        style={{
                          filter:
                            'drop-shadow(0 0 3px rgba(255, 255, 255, 0.5))',
                        }}
                        className="relative w-14 h-14 mx-2"
                      >
                        <Image
                          src={restaurant.profile_picture.url}
                          layout="fill"
                          className="rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </BlockButton>
              ) : (
                <BlockButton
                  autoHeight
                  href={experiencesPath.href}
                  as={experiencesPath.as}
                >
                  <div className="flex items-center justify-between relative py-4 leading-normal w-full">
                    <div className="flex space-x-2 items-center">
                      <div
                        style={{
                          filter:
                            'drop-shadow(0 0 3px rgba(255, 255, 255, 0.5))',
                        }}
                        className="relative w-14 h-14 mx-2"
                      >
                        <Image
                          src={restaurant.profile_picture.url}
                          layout="fill"
                          className="rounded-full"
                        />
                      </div>

                      <div className="">
                        Book an experience at <br />
                        <span className="font-semibold text-xl leading-5">
                          {restaurant.name}
                        </span>
                      </div>
                    </div>

                    <RightOutlined className="text-2xl" />
                  </div>
                </BlockButton>
              )}
            </div>
          </div>
        </Contained>
      </LayoutWrapper>
    </>
  );
}
