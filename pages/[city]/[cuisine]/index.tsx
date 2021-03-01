import { ArticleCard } from 'components/cards/ArticleCard';
import { GetStaticPaths, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import React, { useContext } from 'react';
import { CmsApi } from 'services/cms';
import { IPost } from 'types/cms';
import { CardGrid } from '../../../components/cards/CardGrid';
import { Contained } from '../../../components/Contained';
import { SuggestDish } from '../../../components/SuggestDish';
import { CUISINES } from '../../../constants';
import { ScreenContext } from '../../../contexts/screen';
import { CuisineSymbol } from '../../../types/cuisine';
import { generateTitle } from '../../../utils/metadata';
import { titleCase } from '../../../utils/text';

interface IPath {
  params: { city: string; cuisine: string };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const cms = new CmsApi();
  let posts: IPost[] = [];
  let page = 1;
  let foundAllPosts = false;

  // Contentful only allows 100 at a time
  while (!foundAllPosts) {
    const { posts: _posts } = await cms.getPosts(100, page);

    if (_posts.length === 0) {
      foundAllPosts = true;
      continue;
    }

    posts = [...posts, ..._posts];
    page++;
  }

  const paths: IPath[] = posts.map(item => ({
    params: {
      city: item.city,
      cuisine: item.cuisine.toLowerCase(),
    },
  }));

  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
  const cuisineSymbol = String(params?.cuisine).toUpperCase() as CuisineSymbol;
  const cuisineExists = CUISINES[cuisineSymbol];

  // Redirect to 404 for nonexistent page
  if (!cuisineExists) {
    return {
      props: { cuisineSymbol, posts: [] as IPost[] },
      notFound: true,
    };
  }

  const cms = new CmsApi();
  const { posts } = await cms.getPostsOfCuisine(cuisineSymbol);
  console.log(`Building cuisine page: %c${params.cuisine}`, 'color: purple;');

  if (!posts) {
    return {
      props: { cuisineSymbol, posts: [] as IPost[] },
      notFound: true,
    };
  }

  return {
    props: {
      posts,
      cuisineSymbol,
    },
    revalidate: 60,
  };
};

export default function Cuisine(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const { posts, cuisineSymbol } = props;
  const { isMobile } = useContext(ScreenContext);
  const cuisine = CUISINES[cuisineSymbol];
  const cuisineName = titleCase(String(cuisine?.name));

  const cards = posts
    ? posts.slice(0, 4).map(post => <ArticleCard key={post.id} {...post} />)
    : [];

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
