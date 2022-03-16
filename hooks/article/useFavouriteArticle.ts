import { useTrack } from 'hooks/useTrack';
import { useDispatch } from 'react-redux';
import { openAuthModal } from 'state/navigation';
import { useAuth } from '../auth/useAuth';
import { useUserData } from '../useUserData';

export function useFavouriteArticle() {
  const { user } = useAuth();
  const { track } = useTrack();
  const { userData = {}, setUserData } = useUserData(user);
  const { isSignedIn } = useAuth();
  const dispatch = useDispatch();

  const toggleSaveArticle = (slug: string) => {
    if (!isSignedIn) {
      dispatch(openAuthModal());
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
    setUserData('', filtered);

    // Track with Segment
    const firstName = userData?.details?.firstName ?? 'User';
    const lastName = userData?.details?.lastName;
    const name = `${firstName}${lastName ? ' ' + lastName : ''}`;
    track('User Removed Article from Favourites', {
      name,
      slug,
    });
  };

  const saveArticle = (slug: string) => {
    setUserData('saved-articles', [...(userData?.savedArticles ?? []), slug]);

    // Track with Segment
    const firstName = userData?.details?.firstName ?? 'User';
    const lastName = userData?.details?.lastName;
    const name = `${firstName}${lastName ? ' ' + lastName : ''}`;
    track('User Added Article to Favourites', {
      name,
      slug,
    });
  };

  const savedArticles = userData?.savedArticles ?? [];

  return { toggleSaveArticle, saveArticle, unsaveArticle, savedArticles };
}
