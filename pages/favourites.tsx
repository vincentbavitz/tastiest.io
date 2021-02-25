import FavouritesNoneSVG from '@svg/page/favourites-none.svg';
import FavouritesBackdropSVG from '@svg/page/favourites.svg';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { ArticleCard } from '../components/cards/ArticleCard';
import { ArticleCardFavourite } from '../components/cards/ArticleCardFavourite';
import { CardGrid } from '../components/cards/CardGrid';
import { Contained } from '../components/Contained';
import { SectionTitle } from '../components/SectionTitle';
import { ScreenContext } from '../contexts/screen';
import { useAuth } from '../hooks/useAuth';
import { useUserData } from '../hooks/useUserData';
import { IPost, ISanityArticle } from '../types/article';
import { getArticlesHaving } from '../utils/article';
import { getTopPosts } from '../utils/posts';

function Favourites() {
  const { isDesktop } = useContext(ScreenContext);
  const { user } = useAuth();
  const { userData = {}, setUserData } = useUserData(user);
  const { isSignedIn } = useAuth();
  const router = useRouter();

  const [initialFetchDone, setInitialFetchDone] = useState(false);
  const [topPosts, setTopPosts] = useState([] as Array<ISanityArticle>);
  const [savedPosts, setSavedPosts] = useState([] as Array<Partial<IPost>>);

  useEffect(() => {
    const getPosts = async () => {
      if (initialFetchDone) {
        return;
      }

      const posts = await getTopPosts(12);
      const saved = await getArticlesHaving(
        'id',
        userData?.savedArticles ?? [],
      );

      setTopPosts(posts);
      setSavedPosts(saved);
      setInitialFetchDone(true);
    };

    getPosts();
  }, [userData?.savedArticles]);

  // Redirect users who are not signed in
  useEffect(() => {
    if (!isSignedIn) {
      router.push('/');
    }
  }, [isSignedIn]);

  console.log(
    'favourites ➡️ userData?.savedArticles:',
    userData?.savedArticles,
  );

  console.log('favourites ➡️ savedPosts:', savedPosts);

  if (!isSignedIn || !initialFetchDone) {
    return null;
  }

  const BackdropSVG =
    savedPosts.length === 0 ? (
      <FavouritesNoneSVG
        style={{
          width: isDesktop ? '130%' : '300%',
          transform: `translateX(${isDesktop ? -15 : 34}%)`,
        }}
      />
    ) : (
      <FavouritesBackdropSVG
        style={{
          width: '100%',
          transform: 'translateX(-15%)',
        }}
      />
    );

  return (
    <div>
      <div className="relative w-full mt-6 mb-12">
        {!isDesktop ? (
          <>
            {BackdropSVG}

            <div className="absolute inset-0 flex items-center justify-center">
              <h1
                style={{
                  fontSize: 'calc(1rem + 2vw)',
                }}
                className="font-somatic text-primary"
              >
                Saved Dishes
              </h1>
            </div>
          </>
        ) : (
          <Contained>
            {BackdropSVG}
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-3xl font-somatic text-primary">
                Saved Dishes
              </h1>
            </div>
          </Contained>
        )}
      </div>

      <Contained>
        <div className="flex flex-col">
          <CardGrid>
            {savedPosts?.map(post => (
              <ArticleCardFavourite
                {...post}
                key={post.id}
                isFavourite={(userData?.savedArticles ?? []).some(
                  saved => saved === post?.id,
                )}
              />
            ))}
          </CardGrid>
        </div>

        <div className="mt-20 mb-6">
          <SectionTitle>You might also like</SectionTitle>
        </div>

        <CardGrid>
          {topPosts?.map(post => (
            <ArticleCard key={post.id} {...post} />
          ))}
        </CardGrid>
      </Contained>
    </div>
  );
}

export default Favourites;
