import { LocalEndpoint } from 'types/api';
import { getBaseUrl } from './redirects';

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
  if (typeof window === 'undefined') {
    return;
  }

  const url = new URL(getBaseUrl() + endpoint);
  Object.entries(params ?? {}).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });

  return url.toString();
};
