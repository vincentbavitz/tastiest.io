import { CmsApi, generateStaticURL } from '@tastiest-io/tastiest-utils';

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

  const url = new URL(path.as);
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
    cuisine: restaurant.cuisine,
    restaurant: restaurant.uri_name,
  });

  const url = new URL(path.as, getBaseUrl());
  return url;
};
