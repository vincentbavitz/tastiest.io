import { CmsApi } from '@tastiest-io/tastiest-utils';
import { generateStaticURL } from './routing';

export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://tastiest.io'
    : 'http://localhost:3000';

/**
 *
 * @param offerId is equivalent to `dealId`
 */
export const getOfferDestination = async (
  offerId: string,
): Promise<URL | null> => {
  // Offer redirection
  const cmsApi = new CmsApi();
  const post = await cmsApi.getPostByDealId(offerId);

  if (!post) {
    return null;
  }

  const path = generateStaticURL({
    slug: post.slug,
    city: post.city,
    cuisine: post.cuisine,
    restaurant: post.restaurant.uriName,
  });

  const url = new URL(path.as, BASE_URL);
  return url;
};

export const getRestaurantDestination = async (
  restaurantUriName: string,
): Promise<URL | null> => {
  const cmsApi = new CmsApi();
  const restaurant = await cmsApi.getRestaurantFromUriName(restaurantUriName);

  if (!restaurant) {
    return null;
  }

  const path = generateStaticURL({
    city: restaurant.city ?? 'london',
    cuisine: restaurant.cuisines[0],
    restaurant: restaurant.uriName,
  });

  const url = new URL(path.as, BASE_URL);
  return url;
};
