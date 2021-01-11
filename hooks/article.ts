import groq from 'groq';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import client from '../client';
import { IState } from '../state/reducers';
import { sanityPostQuery } from './search';

export function useArticle() {
  const router = useRouter();
  const slug = router.query.slug;

  if (!slug.length) {
    // Not on an article page
    return;
  }

  const article = useSelector((state: IState) => state.article);

  // Slug mismatch; wrong page
  if (slug !== article.slug) {
    return;
  }

  // const { data: rawArticle, error } = useSWR(slug, fetcher, {
  //   revalidateOnReconnect: false,
  //   revalidateOnMount: false,
  //   onError: e => console.log('article ➡️ e:', e),
  // });

  // if (error || !rawArticle) {
  //   router.push('/');
  //   return;
  // }

  // const article = buildArticleInfo(rawArticle);

  return article;
}

const fetcher = (slug: string) => {
  const query = groq`*[_type == "post" && slug.current == "${slug}"][0]{
      ${sanityPostQuery}
    }`;

  return client.fetch(query);
};
