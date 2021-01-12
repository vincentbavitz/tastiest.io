import React, { useContext, useEffect, useState } from 'react';
import FavouritesBackdropSVG from '../assets/svgs/page/favourites.svg';
import { ArticleCard } from '../components/cards/ArticleCard';
import { ArticleCardFavourite } from '../components/cards/ArticleCardFavourite';
import { CardGrid } from '../components/cards/CardGrid';
import { Contained } from '../components/Contained';
import { SectionTitle } from '../components/SectionTitle';
import { ScreenContext } from '../contexts/screen';
import { useUserData } from '../hooks/userData';
import { IArticle, ISanityArticle } from '../types/article';
import { getArticlesHaving } from '../utils/article';
import { getTopPosts } from '../utils/posts';

function Favourites() {
  const { isMobile, isTablet, isDesktop, isHuge } = useContext(ScreenContext);
  const { userData = {}, setUserData } = useUserData();

  const [initialFetchDone, setInitialFetchDone] = useState(false);
  const [topPosts, setTopPosts] = useState([] as Array<ISanityArticle>);
  const [savedPosts, setSavedPosts] = useState([] as Array<Partial<IArticle>>);

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

  console.log(
    'favourites ➡️ userData?.savedArticles:',
    userData?.savedArticles,
  );

  console.log('favourites ➡️ savedPosts:', savedPosts);

  return (
    <div>
      <div className="relative w-full mb-12 mt-6">
        {isMobile ? (
          <>
            <FavouritesBackdropSVG
              style={{
                width: '100%',
                transform: 'translateX(-15%)',
              }}
            />
            <div className="absolute inset-0 flex justify-center items-center">
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
            <FavouritesBackdropSVG className="w-full" />
            <div className="absolute inset-0 flex justify-center items-center">
              <h1 className="font-somatic text-primary text-threexl">
                Saved Dishes
              </h1>
            </div>
          </Contained>
        )}
      </div>

      <Contained>
        <div className="flex flex-col">
          <CardGrid>
            {savedPosts.map(post => (
              <ArticleCardFavourite
                {...post}
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
          {topPosts.map(post => (
            <ArticleCard {...post} />
          ))}
        </CardGrid>
      </Contained>
    </div>
  );
}

export default Favourites;
