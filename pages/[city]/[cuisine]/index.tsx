import NothingFoundSVG from '@svg/illustrations/nothing-found.svg';
import { ArticleCard } from 'components/cards/ArticleCard';
import { SuggestDish } from 'components/SuggestDish';
import { GetStaticPaths, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import React, { useContext } from 'react';
import { CmsApi } from 'services/cms';
import { IPost } from 'types/cms';
import { CardGrid } from '../../../components/cards/CardGrid';
import { Contained } from '../../../components/Contained';
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
      city: item.city.toLowerCase(),
      cuisine: item.cuisine.toLowerCase(),
    },
  }));

  console.log('index ➡️ paths:', paths);

  return { paths, fallback: 'blocking' };
};

export const getStaticProps = async ({ params }) => {
  const cuisineSymbol = String(params?.cuisine).toUpperCase() as CuisineSymbol;
  const cuisineExists = Boolean(CUISINES[cuisineSymbol]);

  console.log('index ➡️ params:', params);
  console.log('index ➡️ cuisineSymbol:', cuisineSymbol);
  console.log('index ➡️ cuisineExists:', cuisineExists);

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

  if (posts?.length > 0) {
    return {
      props: {
        posts,
        cuisineSymbol,
      },
      revalidate: 360,
    };
  }

  return {
    props: { cuisineSymbol, posts: [] as IPost[] },
    notFound: false,
  };
};

export default function Cuisine(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const { posts = [], cuisineSymbol } = props;
  const { isMobile, isTablet, isDesktop, isHuge } = useContext(ScreenContext);
  const cuisine = CUISINES[cuisineSymbol];
  const cuisineName = titleCase(String(cuisine?.name));

  const cards = posts.map(post => (
    <ArticleCard key={post.id} compact {...post} />
  ));

  return (
    <>
      <div>
        <Head>
          <title>{generateTitle(cuisineName + ' Cuisine')}</title>
        </Head>

        <div className="flex flex-col w-full space-y-10">
          <div className="relative mt-0 tablet:mt-6">
            {cuisine?.pageSvg && (
              <>
                {isHuge ? (
                  <Contained>
                    <cuisine.pageSvg className="w-full pt-6" />
                  </Contained>
                ) : (
                  <>
                    <cuisine.pageSvg
                      style={{
                        width: isDesktop ? '100%' : isTablet ? '150%' : '150%',
                        transform: `translateX(${
                          isDesktop ? '0' : isTablet ? '-15%' : '-25%'
                        })`,
                      }}
                    />
                  </>
                )}
              </>
            )}

            <div className="absolute inset-0">
              <div
                style={{ marginTop: '3vw' }}
                className="flex justify-center w-full"
              >
                <span className="text-4xl font-somatic text-primary">
                  {cuisineName}
                </span>
              </div>
            </div>
          </div>

          <Contained>
            {cards.length ? (
              <CardGrid rowLimit={2}>
                {[
                  ...cards,
                  ...cards,
                  ...cards,
                  ...cards,
                  ...cards,
                  ...cards,
                  ...cards,
                ]}
              </CardGrid>
            ) : (
              <div className="flex w-full">
                <NothingFoundSVG />
              </div>
            )}
          </Contained>
        </div>
      </div>

      <Contained>
        <SuggestDish />
      </Contained>
    </>
  );
}
