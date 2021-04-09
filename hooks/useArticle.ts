import { UserData } from '@tastiest-io/tastiest-utils';
import { useRouter } from 'next/router';
import { useAuth } from './useAuth';
import { useUserData } from './useUserData';

export function useArticle() {
  const { user } = useAuth();
  const { userData = {}, setUserData } = useUserData(user);
  const { isSignedIn } = useAuth();
  const router = useRouter();

  const toggleSaveArticle = (slug: string) => {
    if (!isSignedIn) {
      router.push('/?login=1');
    }

    const isArticleSaved =
      slug === userData?.savedArticles?.find(saved => saved === slug);

    if (isArticleSaved) {
      unsaveArticle(slug);
      return;
    }

    saveArticle(slug);
  };

  const unsaveArticle = (slug: string) => {
    const filtered = userData?.savedArticles?.filter(saved => slug !== saved);
    setUserData(UserData.SAVED_ARTICLES, filtered);

    // Track with Segment
    const firstName = userData?.details?.firstName ?? 'User';
    const lastName = userData?.details?.lastName;
    const name = `${firstName}${lastName ? ' ' + lastName : ''}`;
    window.analytics.track('User removed article to favourites', {
      name,
      slug,
    });
  };

  const saveArticle = (slug: string) => {
    setUserData(UserData.SAVED_ARTICLES, [
      ...(userData?.savedArticles ?? []),
      slug,
    ]);

    // Track with Segment
    const firstName = userData?.details?.firstName ?? 'User';
    const lastName = userData?.details?.lastName;
    const name = `${firstName}${lastName ? ' ' + lastName : ''}`;
    window.analytics.track('User added article to favourites', {
      name,
      slug,
    });
  };

  return { toggleSaveArticle };
}
