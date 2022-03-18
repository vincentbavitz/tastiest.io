import {
  CmsApi,
  ContentfulPost,
  ContentfulRestaurant,
  TastiestDish,
} from '@tastiest-io/tastiest-utils';
import { Layouts } from 'layouts/LayoutHandler';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import Restaurant from 'pages/[city]/[cuisine]/[restaurant]';

// Contentful preview URL structure...
// https://tastiest.io/previews/restaurant?env={env_id}&uri={entry.fields.uriName}

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const environment = context.query.env as 'master' | 'development';
  const mappedEnvironment =
    environment === 'master' ? 'production' : environment;

  const restaurantUriName = context.query.uri as string;

  if (!environment || !restaurantUriName) {
    return {
      props: {
        restaurant: null as ContentfulRestaurant,
        tastiestDishes: null as TastiestDish[],
        posts: null as ContentfulPost[],
      },
      redirect: {
        destination: '/',
      },
    };
  }

  const cms = new CmsApi(undefined, undefined, mappedEnvironment);
  const restaurant = await cms.getRestaurantFromUriName(restaurantUriName);
  const { posts } = await cms.getPostsOfRestaurant(restaurantUriName);
  const { dishes: tastiestDishes } = await cms.getTastiestDishesOfRestaurant(
    restaurantUriName,
  );

  // const { restaurant, tastiestDishes, posts } = props;

  if (!restaurant) {
    return {
      props: {
        restaurant,
        tastiestDishes,
        posts,
      },
      redirect: {
        destination: '/',
      },
    };
  }

  return {
    props: {
      restaurant,
      tastiestDishes,
      posts,
    },
  };
};

const RestaurantPreview = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) => {
  // const { restaurant, tastiestDishes, posts } = props;

  return (
    <div className="relative">
      <Restaurant {...props} />

      {/* Overlay to prevent mouse events. */}
      <div style={{ zIndex: 100000 }} className="fixed inset-0"></div>

      {/* Preview overlay */}
      <div
        style={{ zIndex: 100000 }}
        className="fixed bottom-10 left-0 right-0 flex justify-center"
      >
        <div className="bg-primary rounded-lg shadow-lg px-6 py-2 text-3xl text-light font-medium font-primary tracking-widest opacity-75">
          PREVIEW
        </div>
      </div>
    </div>
  );
};

RestaurantPreview.layout = Layouts.RESTAURANT;
export default RestaurantPreview;
