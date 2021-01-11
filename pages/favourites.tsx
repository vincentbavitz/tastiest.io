import React, { useContext, useEffect, useState } from 'react';
import FavouritesBackdropSVG from '../assets/svgs/page/favourites.svg';
import { ArticleCardFavourite } from '../components/cards/ArticleCardFavourite';
import { Contained } from '../components/Contained';
import { ScreenContext } from '../contexts/screen';
import { useUserData } from '../hooks/userData';
import { ISanityArticle } from '../types/article';
import { USER_DATA } from '../types/firebase';
import { getTopPosts } from '../utils/posts';

function Favourites() {
  const { isMobile } = useContext(ScreenContext);
  const { userData = {}, setUserData } = useUserData();

  const [topPosts, setTopPosts] = useState([] as ISanityArticle[]);
  useEffect(() => {
    const getPosts = async () => {
      const posts = await getTopPosts(12);
      setTopPosts(posts);
    };
    getPosts();
  }, []);

  const toggleSaveArticle = (id: string) => {
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
        <div className="flex flex-wrap space-x-4">
          {topPosts.map(post => (
            <div
              key={post.id.toLowerCase()}
              style={{
                minWidth: '12rem',
              }}
              className="w-1/4 flex-grow"
            >
              <ArticleCardFavourite {...post} />
            </div>
          ))}
        </div>
      </Contained>
    </div>
  );
}

export default Favourites;
