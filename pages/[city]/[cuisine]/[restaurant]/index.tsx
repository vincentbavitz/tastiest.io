import {
  CmsApi,
  dlog,
  IRestaurant,
  ITastiestDish,
  titleCase,
} from '@tastiest-io/tastiest-utils';
import { ArticleFeatureVideoWidget } from 'components/article/widgets/ArticleFeatureVideoWidget';
import { ArticleCard } from 'components/cards/ArticleCard';
import { CardGrid } from 'components/cards/CardGrid';
import { Contained } from 'components/Contained';
import { RestaurantMapModal } from 'components/modals/RestaurantMapModal';
import FollowButton from 'components/restaurant/FollowButton';
import { RichBody } from 'components/RichBody';
import TabbedContent from 'components/TabbedContent';
import { useHeaderTransparency } from 'hooks/useHeaderTransparency';
import { useScreenSize } from 'hooks/useScreenSize';
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { TastiestAward } from 'public/assets/ui';
import { ParsedUrlQuery } from 'querystring';
import React, { useEffect, useState } from 'react';
import { useVideo, useWindowScroll } from 'react-use';
import { getGoogleMapLink } from 'utils/location';
import { generateTitle } from 'utils/metadata';
import { UI } from '../../../../constants';

interface BestDishAwardProps {
  bestDish: ITastiestDish;
  fullWidth?: boolean;
}

const BestDishAward = (props: BestDishAwardProps) => {
  const { bestDish, fullWidth } = props;

  return (
    <div
      key={bestDish.id}
      style={{ width: 'fit-content' }}
      className="flex items-center"
    >
      <TastiestAward className="w-14" />
      <div>
        <div
          style={{ maxWidth: fullWidth ? 'unset' : '13rem' }}
          className="pl-4 text-xl leading-5 font-primary text-primary"
        >
          Best
          <br />
          {bestDish.name}
        </div>
      </div>
    </div>
  );
};

interface IPath {
  params: {
    city: string;
    cuisine: string;
    restaurant: string;
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const cms = new CmsApi();

  let page = 1;
  let foundAllRestaurants = false;
  const restaurants: IRestaurant[] = [];

  // Contentful only allows 100 at a time
  while (!foundAllRestaurants) {
    const { restaurants: _restaurants } = await cms.getRestaurants(100, page);

    if (_restaurants.length === 0) {
      foundAllRestaurants = true;
      continue;
    }

    restaurants.push(..._restaurants);
    page++;
  }

  const paths: IPath[] = restaurants.map(restaurant => ({
    params: {
      city: restaurant.city.toLowerCase(),
      cuisine: restaurant.cuisine.toLowerCase(),
      restaurant: restaurant.uriName.toLowerCase(),
    },
  }));

  // Blocking ensures that if the path isn't cached,
  // we build it before serving.
  return { paths, fallback: 'blocking' };
};

export const getStaticProps = async (
  context: GetStaticPropsContext<ParsedUrlQuery>,
) => {
  const cms = new CmsApi();

  const restaurantUriName = context.params?.restaurant;
  const restaurant = await cms.getRestaurantFromUriName(
    String(restaurantUriName),
  );

  dlog('index ➡️ restaurant:', restaurant);

  if (!restaurant) {
    return {
      props: { restaurant: null as IRestaurant },
      notFound: true,
    };
  }

  // Get posts from restaurant
  const { posts } = await cms.getPostsOfRestaurant(restaurant.uriName, 100);

  // Get the restaurant's Tastiest Dishes
  const { dishes: tastiestDishes } = await cms.getTastiestDishesOfRestaurant(
    restaurant.uriName,
  );

  return {
    props: { restaurant, tastiestDishes, posts },
    revalidate: 360,
  };
};

const RestaurantPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>,
) => {
  const { restaurant, tastiestDishes, posts } = props;
  const { isMobile, isTablet, isDesktop, isHuge } = useScreenSize();

  // As a percentage
  // prettier-ignore
  const heroIllustrationSizeRem = 
    isHuge ? 60 :
    isTablet ? 40 :
    isMobile ? 30 :
    45;

  const heroIllustrationH = 671;
  const heroIllustrationW = 1492;
  const heroIllustrationHeightRem =
    (heroIllustrationH / heroIllustrationW) * heroIllustrationSizeRem;

  const router = useRouter();
  const [mapModalOpen, setMapModalOpen] = useState(false);

  dlog('index ➡️ posts:', posts);
  dlog('index ➡️ tastiestDishes:', tastiestDishes);

  // Transparent header on first load
  const { setTransparancy } = useHeaderTransparency();
  useEffect(() => {
    setTransparancy(true);

    // When leaving this page, make opaque
    const handleRouteChange = () => {
      setTransparancy(false);
    };

    router?.events?.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  // Remove transparency on scroll
  const TRANSPARENCY_Y_CUTOFF_PX = 250;
  const { y: scrollY } = useWindowScroll();

  useEffect(() => {
    if (scrollY > TRANSPARENCY_Y_CUTOFF_PX) {
      setTransparancy(false);
    } else {
      setTransparancy(true);
    }

    return () => setTransparancy(false);
  }, [scrollY]);

  const [featureVideo] = useVideo(
    <video
      loop
      muted
      autoPlay
      src={'/test.mp4'}
      className="object-cover w-full h-full bg-gray-400"
    />,
  );

  return (
    <div style={{ marginTop: `-${UI.HEADER_HEIGHT_DESKTOP_REM}rem` }}>
      <Head>
        <title>{generateTitle(restaurant.name)}</title>
      </Head>

      <NextSeo
        title={generateTitle(restaurant.name)}
        description={`The Tastiest deals at ${restaurant.name}`}
        openGraph={{
          title: generateTitle(restaurant.name),
          description: `The Tastiest deals at ${restaurant.name}`,
          images: [
            {
              url: restaurant.meta?.image?.url,
              width: 1200,
              height: 630,
              alt: `Tastiest's partner ${restaurant.name}`,
            },
          ],
        }}
      />

      {/* Restaurant's Feature Video */}
      <div
        style={{ maxHeight: '28rem' }}
        className="relative flex items-center overflow-hidden"
      >
        <div className="relative w-full aspect-w-10 mobile:aspect-w-12 tablet:aspect-w-16 aspect-h-9">
          <Image src={'/test.png'} layout="fill" priority />
          {featureVideo}
        </div>

        {/* White overlays */}
        <div className="absolute inset-0 opacity-25 bg-tertiary"></div>
        <div className="absolute bottom-0 left-0 right-0 top-1/2 bg-gradient-to-t from-tertiary"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-end space-y-4">
          {/* Restaurant Name */}
          <h1 className="text-3xl font-medium mobile:text-4xl text-primary font-primary">
            {titleCase(restaurant.name)} -{' '}
            {titleCase(restaurant.location.displayLocation)}
          </h1>

          {/* Follow and Notifications */}
          <FollowButton restaurant={restaurant} />
        </div>
      </div>

      <Contained maxWidth={900}>
        <div className="pt-8 tablet:pt-12">
          <TabbedContent>
            {[
              {
                id: 'about',
                label: 'About',
                content: (
                  <div className="flex flex-col py-4 pb-10 space-y-10">
                    <div className="">
                      <ArticleFeatureVideoWidget video={restaurant.video} />
                      <h4 className="pt-2 text-lg font-medium">
                        Interview with the owner of {restaurant.name}
                      </h4>
                    </div>

                    <div>
                      <RichBody body={restaurant.description}></RichBody>
                    </div>

                    {/* Image and map overlay */}
                    <div className="relative">
                      <div
                        className="flex justify-center pt-6 tablet:pt-20"
                        style={{ width: '200%', transform: `translateX(-25%)` }}
                      >
                        <div
                          style={{
                            width: `${heroIllustrationSizeRem}rem`,
                            height: `${heroIllustrationHeightRem}rem`,
                          }}
                          className="relative"
                        >
                          <Image
                            src={restaurant.heroIllustration.url}
                            priority={true}
                            objectFit="cover"
                            loading="eager"
                            layout="fill"
                            unoptimized
                          />
                        </div>
                      </div>

                      <div className="absolute inset-0 flex flex-col items-end justify-end leading-tight">
                        <div className="px-4 py-2 bg-white bg-opacity-50 rounded-lg shadow-lg">
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href={getGoogleMapLink(
                              restaurant.location.lat,
                              restaurant.location.lon,
                            )}
                          >
                            {restaurant?.location?.address}
                          </a>

                          <div className="pt-1">
                            <span
                              onClick={() => setMapModalOpen(true)}
                              className="font-medium underline cursor-pointer text-primary"
                            >
                              View Map
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                id: 'experiences',
                label: 'Experiences',
                content: (
                  <div className="flex flex-col items-center pt-4 pb-10 space-y-4">
                    {isMobile ? (
                      posts.map(post => (
                        <div
                          key={post.id}
                          style={{ maxWidth: '300px' }}
                          className=""
                        >
                          <ArticleCard {...post} />
                        </div>
                      ))
                    ) : (
                      <CardGrid>
                        {[...posts, ...posts, ...posts, ...posts].map(post => (
                          <ArticleCard key={post.id} {...post} />
                        ))}
                      </CardGrid>
                    )}
                  </div>
                ),
              },
            ]}
          </TabbedContent>
        </div>
      </Contained>

      <Contained maxWidth={900}>
        {/* <div className="flex flex-col-reverse w-full pb-16 tablet:flex-row">
          <div className="flex flex-col space-y-6">
            <div className="pt-6 tablet:pt-0">
              <ArticleFeatureVideoWidget video={restaurant.video} />
            </div>

            <div>
              <RichBody body={restaurant.description}></RichBody>
            </div>
          </div>

          <div className="flex flex-col pl-0 space-y-2 tablet:pl-8">
            <div className="flex flex-wrap items-end justify-between">
              <h2
                style={{ minWidth: '10rem' }}
                className="text-3xl text-primary font-primary whitespace-nowrap"
              >
                {restaurant?.name}
              </h2>

              {!isDesktop && restaurant.location.displayLocation && (
                <div className="">
                  <LocationIndictor
                    location={restaurant.location.displayLocation}
                  />
                </div>
              )}
            </div>

            {isDesktop && restaurant.location.displayLocation && (
              <div className="">
                <LocationIndictor
                  location={restaurant.location.displayLocation}
                />
              </div>
            )}

            <div className="leading-tight">
              <a
                target="_blank"
                rel="noreferrer"
                href={getGoogleMapLink(
                  restaurant.location.lat,
                  restaurant.location.lon,
                )}
              >
                {restaurant?.location?.address}
              </a>

              <div className="pt-1">
                <span
                  onClick={() => setMapModalOpen(true)}
                  className="font-medium underline cursor-pointer text-primary"
                >
                  View Map
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-between tablet:flex-col">
              <div className="pt-6">
                <p className="mb-1 font-medium border-b border-opacity-10 border-alt-1">
                  Opening Times
                </p>
                <div className="text-sm leading-5 text-left">
                  <RichBody
                    paragraph={{ justify: false, margins: false }}
                    body={restaurant.tradingHoursText}
                  ></RichBody>
                </div>
              </div>

              <div className="flex justify-center mobile:block">
                {isDesktop && (
                  <div className="flex flex-col py-6 space-y-4">
                    {tastiestDishes.map((dish, key) => (
                      <BestDishAward key={key} bestDish={dish} />
                    ))}
                  </div>
                )}

                {isTablet && (
                  <div className="grid grid-cols-2 grid-gap-4">
                    {tastiestDishes.map((dish, key) => (
                      <div
                        key={key}
                        className={clsx(
                          'flex',
                          key % 2 === 0 ? 'justify-start' : 'justify-end',
                        )}
                      >
                        <BestDishAward bestDish={dish} />
                      </div>
                    ))}
                  </div>
                )}

                {isMobile && (
                  <div className="flex flex-col items-start w-full pt-6 space-y-6">
                    {tastiestDishes.map((dish, key) => (
                      <BestDishAward key={key} fullWidth bestDish={dish} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div> */}
      </Contained>

      <RestaurantMapModal
        restaurant={restaurant}
        isOpen={mapModalOpen}
        close={() => setMapModalOpen(false)}
      />
    </div>
  );
};

export default RestaurantPage;
