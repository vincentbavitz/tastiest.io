import { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { Contained } from '../../../components/Contained';
import { CUISINES } from '../../../constants';
import { ISanityArticle } from '../../../types/article';
import { CuisineSymbol } from '../../../types/cuisine';
import { generateTitle } from '../../../utils/metadata';
import { getCuisinePosts, postsToCards } from '../../../utils/posts';
import { titleCase } from '../../../utils/text';

interface Props {
  cuisineSymbol?: CuisineSymbol;
}

export const getServerSideProps = async context => {
  // const cuisineSymbol = String(
  //   context.params?.cuisine,
  // ).toUpperCase() as CuisineSymbol;

  // const cuisineExists = CUISINES[cuisineSymbol];

  // console.log('index ➡️ cuisineSymbol:', cuisineSymbol);
  // console.log('index ➡️ context:', context);

  // // Redirect to 404 for nonexistent page
  // if (!cuisineExists) {
  //   return {
  //     notFound: true,
  //   };
  // }

  return { props: { cuisineSymbol: 'ITALIAN' } };
};

export default function Cuisine({
  cuisineSymbol,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const cuisine = CUISINES[cuisineSymbol];
  const cuisineName = titleCase(String(cuisine?.name));
  const cuisineExists = Boolean(cuisine);

  const [posts, setPosts] = useState([] as ISanityArticle[]);

  const getPosts = async () => {
    const posts = await getCuisinePosts(
      String(cuisine.name).toUpperCase() as CuisineSymbol,
      8,
    );
    if (!posts) return;

    setPosts(posts);
  };

  // Get new posts on location change
  useEffect(() => {
    getPosts();
  }, [cuisine]);

  const cards = postsToCards(posts);

  // // Prevent user from seeing anything rendered when cuisine doesn't exist
  // if (!cuisineExists) {
  //   return <></>;
  // }

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
    </div>
  );
}
