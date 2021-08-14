interface IGenerateURLParams {
  city: string;
  cuisine: string;
  restaurant?: string; // uri name
  slug?: string;
}

export const generateStaticURL = ({
  city = '',
  cuisine = '',
  restaurant,
  slug,
}: IGenerateURLParams) => {
  const href = `/[city]/[cuisine]${restaurant?.length ? '/[restaurant]' : ''}${
    slug?.length ? '/[slug]' : ''
  }`.toLowerCase();

  // prettier-ignore
  const as = 
    (`/${city}/${cuisine}` +
    `${restaurant?.length ? '/' + restaurant : ''}` +
    `${slug?.length ? '/' + slug : ''}`)
    .toLowerCase();

  return { href, as };
};
