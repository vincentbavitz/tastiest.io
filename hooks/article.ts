import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { IState } from '../state/reducers';

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
