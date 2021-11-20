import {
  CmsApi,
  dlog,
  IPost,
  IRestaurant,
  ITastiestDish,
} from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { CardGrid } from 'components/cards/CardGrid';
import TastiestDishRow from 'components/cards/TastiestDishRow';
import { Contained } from 'components/Contained';
import { RichBody } from 'components/RichBody';
import { SectionTitle } from 'components/SectionTitle';
import { YouTubeVideo } from 'components/YouTubeVideo';
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
  const restaurants: IRestaurant[] = [];

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
        restaurant: null as IRestaurant,
        tastiestDishes: null as ITastiestDish[],
        posts: null as IPost[],
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
        description={`The Tastiest deals at ${restaurant.name}`}
        openGraph={{
          title: generateTitle(restaurant.name),
          description: `The Tastiest deals at ${restaurant.name}`,
          images: [
            {
              url: restaurant.meta?.image?.url,
              width: 1200,
              height: 630,
              alt: `Tastiest's partner ${restaurant.name}`,
            },
          ],
        }}
      />

      <Contained maxWidth={900}>
        <div className="flex flex-col py-4 pb-10 space-y-10">
          <div className="flex lg:flex-row flex-col gap-6">
            <div className="flex-1">
              <YouTubeVideo url={restaurant.video.url} />

              {restaurant.video.displayTitle ? (
                <h4 className="pt-2 text-xl font-medium text-gray-700">
                  {restaurant.video.displayTitle}
                </h4>
              ) : null}
            </div>

            <div className="flex-1">
              <h4 className={clsx('text-2xl pb-2 text-primary font-primary')}>
                About {restaurant.name}
              </h4>

              <div className="">
                <RichBody body={restaurant.description}></RichBody>
              </div>
            </div>
          </div>
        </div>
      </Contained>

      <div className="pb-10">
        <Contained maxWidth={900}>
          <div className="pb-6">
            <SectionTitle>Award Winning Dishes</SectionTitle>
          </div>
        </Contained>

        <CardGrid horizontalScroll rowLimit={1}>
          {tastiestDishes.map(dish => (
            <TastiestDishRow key={dish.id} {...dish} />
          ))}
        </CardGrid>
      </div>

      {/* Image and map overlay */}
    </>
  );
};

RestaurantPage.layout = Layouts.RESTAURANT;
export default RestaurantPage;
