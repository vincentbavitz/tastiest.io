interface IGenerateURLParams {
  city: string;
  cuisine?: string;
  slug?: string;
}

export const generateURL = ({
  city = '',
  cuisine = '',
  slug = '',
}: IGenerateURLParams) => {
  // Route to 404 if the link is invalid
  if (!cuisine && slug) {
    return { href: '/404', as: '/404' };
  }

  return {
    href: `/[city]${cuisine && '/[cuisine]'}${slug && '/[slug]'}`.toLowerCase(),
    as: `/${city}${cuisine && '/' + cuisine}${
      slug && '/' + slug
    }`.toLowerCase(),
  };
};
