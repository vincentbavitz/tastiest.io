import React, { useContext, useEffect, useState } from 'react';
import FavouritesBackdropSVG from '../assets/svgs/page/favourites.svg';
import { ArticleCardFavourite } from '../components/cards/ArticleCardFavourite';
import { Contained } from '../components/Contained';
import { ScreenContext } from '../contexts/screen';
import { ISanityArticle } from '../types/article';
import { getTopPosts } from '../utils/posts';

function Favourites() {
  const { isMobile } = useContext(ScreenContext);

  const [topPosts, setTopPosts] = useState([] as ISanityArticle[]);
  useEffect(() => {
    const getPosts = async () => {
      const posts = await getTopPosts(4);
      setTopPosts(posts);
    };

    getPosts();
  }, []);

  return (
    <div>
      <div className="relative w-full mb-12 mt-6">
        {isMobile ? (
          <>
            <FavouritesBackdropSVG
              style={{
                width: '130%',
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
                Saved Places
              </h1>
            </div>
          </>
        ) : (
          <Contained>
            <FavouritesBackdropSVG className="w-full" />
            <div className="absolute inset-0 flex justify-center items-center">
              <h1 className="font-somatic text-primary text-threexl">
                Saved Places
              </h1>
            </div>
          </Contained>
        )}
      </div>

      <Contained>
        <div className="flex flex-wrap">
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
