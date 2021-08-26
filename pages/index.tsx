import { CmsApi, ITastiestDish } from '@tastiest-io/tastiest-utils';
import { HomeTastiestDishes } from 'components/home/HomeTastiestDishes';
import { SuggestRestaurant } from 'components/SuggestRestaurant';
import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import React from 'react';
import { Contained } from '../components/Contained';
import { HomeMapSection } from '../components/home/HomeMapSection';
import { HomeRecentSearchesSection } from '../components/home/HomeRecentSearchesSection';
import { HomeSearchSection } from '../components/home/HomeSearchSection';
import { METADATA } from '../constants';

interface Props {
  dishes: Array<ITastiestDish>;
}

export const getStaticProps: GetStaticProps = async () => {
  const cms = new CmsApi();
  const { dishes = [] } = await cms.getTastiestDishes(20);

  return {
    props: {
      dishes,
    },
    revalidate: 360,
  };
};

const Index: NextPage<Props> = ({ dishes = [] }) => {
  const cards = dishes ? dishes.slice?.(0, 20) : [];

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
        <Contained>
          <HomeSearchSection />
        </Contained>

        <HomeRecentSearchesSection />
      </div>

      <div className="flex flex-col space-y-16">
        <Contained>
          <HomeMapSection />
        </Contained>

        <HomeTastiestDishes cards={cards} />
        <SuggestRestaurant />
      </div>
    </>
  );
};

export default Index;
