import {
  CmsApi,
  dlog,
  ExperiencePost,
  RestaurantContentful,
  TastiestDish,
} from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import DisplayCard from 'components/cards/DisplayCard';
import { Contained } from 'components/Contained';
import { HorizontalScrollable } from 'components/HorizontalScrollable';
import MobileBottomButton from 'components/MobileBottomButton';
import VideoCarousel from 'components/restaurant/VideoCarousel';
import { RichBody } from 'components/RichBody';
import { SectionTitle } from 'components/SectionTitle';
import { useScreenSize } from 'hooks/useScreenSize';
import { Layouts } from 'layouts/LayoutHandler';
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';
import React, { useMemo, useRef } from 'react';
import { useWindowScroll } from 'react-use';
import { generateTitle } from 'utils/metadata';
import { generateStaticURL } from 'utils/routing';

export interface IRestaurantPath {
  params: {
    city: string;
    cuisine: string;
    restaurant: string;
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const cms = new CmsApi();

  let page = 1;
  let foundAllRestaurants = false;
  const restaurants: RestaurantContentful[] = [];

  // Contentful only allows 100 at a time
  while (!foundAllRestaurants) {
    const { restaurants: _restaurants } = await cms.getRestaurants(100, page);

    dlog('index ➡️ restaurants:', restaurants);
    if (_restaurants.length === 0) {
      foundAllRestaurants = true;
      continue;
    }

    restaurants.push(..._restaurants);
    page++;
  }

  const paths: IRestaurantPath[] = restaurants.map(restaurant => ({
    params: {
      city: restaurant.city.toLowerCase(),
      cuisine: restaurant.cuisine.toLowerCase(),
      restaurant: restaurant.uriName.toLowerCase(),
    },
  }));

  // Blocking ensures that if the path isn't cached,
  // we build it before serving.
  return { paths, fallback: 'blocking' };
};

export const getStaticProps = async (
  context: GetStaticPropsContext<ParsedUrlQuery>,
) => {
  const cms = new CmsApi();

  const restaurantUriName = context.params?.restaurant;
  const restaurant = await cms.getRestaurantFromUriName(
    String(restaurantUriName),
  );

  dlog('index ➡️ restaurant:', restaurant);

  if (!restaurant) {
    return {
      // returning as such to keep the props types consistent
      props: {
        restaurant: null as RestaurantContentful,
        tastiestDishes: null as TastiestDish[],
        posts: null as ExperiencePost[],
      },
      notFound: true,
    };
  }

  // Get posts from restaurant
  const { posts } = await cms.getPostsOfRestaurant(restaurant.uriName, 100);

  // Get the restaurant's Tastiest Dishes
  const { dishes: tastiestDishes } = await cms.getTastiestDishesOfRestaurant(
    restaurant.uriName,
  );

  return {
    props: { restaurant, tastiestDishes, posts },
    revalidate: 360,
  };
};

const RestaurantPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>,
) => {
  const { restaurant, tastiestDishes, posts } = props;
  const { isMobile, isTablet, isDesktop, isHuge } = useScreenSize();

  const experiencesPath = useMemo(() => {
    const baseRestaurantPath = generateStaticURL({
      city: restaurant.city,
      cuisine: restaurant.cuisine,
      restaurant: restaurant.uriName,
    });

    return {
      href: `${baseRestaurantPath.href}/experiences`,
      as: `${baseRestaurantPath.as}/experiences`,
    };
  }, [restaurant]);

  dlog('index ➡️ posts:', posts);
  dlog('index ➡️ tastiestDishes:', tastiestDishes);
  dlog('index ➡️ restaurant.video:', restaurant);

  // Get scroll positions of each of the CTA box locations
  const refGeneralInfo = useRef<HTMLDivElement>(null);
  const refVideosSummary = useRef<HTMLDivElement>(null);
  const refBookExperience = useRef<HTMLDivElement>(null);
  const refRecommendedDishes = useRef<HTMLDivElement>(null);

  const { y: windowScrollY } = useWindowScroll();

  const scrollLocations = useMemo(() => {
    // prettier-ignore
    return {
      generalInfo: refGeneralInfo.current?.getBoundingClientRect().top,
      videosSummary: refVideosSummary.current?.getBoundingClientRect().top,
      bookExperience: refBookExperience.current?.getBoundingClientRect().top,
      recommendedDishes: refRecommendedDishes.current?.getBoundingClientRect().top,
    };
  }, [
    windowScrollY,
    refGeneralInfo,
    refVideosSummary,
    refBookExperience,
    refRecommendedDishes,
  ]);

  dlog('index ➡️ scrollLocations:', scrollLocations);

  return (
    <>
      <Head>
        <title>{generateTitle(restaurant.name)}</title>
      </Head>

      <NextSeo
        title={generateTitle(restaurant.name)}
        description={restaurant.meta.description}
        openGraph={{
          title: generateTitle(restaurant.name),
          description: restaurant.meta.description,
          images: [
            {
              url: restaurant.meta?.image?.url,
              width: 1200,
              height: 630,
              alt: restaurant.meta.description,
            },
          ],
        }}
      />

      <Contained maxWidth={900}>
        <div
          className={clsx(
            'relative w-full grid',
            isMobile ? 'grid-cols-2 gap-2' : 'grid-cols-2 gap-6',
          )}
        >
          <RestaurantCTAButton
            href={experiencesPath.as}
            label="Book an experience"
          />

          <RestaurantCTAButton label="Videos & Summary" />

          <RestaurantCTAButton
            scrollTo={scrollLocations.generalInfo}
            label="Details"
          />

          <RestaurantCTAButton label="Recommended Dishes" />
        </div>
      </Contained>

      <div className="h-14"></div>

      <VideoCarousel />

      <div className="w-full h-16 flex flex-col items-center justify-center">
        <SectionTitle>Summary</SectionTitle>
      </div>

      <div ref={refGeneralInfo}>
        <Contained maxWidth={900}>
          <div className="flex flex-col py-4 pb-10 space-y-10">
            <RichBody body={restaurant.description}></RichBody>
          </div>
        </Contained>
      </div>

      <div className="flex flex-col items-center">
        <Contained maxWidth={900}>
          <div className="pb-6">
            <SectionTitle>Recommended Dishes</SectionTitle>
          </div>
        </Contained>

        <div style={{ width: '100%', maxWidth: '900px' }} className="-mt-6">
          <HorizontalScrollable noPadding verticalBuffer={6} spacing={6}>
            {tastiestDishes.map(dish => {
              return (
                <div key={dish.id} style={{ width: '250px' }}>
                  <DisplayCard
                    header={dish.name}
                    description={dish.description}
                    image={dish.image}
                  />
                </div>
              );
            })}
          </HorizontalScrollable>
        </div>
      </div>

      {!isDesktop ? (
        <MobileBottomButton href={experiencesPath.as}>
          Book an experience
        </MobileBottomButton>
      ) : null}
    </>
  );
};

interface RestaurantCTAButtonProps {
  label: string;
  href?: string;
  scrollTo?: number;
  backdropImageSrc?: string;
}

const RestaurantCTAButton = (props: RestaurantCTAButtonProps) => {
  const { href } = props;

  return href ? (
    <Link href={href}>
      <a className="no-underline">
        <RestaurantCTAButtonInner {...props} />
      </a>
    </Link>
  ) : (
    <RestaurantCTAButtonInner {...props} />
  );
};

const RestaurantCTAButtonInner = (props: RestaurantCTAButtonProps) => {
  const { label, href, scrollTo } = props;

  const { isMobile } = useScreenSize();

  const scrollToCtaRef = () => {
    window.scrollTo(0, scrollTo);
    // const c = document.documentElement.scrollTop || document.body.scrollTop;
    // if (c > scrollTo) {
    //   window.requestAnimationFrame(scrollToCtaRef);
    //   window.scrollTo(0, c - c / 8);
    // }
  };

  return (
    <div
      onClick={href ? null : scrollToCtaRef}
      className={clsx(
        'relative flex items-center justify-center w-full h-32 p-4',
        'font-medium uppercase tracking-wide text-light',
        'cursor-pointer',
        'duration-300 filter hover:brightness-125',
      )}
    >
      <div className="absolute inset-0 bg-primary"></div>

      {/* Border */}
      <div className="absolute top-1 bottom-1 left-1 right-1 border-4 border-light "></div>

      <div
        className={clsx(
          'z-10 font-medium tracking-wide mx-2 text-center w-full',
          isMobile ? 'text-xs' : 'text-lg',
        )}
      >
        {label}
      </div>
    </div>
  );
};

RestaurantPage.layout = Layouts.RESTAURANT;
export default RestaurantPage;
