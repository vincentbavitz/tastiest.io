import { useRouter } from 'next/router';
import { UserData } from '../types/firebase';
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
      const filtered = userData?.savedArticles?.filter(saved => slug !== saved);

      setUserData(UserData.SAVED_ARTICLES, filtered);
      return;
    }

    setUserData(UserData.SAVED_ARTICLES, [
      ...(userData?.savedArticles ?? []),
      slug,
    ]);
  };

  return { toggleSaveArticle };
}
