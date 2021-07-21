import {
  CmsApi,
  CuisineSymbol,
  dlog,
  ICuisine,
  IPost,
  titleCase,
} from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { ArticleCard } from 'components/cards/ArticleCard';
import { SuggestRestaurant } from 'components/SuggestRestaurant';
import { useScreenSize } from 'hooks/useScreenSize';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { LookingIllustration } from 'public/assets/illustrations';
import React from 'react';
import { CardGrid } from '../../../components/cards/CardGrid';
import { Contained } from '../../../components/Contained';
import { CUISINES } from '../../../constants';
import { generateTitle } from '../../../utils/metadata';

interface IPath {
  params: { city: string; cuisine: string };
}

interface Props {
  cuisineSymbol: CuisineSymbol;
  posts: IPost[];
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: IPath[] = Object.values(CUISINES).map(item => ({
    params: {
      city: 'london',
      cuisine: item.name.replace(' ', '-').toLowerCase(),
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const cuisineSymbol = String(params.cuisine).toUpperCase() as CuisineSymbol;
  const cuisineExists = Boolean(CUISINES[cuisineSymbol]);

  // Redirect to 404 for nonexistent page
  if (!cuisineExists) {
    return {
      notFound: true,
    };
  }

  dlog('index ➡️ cuisineSymbol:', cuisineSymbol);

  const cmsApi = new CmsApi();
  const { posts = [] } = await cmsApi.getPostsOfCuisine(cuisineSymbol);

  return {
    props: {
      cuisineSymbol,
      posts,
    },
    revalidate: 360,
  };
};

export default function CuisinePage(props: Props) {
  const { posts = [], cuisineSymbol } = props;
  const { isMobile, isTablet, isDesktop, isHuge } = useScreenSize();

  const cuisine = CUISINES[cuisineSymbol];
  const cuisineName = titleCase(String(cuisine?.name));

  const cards = posts.map(post => (
    <ArticleCard key={post.id} compact {...post} />
  ));

  return (
    <>
      <div>
        <Head>
          <title>{generateTitle(cuisineName)}</title>
        </Head>

        <div className="flex flex-col w-full space-y-10">
          <div className="relative mt-6 tablet:mt-6">
            <CuisineHero cuisine={cuisine} />

            <div className="absolute inset-0">
              <div
                style={{
                  marginTop: isDesktop ? '2rem' : isTablet ? '1rem' : '0.5rem',
                }}
                className="flex justify-center w-full"
              >
                <span className="text-4xl font-somatic text-primary">
                  {cuisineName}
                </span>
              </div>
            </div>
          </div>

          {cards.length ? (
            <div className="pt-10 pb-20">
              <CardGrid horizontalScroll rowLimit={2}>
                {cards}
              </CardGrid>
            </div>
          ) : (
            <Contained>
              <NoPostsForCuisine
                isMobile={isMobile}
                cuisineName={cuisine?.name}
              />
            </Contained>
          )}
        </div>
      </div>

      <div className="pt-16">
        <SuggestRestaurant />
      </div>
    </>
  );
}

interface NoPostsForCuisineProps {
  isMobile: boolean;
  cuisineName: string;
}

const NoPostsForCuisine = ({
  isMobile,
  cuisineName,
}: NoPostsForCuisineProps) => (
  <div className="pt-10 tablet:pt-16 tablet:flex tablet:justify-center tablet:w-full">
    <div
      style={{ minWidth: isMobile ? 'unset' : '600px', maxWidth: '1100px' }}
      className={clsx(
        isMobile
          ? 'flex flex-col space-y-10 w-full'
          : 'grid grid-cols-12 place-items-center pl-10',
      )}
    >
      <div className="col-span-4">
        <h4 className="mb-4 text-lg text-center mobile:text-left">
          Sorry! There are no offers {!isMobile && <br />} for {cuisineName}{' '}
          yet.
        </h4>
        <h2 className="text-3xl leading-tight text-center mobile:text-left font-somatic text-primary">
          We are still {!isMobile && <br />}
          on the lookout {!isMobile && <br />} for the best dishes
          {!isMobile && <br />} near you!
        </h2>
      </div>

      <div className="col-span-8">
        <LookingIllustration
          style={{ minWidth: isMobile ? 'unset' : '500px' }}
        />
      </div>
    </div>
  </div>
);

const CuisineHero = ({ cuisine }: { cuisine: ICuisine }) => {
  const { isMobile, isTablet, isDesktop, isHuge } = useScreenSize();
  const isLargeDesktop = isHuge;
  const isRegularDesktop = isDesktop && !isHuge;

  const desktopIllustrationLocation = `/assets/cuisine-pages/${cuisine?.name
    .replace(' ', '-')
    .toLowerCase()}-hero-desktop.svg`;

  const mobileIllustrationLocation = `/assets/cuisine-pages/${cuisine?.name
    .replace(' ', '-')
    .toLowerCase()}-hero-mobile.svg`;

  return (
    <div>
      {isLargeDesktop && (
        <Contained maxWidth={933}>
          <img src={desktopIllustrationLocation} className="w-full pt-6" />
        </Contained>
      )}

      {isRegularDesktop && (
        <img src={desktopIllustrationLocation} className="w-full" />
      )}

      {isTablet && (
        <img
          src={desktopIllustrationLocation}
          style={{
            width: '150%',
            transform: `translateX(-15%)`,
          }}
        />
      )}

      {isMobile && (
        <div
          style={{
            width: '133%',
            transform: `translateX(-15%)`,
          }}
          className="relative mt-10"
        >
          <img src={mobileIllustrationLocation} className="w-full" />
        </div>
      )}
    </div>
  );
};
