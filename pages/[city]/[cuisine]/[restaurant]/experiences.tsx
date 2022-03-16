import {
  CmsApi,
  ContentfulPost,
  ContentfulRestaurant,
  dlog,
  TastiestDish,
} from '@tastiest-io/tastiest-utils';
import { AbstractExperienceCard } from 'components/cards/AbstractExperienceCard';
import { Contained } from 'components/Contained';
import { SectionTitle } from 'components/SectionTitle';
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

export const getStaticPaths: GetStaticPaths = async () => {
  const cms = new CmsApi();

  let page = 1;
  let foundAllRestaurants = false;
  const restaurants: ContentfulRestaurant[] = [];

  // Contentful only allows 100 at a time
  while (!foundAllRestaurants) {
    const { restaurants: _restaurants } = await cms.getRestaurants(100, page);

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
      restaurant: restaurant.uri_name.toLowerCase(),
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
        restaurant: null as ContentfulRestaurant,
        tastiestDishes: null as TastiestDish[],
        posts: null as ContentfulPost[],
      },
      notFound: true,
    };
  }

  // Get posts from restaurant
  const { posts } = await cms.getPostsOfRestaurant(restaurant.uri_name, 100);

  // Get the restaurant's Tastiest Dishes
  const { dishes: tastiestDishes } = await cms.getTastiestDishesOfRestaurant(
    restaurant.uri_name,
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
      <div className="pt-3 pb-4">
        <SectionTitle>Choose an experience</SectionTitle>
      </div>

      <div className="pt-4 pb-10">
        {isMobile ? (
          <div className="grid grid-cols-1 gap-4 justify-items-center">
            {posts.map(post => (
              <div key={post.id} style={{ width: '300px', maxWidth: '80vw' }}>
                <AbstractExperienceCard withRestaurantName={false} {...post} />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
            {posts.map(post => (
              <AbstractExperienceCard
                key={post.id}
                withRestaurantName={false}
                {...post}
              />
            ))}
          </div>
        )}
      </div>
    </Contained>
  );
};

RestaurantExperiencesPage.layout = Layouts.RESTAURANT;
export default RestaurantExperiencesPage;
