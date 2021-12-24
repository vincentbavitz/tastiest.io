import { CmsApi, ExperiencePost } from '@tastiest-io/tastiest-utils';
import { Contained } from 'components/Contained';
import HomeFeaturedExperiencesSection from 'components/home/HomeFeaturedExperiencesSection';
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

interface Props {
  posts: ExperiencePost[];
}

export const getStaticProps: GetStaticProps = async context => {
  const cms = new CmsApi(
    undefined,
    undefined,
    process.env.NODE_ENV as 'production' | 'development',
  );

  // const { dishes = [] } = await cms.getTastiestDishes(20);
  const { posts = [] } = await cms.getTopPosts(10);

  return {
    props: {
      posts,
    },
    revalidate: 360,
  };
};

const Index = ({
  posts = [],
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const cards = posts ? posts.slice?.(0, 20) : [];

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

      <div className="flex flex-col mb-16 space-y-16">
        <div>
          <HomeHeroSection />
          <HomeFeaturedExperiencesSection cards={cards} />
        </div>

        <HomeInformationSection />

        <Contained>
          <div className="flex flex-col text-center space-y-4 text-lg px-6 py-8 shadow-lg bg-white rounded-xl">
            <p className="font-medium">
              Tastiest was established with one mission in mind: revolutionise
              how you discover exceptional food online.
            </p>

            <p>
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
