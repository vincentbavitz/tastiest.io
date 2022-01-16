import { CmsApi } from '@tastiest-io/tastiest-utils';
import { Contained } from 'components/Contained';
import HomeAwardWinningDishesSection from 'components/home/HomeAwardWinningDishesSection';
import HomeFeaturedExperiencesSection from 'components/home/HomeFeaturedExperiencesSection';
import HomeFeaturedRestaurantsSection from 'components/home/HomeFeaturedRestaurantsSection';
import HomeInformationSection from 'components/home/HomeInformationSection';
import SuggestRestaurantPrompBox from 'components/SuggestRestaurantPrompBox';
import { Layouts } from 'layouts/LayoutHandler';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { HomeHeroSection } from '../components/home/HomeHeroSection';
import { METADATA } from '../constants';

function shuffleArray(array) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

export const getStaticProps: GetStaticProps = async context => {
  const cms = new CmsApi();

  // const { dishes = [] } = await cms.getTastiestDishes(20);
  const { posts = [] } = await cms.getTopPosts(10);
  const { dishes } = await cms.getTastiestDishes(15);
  const { restaurants } = await cms.getRestaurants(10);

  const shuffledDishes = shuffleArray(dishes);

  return {
    props: {
      posts,
      restaurants,
      dishes: shuffledDishes,
    },
    revalidate: 360,
  };
};

const Index = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { posts = [], restaurants = [], dishes = [] } = props;
  const cards = posts.slice(0, 20);

  return (
    <>
      <Head>
        <title>{METADATA.TITLE_SUFFIX}</title>
      </Head>

      <NextSeo
        title="Tastiest - Home"
        description="Tastiest food no matter where you are"
        openGraph={{
          title: 'Tastiest - Home',
          description: 'Tastiest food no matter where you are',
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

      <div className="flex flex-col mb-24 space-y-24">
        <div>
          <HomeHeroSection />

          <HomeFeaturedRestaurantsSection restaurants={restaurants} />
          <HomeAwardWinningDishesSection dishes={dishes} />
          <HomeFeaturedExperiencesSection cards={cards} />
        </div>

        <HomeInformationSection />

        <Contained>
          <div className="relative flex flex-col overflow-hidden text-center space-y-4 text-lg px-6 py-8 shadow-lg bg-white rounded-xl">
            <div className="absolute -top-24 -left-24 z-0 bg-blue-300 bg-opacity-10 filter blur-2xl rounded-full w-64 h-64"></div>
            <div className="absolute -bottom-624 -right-24 z-0 bg-alt-1 bg-opacity-5 filter blur-2xl rounded-full w-64 h-64"></div>

            <p className="font-medium z-10">
              Tastiest was established with one mission in mind: revolutionise
              how you discover exceptional food online.
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
