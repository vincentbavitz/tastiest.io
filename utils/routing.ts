import { LocalEndpoint } from 'types/api';
import { BASE_URL } from './redirects';

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

export const generateLocalEndpoint = (
  endpoint: LocalEndpoint,
  params?: Record<string, string>,
) => {
  const url = new URL(BASE_URL + endpoint);
  Object.entries(params ?? {}).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });

  return url.toString();
};
