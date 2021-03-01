import { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import React, { useContext, useEffect, useState } from 'react';
import { IPost } from 'types/cms';
import { CardGrid } from '../../../components/cards/CardGrid';
import { Contained } from '../../../components/Contained';
import { SuggestDish } from '../../../components/SuggestDish';
import { CUISINES } from '../../../constants';
import { ScreenContext } from '../../../contexts/screen';
import { CuisineSymbol } from '../../../types/cuisine';
import { generateTitle } from '../../../utils/metadata';
import { getCuisinePosts, postsToCards } from '../../../utils/posts';
import { titleCase } from '../../../utils/text';

export const getServerSideProps = async context => {
  const cuisineSymbol = String(
    context.params?.cuisine,
  ).toUpperCase() as CuisineSymbol;

  const cuisineExists = CUISINES[cuisineSymbol];

  console.log('index ➡️ cuisineSymbol:', cuisineSymbol);
  console.log('index ➡️ context:', context);

  // Redirect to 404 for nonexistent page
  if (!cuisineExists) {
    return {
      props: { cuisineSymbol: undefined },
      notFound: true,
    };
  }

  return {
    props: { cuisineSymbol },
  };
};

export default function Cuisine({
  cuisineSymbol,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { isMobile } = useContext(ScreenContext);
  const cuisine = CUISINES[cuisineSymbol];
  const cuisineName = titleCase(String(cuisine?.name));
  const cuisineExists = Boolean(cuisine);

  const [posts, setPosts] = useState([] as IPost[]);

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
              className="flex justify-center w-full"
            >
              <span className="text-3xl font-somatic text-primary">
                {cuisineName}
              </span>
            </div>
          </div>

          {
            <cuisine.pageSvg
              style={{
                width: isMobile ? '133vw' : '100%',
                marginLeft: isMobile ? '-20vw' : 'unset',
              }}
            />
          }
        </div>

        <Contained>
          <CardGrid>{cards}</CardGrid>

          <div className="mt-12">
            <SuggestDish />
          </div>
        </Contained>
      </div>
    </div>
  );
}
