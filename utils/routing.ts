interface IGenerateURLParams {
  city: string;
  cuisine: string;
  slug: string;
}

export const generateURL = ({ city, cuisine, slug }: IGenerateURLParams) => ({
  href: `/${city}/${cuisine}/${slug}`.toLowerCase(),
  as: '/[city]/[cuisine]/[slug]',
});
