import {
  CmsApi,
  dlog,
  ExperiencePost,
  RestaurantContentful,
  RestaurantDetails,
  TastiestDish,
} from '@tastiest-io/tastiest-utils';
import { ExperienceCard } from 'components/cards/ExperienceCard';
import { Contained } from 'components/Contained';
import { useScreenSize } from 'hooks/useScreenSize';
import { Layouts } from 'layouts/LayoutHandler';
import {} from 'layouts/LayoutRestaurant';
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { IRestaurantPath } from '.';
// import {
//   getStaticPaths as getRestaurantStaticPaths,
//   getStaticProps as getRestaurantStaticProps,
// } from '.';

// export const getStaticPaths = (context: GetStaticPathsContext) =>
//   getRestaurantStaticPaths(context);

// export const getStaticProps = (context: GetStaticPropsContext) =>
//   getRestaurantStaticProps(context);

export const getStaticPaths: GetStaticPaths = async () => {
  const cms = new CmsApi(
    undefined,
    undefined,
    process.env.NODE_ENV as 'production' | 'development',
  );

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
  const cms = new CmsApi(
    undefined,
    undefined,
    process.env.NODE_ENV as 'production' | 'development',
  );

  const restaurantUriName = context.params?.restaurant;
  const restaurant = await cms.getRestaurantFromUriName(
    String(restaurantUriName),
  );

  dlog('index ➡️ restaurant:', restaurant);

  if (!restaurant) {
    return {
      // returning as such to keep the props types consistent
      props: {
        restaurant: null as RestaurantDetails,
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

const RestaurantExperiencesPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>,
) => {
  const { restaurant, tastiestDishes, posts } = props;
  const { isMobile, isTablet, isDesktop, isHuge } = useScreenSize();

  return (
    <Contained maxWidth={900}>
      <div className="flex flex-col items-center pt-4 pb-10 space-y-4">
        {isMobile ? (
          posts.map(post => (
            <div key={post.id} style={{ maxWidth: '350px' }} className="">
              <ExperienceCard {...post} />
            </div>
          ))
        ) : (
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
            {posts.map(post => (
              <ExperienceCard key={post.id} {...post} />
            ))}
          </div>
        )}
      </div>
    </Contained>
  );
};

RestaurantExperiencesPage.layout = Layouts.RESTAURANT;
export default RestaurantExperiencesPage;
