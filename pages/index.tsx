import { CmsApi, IPost } from '@tastiest-io/tastiest-utils';
import { Contained } from 'components/Contained';
import HomeFeaturedExperiencesSection from 'components/home/HomeFeaturedExperiencesSection';
import HomeInformationSection from 'components/home/HomeInformationSection';
import SuggestRestaurantPrompBox from 'components/SuggestRestaurantPrompBox';
import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import React from 'react';
import { HomeHeroSection } from '../components/home/HomeHeroSection';
import { METADATA } from '../constants';

interface Props {
  posts: IPost[];
}

export const getStaticProps: GetStaticProps = async () => {
  const cms = new CmsApi();
  // const { dishes = [] } = await cms.getTastiestDishes(20);
  const { posts = [] } = await cms.getTopPosts(10);

  return {
    props: {
      posts,
    },
    revalidate: 360,
  };
};

const Index: NextPage<Props> = ({ posts = [] }) => {
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
          <SuggestRestaurantPrompBox />
        </Contained>

        {/* <HomeRecentSearchesSection /> */}
      </div>
    </>
  );
};

export default Index;
