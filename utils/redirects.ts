import { CmsApi } from '@tastiest-io/tastiest-utils';
import { generateStaticURL } from './routing';

export const getBaseUrl = () => {
  if (typeof window === 'undefined') {
    return;
  }

  return process.env.NODE_ENV === 'production'
    ? window.location.origin
    : 'http://localhost:3000';
};

/**
 *
 * @param offerId is equivalent to `dealId`
 */
export const getOfferDestination = async (
  offerId: string,
): Promise<URL | null> => {
  // Offer redirection
  const cmsApi = new CmsApi(
    undefined,
    undefined,
    process.env.NODE_ENV as 'production' | 'development',
  );

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

  const url = new URL(path.as);
  return url;
};

export const getRestaurantDestination = async (
  restaurantUriName: string,
): Promise<URL | null> => {
  const cmsApi = new CmsApi(
    undefined,
    undefined,
    process.env.NODE_ENV as 'production' | 'development',
  );

  const restaurant = await cmsApi.getRestaurantFromUriName(restaurantUriName);

  if (!restaurant) {
    return null;
  }

  const path = generateStaticURL({
    city: restaurant.city ?? 'london',
    cuisine: restaurant.cuisine,
    restaurant: restaurant.uriName,
  });

  const url = new URL(path.as, getBaseUrl());
  return url;
};
