interface IGenerateURLParams {
  city: string;
  restaurant: string;
  cuisine: string;
  slug: string;
}

export const generateSlugURL = ({
  city = '',
  restaurant = '',
  cuisine = '',
  slug = '',
}: IGenerateURLParams) => {
  // Build restaurnat URL
  if (city.length && restaurant.length && cuisine.length && slug.length) {
    const href = `/[city]${'/[cuisine-or-restaurant]'}${'/[cuisine]'}${
      slug && '/[slug]'
    }`.toLowerCase();

    const as = `/${city}/${restaurant}/${cuisine}/${slug}`.toLowerCase();

    return { href, as };
  }

  // Route to 404 if the link is invalid
  return { href: '/404', as: '/404' };
};

export const generateCuisineURL = ({ city = '', cuisine = '' }) => {
  if (city.length && cuisine.length) {
    const href = `/[city]${'[cuisine-or-restaurant]'}`.toLowerCase();
    const as = `/${city}/${cuisine}`.toLowerCase();

    return { href, as };
  }

  // Route to 404 if the link is invalid
  return { href: '/404', as: '/404' };
};
