import {
  CmsApi,
  CuisineSymbol,
  ICuisine,
  IPost,
  IRestaurant,
  titleCase,
} from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { ArticleCard } from 'components/cards/ArticleCard';
import { SuggestRestaurant } from 'components/SuggestRestaurant';
import { useScreenSize } from 'hooks/useScreenSize';
import { GetStaticPaths } from 'next';
import Head from 'next/head';
import { LookingIllustration } from 'public/assets/illustrations';
import React from 'react';
import { CardGrid } from '../../../components/cards/CardGrid';
import { Contained } from '../../../components/Contained';
import { CUISINES } from '../../../constants';
import { generateTitle } from '../../../utils/metadata';

interface IPath {
  params: { city: string; ['cuisine-or-restaurant']: string };
}

interface RestaurautPageProps {
  restaurant: IRestaurant;
  posts: IPost[];
}

interface CuisinePageProps {
  cuisineSymbol: CuisineSymbol;
  posts: IPost[];
}

interface Props {
  restaurantPage?: RestaurautPageProps;
  cuisinePage?: CuisinePageProps;
}

const getPageTypeFromContext = (context): 'cuisinePage' | 'restaurantPage' => {
  const param = context.params?.['cuisine-or-restaurant'];

  // Is it a valid cuisine?
  if (
    Object.values(CUISINES).some(
      cuisine => cuisine.name.toLowerCase() === param,
    )
  ) {
    return 'cuisinePage';
  }

  return 'restaurantPage';
};

/**
 * Cuisine Pages     /london/cuisine
 * Restaurant Pages  /london/restaurant
 * Offer Pages       /london/restaurant/cuisine/slug
 * Redirects         /london/restaurant/cuisine  -->  /london/restaurant
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const cms = new CmsApi();

  let restaurants: IRestaurant[] = [];
  let foundAllRestaurants = false;
  let restaurantsPage = 1;

  // Get all restaurants
  while (!foundAllRestaurants) {
    const { restaurants: _restaurants } = await cms.getRestaurants(
      100,
      restaurantsPage,
    );

    if (_restaurants.length === 0) {
      foundAllRestaurants = true;
      continue;
    }

    restaurants = [...restaurants, ..._restaurants];
    restaurantsPage++;
  }

  const cuisinePaths: IPath[] = Object.values(CUISINES).map(item => ({
    params: {
      // TODO -> RMEOVE HARDCODED CITY
      city: 'london',
      'cuisine-or-restaurant': item.name.replace(' ', '-').toLowerCase(),
    },
  }));

  const restaurantPaths: IPath[] = restaurants.map(restaurant => ({
    params: {
      city: restaurant.city?.toLowerCase() ?? 'london',
      ['cuisine-or-restaurant']: restaurant.uriName,
    },
  }));

  return {
    paths: [...cuisinePaths, ...restaurantPaths],
    fallback: 'blocking',
  };
};

const getStaticCuisineProps = async ({ params }) => {
  const cuisineSymbol = String(
    params?.['cuisine-or-restaurant'],
  ).toUpperCase() as CuisineSymbol;
  const cuisineExists = Boolean(CUISINES[cuisineSymbol]);

  // Redirect to 404 for nonexistent page
  if (!cuisineExists) {
    return {
      notFound: true,
    };
  }

  const cmsApi = new CmsApi();
  const { posts = [] } = await cmsApi.getPostsOfCuisine(cuisineSymbol);

  return {
    props: {
      cuisinePage: {
        cuisineSymbol,
        posts,
      },
    },
  };
};

const getStaticRestaurantProps = async ({ params }) => {
  const cmsApi = new CmsApi();
  const restaurant = await cmsApi.getRestaurantFromUriName(
    params.city,
    params?.['cuisine-or-restaurant'],
  );

  // Verify that the param is a restaurant
  if (!restaurant) {
    return {
      notFound: true,
    };
  }

  const { posts = [] } = await cmsApi.getPostsOfRestaurant(restaurant.uriName);

  return {
    props: {
      restaurantPage: {
        restaurant,
        posts,
      },
    },
  };
};

export const getStaticProps = async ({ params }) => {
  const cuisineSymbol = String(
    params?.['cuisine-or-restaurant'],
  ).toUpperCase() as CuisineSymbol;
  const isCuisine = Boolean(CUISINES[cuisineSymbol]);

  if (isCuisine) {
    return getStaticCuisineProps({ params });
  }

  // Attempt to find props for the Restaurant page instead
  return getStaticRestaurantProps({ params });
};

export default function PageWrapper(props: Props) {
  return props.cuisinePage ? (
    <CuisinePage {...props.cuisinePage} />
  ) : (
    <RestaurantPage {...props.restaurantPage} />
  );
}

function RestaurantPage(props: RestaurautPageProps) {
  const { posts } = props;

  const cards = posts.map(post => (
    <ArticleCard key={post.id} compact {...post} />
  ));

  return (
    <div>
      {cards.length && (
        <div className="pt-10 pb-20">
          <CardGrid horizontalScroll rowLimit={2}>
            {cards}
          </CardGrid>
        </div>
      )}
    </div>
  );
}

function CuisinePage(props: CuisinePageProps) {
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
                cuisineName={cuisine.name}
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
          Sorry! There are no articles {!isMobile && <br />} for {cuisineName}{' '}
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

  const desktopIllustrationLocation = `/assets/cuisine-pages/${cuisine.name
    .replace(' ', '-')
    .toLowerCase()}-hero-desktop.svg`;

  const mobileIllustrationLocation = `/assets/cuisine-pages/${cuisine.name
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
