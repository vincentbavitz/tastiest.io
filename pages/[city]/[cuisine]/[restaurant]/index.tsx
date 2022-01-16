import {
  CmsApi,
  dlog,
  ExperiencePost,
  RestaurantContentful,
  TastiestDish,
} from '@tastiest-io/tastiest-utils';
import DisplayCard from 'components/cards/DisplayCard';
import { Contained } from 'components/Contained';
import { HorizontalScrollable } from 'components/HorizontalScrollable';
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
import { ParsedUrlQuery } from 'querystring';
import React, { useMemo } from 'react';
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

  // As a percentage
  // prettier-ignore
  const heroIllustrationSizeRem = 
    isHuge ? 60 :
    isDesktop ? 50 : 
    isTablet ? 40 :
    isMobile ? 30 :
    45;

  const heroIllustrationH = 671;
  const heroIllustrationW = 1492;
  const heroIllustrationHeightRem =
    (heroIllustrationH / heroIllustrationW) * heroIllustrationSizeRem;

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
        <div className="flex flex-col py-4 pb-10 space-y-10">
          <RichBody body={restaurant.description}></RichBody>
        </div>
      </Contained>

      <div className="flex flex-col items-center">
        <Contained maxWidth={900}>
          <div className="pb-6">
            <SectionTitle>Award Winning Dishes</SectionTitle>
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

      {/* Image and map overlay */}
    </>
  );
};

RestaurantPage.layout = Layouts.RESTAURANT;
export default RestaurantPage;
