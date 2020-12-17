import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { Contained } from '../../../components/Contained';
import { Footer } from '../../../components/Footer';
import { CUISINES } from '../../../constants';
import { ISanityArticle } from '../../../types/article';
import { CuisineSymbol } from '../../../types/cuisine';
import { generateTitle } from '../../../utils/metadata';
import { getCuisinePosts, postsToCards } from '../../../utils/posts';
import { titleCase } from '../../../utils/text';

export default function Cuisine() {
  const router = useRouter();
  const cuisineQueryName = router.query?.cuisine;
  const cuisineSymbol = String(cuisineQueryName).toUpperCase() as CuisineSymbol;
  const cuisine = CUISINES[cuisineSymbol];

  // Ensure cuisine exists on load; else 404
  const cuisineName = titleCase(String(cuisine?.name));
  const cuisineExists = Boolean(cuisine);

  console.log('cuisine info', {
    cuisineQueryName,
    cuisineSymbol,
    cuisine,
    cuisineName,
  });

  const [posts, setPosts] = useState([] as ISanityArticle[]);

  const getPosts = async () => {
    const posts = await getCuisinePosts(cuisineSymbol, 8);
    if (!posts) return;

    setPosts(posts);
  };

  useEffect(() => {
    if (!cuisineExists) {
      router.push('/404', '/404');
    }
  }, []);

  // Get new posts on location change
  useEffect(() => {
    getPosts();
  }, [cuisine]);

  const cards = postsToCards(posts);

  // Prevent user from seeing anything rendered when cuisine doesn't exist
  if (!cuisineExists) {
    return <></>;
  }

  return (
    <div>
      <Head>
        <title>{generateTitle(cuisineName + ' Cuisine')}</title>
      </Head>

      <div className="flex flex-col w-full space-y-10">
        <div className="relative">
          <div className="absolute inset-0">
            <div
              style={{ marginTop: '10vw' }}
              className="flex w-full justify-center"
            >
              <span className="text-threexl font-somatic text-primary">
                {cuisineName}
              </span>
            </div>
          </div>

          {<cuisine.pageSvg />}
        </div>

        <Contained>
          <div className="flex justify-center items-baseline space-x-6 space-y-4 mt-6 mb-16">
            {cards}
          </div>
        </Contained>
      </div>

      <Footer />
    </div>
  );
}
