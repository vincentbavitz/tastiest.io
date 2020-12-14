import groq from 'groq';
import { useRouter } from 'next/router';
import client from '../client';
import { sanityPostQuery } from '../utils/search';

const fetcher = (slug: string) => {
  const query = groq`*[_type == "post" && slug.current == "${slug}"][0]{
      ${sanityPostQuery}
    }`;

  return client.fetch(query);
};

export function useArticle() {
  const router = useRouter();
  console.log('article ➡️ router:', router);
  console.log('article ➡️ router:', router);
  console.log('article ➡️ router:', router);
  console.log('article ➡️ router:', router);
  console.log('article ➡️ router:', router);
  console.log('article ➡️ router:', router);
  console.log('article ➡️ router:', router);
  console.log('article ➡️ router:', router);

  const articleUrl = `tastiest.io${router.asPath}`;
}
