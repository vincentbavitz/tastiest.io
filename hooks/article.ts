import { useRouter } from 'next/router';
import { USER_DATA } from '../types/firebase';
import { useAuth } from './auth';
import { useUserData } from './userData';

export function useArticle() {
  const { userData = {}, setUserData } = useUserData();
  const { isSignedIn } = useAuth();
  const router = useRouter();

  const toggleSaveArticle = (id: string) => {
    if (!isSignedIn) {
      router.push('/login');
    }

    const isArticleSaved =
      id === userData?.savedArticles?.find(saved => saved === id);

    if (isArticleSaved) {
      const filtered = userData?.savedArticles?.filter(saved => id !== saved);

      setUserData(USER_DATA.SAVED_ARTICLES, filtered);
      return;
    }

    setUserData(USER_DATA.SAVED_ARTICLES, [
      ...(userData?.savedArticles ?? []),
      id,
    ]);
  };

  return { toggleSaveArticle };
}
