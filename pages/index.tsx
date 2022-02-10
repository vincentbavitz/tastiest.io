import { RightOutlined } from '@ant-design/icons';
import {
  CmsApi,
  ExperiencePost,
  RestaurantContentful,
  TastiestDish,
} from '@tastiest-io/tastiest-utils';
import { Contained } from 'components/Contained';
import HomeAwardWinningDishesSection from 'components/home/HomeAwardWinningDishesSection';
import HomeFeaturedExperiencesSection from 'components/home/HomeFeaturedExperiencesSection';
import HomeFeaturedRestaurantsSection from 'components/home/HomeFeaturedRestaurantsSection';
import HomeInformationSection from 'components/home/HomeInformationSection';
import SuggestRestaurantPrompBox from 'components/SuggestRestaurantPrompBox';
import { Layouts } from 'layouts/LayoutHandler';
import { GetServerSideProps } from 'next';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import Link from 'next/link';
import nookies from 'nookies';
import React, { useEffect, useState } from 'react';
import { HomeHeroSection } from '../components/home/HomeHeroSection';
import { METADATA } from '../constants';

function shuffleArray(array) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

export const getServerSideProps: GetServerSideProps = async context => {
  const hasAccess = nookies.get(context).hasAccess;

  if (!hasAccess || hasAccess !== 'true') {
    return {
      props: {},
      redirect: {
        destination: '/invite',
      },
    };
  }

  return {
    props: {},
  };
};

const Index = () => {
  const [posts, setPosts] = useState<ExperiencePost[]>([]);
  const [dishes, setDishes] = useState<TastiestDish[]>([]);
  const [restaurants, setRestaurants] = useState<RestaurantContentful[]>([]);

  useEffect(() => {
    const cms = new CmsApi();

    const fetchContent = async () => {
      const { posts: _posts = [] } = await cms.getTopPosts(10);
      const { dishes: _dishes } = await cms.getTastiestDishes(15);
      const { restaurants: _restaurants } = await cms.getRestaurants(10);

      return { posts: _posts, dishes: _dishes, restaurants: _restaurants };
    };

    fetchContent().then(({ posts, dishes, restaurants }) => {
      setPosts(posts);
      setRestaurants(restaurants);
      setDishes(shuffleArray(dishes));
    });
  }, []);

  const cards = posts.slice(0, 20);

  return (
    <>
      <Head>
        <title>{METADATA.TITLE_SUFFIX}</title>
      </Head>

      <NextSeo
        title="Tastiest - Home"
        description={METADATA.TITLE_SUFFIX}
        openGraph={{
          title: 'Tastiest - Home',
          description: METADATA.TITLE_SUFFIX,
          images: [
            {
              url: 'https://tastiest.io/assets/seo/page/home-800x600.png',
              width: 800,
              height: 600,
              alt: 'Tastiest Hero',
            },
            {
              url: 'https://tastiest.io//assets/seo/page/home-400x300.png',
              width: 400,
              height: 300,
              alt: 'Tastiest Hero',
            },
          ],
        }}
      />

      <div className="flex flex-col mb-10 space-y-10">
        <div>
          <HomeHeroSection />

          <Contained>
            <h2 className="text-2xl font-medium text-center font-primary border-dark px-6 whitespace-nowrap tracking-wider pb-4">
              WHAT WE DO FOR YOU
            </h2>

            <div className="flex flex-col items-center space-y-16 pt-6 pb-32">
              <div className="relative">
                <div
                  style={{
                    maxWidth: '600px',
                    filter: 'drop-shadow(9px 9px 15px #3882bb20)',
                  }}
                  className="relative flex items-center gap-4 bg-white rounded-lg py-4 px-10 z-10"
                >
                  <div
                    style={{ filter: 'hue-rotate(215deg)' }}
                    className="relative w-16 h-16"
                  >
                    <img src="https://static.tastewise.io/uploads/foodservice_db765c7297.png" />
                  </div>

                  <span className="font-medium text-base leading-none">
                    Partnering only with the best restaurants so you have the
                    best experiences.
                  </span>

                  <RightOutlined
                    style={{ filter: 'drop-shadow(0 0 8px #3882bb)' }}
                    className="text-xl text-secondary"
                  />
                </div>

                <svg
                  // width="80px"
                  height="90px"
                  version="1.1"
                  viewBox="0 0 140.33 288.78"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute  left-64 z-0"
                  style={{
                    filter: 'drop-shadow(0 0 12px blue',
                    bottom: '-65px',
                  }}
                >
                  <g transform="translate(-16.27 -6.1159)">
                    <path
                      d="m22.679 11.069c-0.3695 4.8665-1.4142 9.6684-2.2447 14.473-1.7726 11.204-2.8273 22.506-3.6611 33.813-0.58738 12.093-1.1395 24.327 1.3009 36.275 0.546 2.673 1.3412 5.289 2.0119 7.9335 0.98675 2.7572 1.836 5.5675 2.9602 8.2715 5.1021 12.271 12.66 23.421 21.143 33.589 2.2708 2.7219 4.6979 5.3096 7.0468 7.9644 2.5112 2.5944 4.9782 5.2325 7.5336 7.7834 4.8975 4.8888 11.173 10.697 16.215 15.421 7.9248 7.4242 15.811 14.876 23.608 22.435 9.0379 8.9427 17.903 18.156 25.358 28.493 4.6567 6.4569 5.3694 8.0902 9.2955 14.908 5.5793 10.562 9.9619 21.781 12.586 33.449 0.41336 1.8376 0.72138 3.6974 1.0821 5.5461 0.82293 4.4547 1.2124 8.964 1.5626 13.474l8.126-4.2716c-0.78463-4.3446-1.6085-8.6827-2.7058-12.962-1.2217-4.5606-1.7167-6.702-3.2729-11.25-3.2007-9.3537-7.5022-18.292-12.412-26.861-3.8186-6.2063-5.2738-8.8746-9.6703-14.771-7.6749-10.293-16.813-19.358-26.206-28.064-16.195-14.764-32.572-29.397-47.41-45.556-5.6558-6.5845-8.1723-9.1939-13.165-16.268-7.3809-10.457-13.208-21.742-16.343-34.201-0.5636-2.6803-1.2368-5.3399-1.6908-8.041-2.0276-12.064-1.5865-24.414-0.4508-36.537 1.1831-11.554 2.4997-23.13 5.188-34.449 1.1188-4.3146 0.95207-3.8495 2.1711-7.9072 0.69066-2.2989 1.3866-4.631 2.3208-6.8474 0.11451-0.27165 0.26018-0.52909 0.39026-0.79364l-10.668 4.953z"
                      fill="#3882bb"
                      strokeWidth=".26458"
                      style={{ paintOrder: 'stroke fill markers' }}
                    />
                  </g>
                </svg>
              </div>

              <div className="relative">
                <div
                  style={{
                    maxWidth: '600px',
                    filter: 'drop-shadow(9px 9px 15px #3882bb20)',
                  }}
                  className="flex items-center gap-4 bg-white rounded-lg py-4 px-10"
                >
                  <div
                    style={{
                      filter: 'hue-rotate(215deg)',
                      transform: 'translateY(7px)',
                    }}
                    className="relative w-16 h-16"
                  >
                    <img src="https://static.tastewise.io/uploads/packaging_ac9b335aeb.png" />
                  </div>

                  <span className=" font-medium - text-base leading-none">
                    Partnering only with the best restaurants so you have the
                    best experiences.
                  </span>

                  <RightOutlined
                    style={{ filter: 'drop-shadow(0 0 8px #3882bb)' }}
                    className="text-xl text-secondary"
                  />
                </div>
              </div>
            </div>

            <p></p>
          </Contained>

          <div className="w-full bg-primary-inverse py-12">
            <Contained>
              <h3 className="font-medium text-light text-lg leading-7">
                Follow restaurants and get notified when they lorem ipsum
                <br /> smoke some gypsum
              </h3>
            </Contained>
          </div>

          <HomeFeaturedRestaurantsSection restaurants={restaurants} />
          <HomeAwardWinningDishesSection dishes={dishes} />
          <HomeFeaturedExperiencesSection cards={cards} />
        </div>

        <HomeInformationSection />

        <Contained>
          <div className="relative flex flex-col overflow-hidden text-center space-y-4 text-lg px-6 py-8 shadow-lg bg-white rounded-xl">
            <div className="absolute -top-24 -left-24 z-0 bg-blue-300 bg-opacity-10 filter blur-2xl rounded-full w-64 h-64"></div>
            <div className="absolute -bottom-624 -right-24 z-0 bg-alt-1 bg-opacity-5 filter blur-2xl rounded-full w-64 h-64"></div>

            <p className="text-xl font-medium z-10">
              Tastiest was established with one mission in mind:
              <br />{' '}
              <span className="italic">
                revolutionise how you discover exceptional food online.
              </span>
            </p>

            <p className="z-10">
              All our restaurant partners are recommended by you, our foodie
              community, via{' '}
              <Link href="/recommend">
                <a className="text-secondary">this page</a>
              </Link>{' '}
              - only the best make it. We interview chefs to understand their
              culinary creations, and uncover their stories so you see more than
              just a menu.
            </p>

            <p>
              Book, discover and stay up to date with must-try dishes and
              restaurants by following on Tastiest.
            </p>
          </div>
        </Contained>

        <Contained>
          <div className="flex justify-center w-full">
            <SuggestRestaurantPrompBox />
          </div>
        </Contained>

        {/* <HomeRecentSearchesSection /> */}
      </div>
    </>
  );
};

Index.layout = Layouts.HOME;
export default Index;
