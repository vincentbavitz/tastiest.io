import { useRouter } from 'next/router';
import { UserData } from '../types/firebase';
import { useAuth } from './useAuth';
import { useUserData } from './useUserData';

export function useArticle() {
  const { user } = useAuth();
  const { userData = {}, setUserData } = useUserData(user);
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

      setUserData(UserData.SAVED_ARTICLES, filtered);
      return;
    }

    setUserData(UserData.SAVED_ARTICLES, [
      ...(userData?.savedArticles ?? []),
      id,
    ]);
  };

  return { toggleSaveArticle };
}
