import { CmsApi, ITastiestDish } from '@tastiest-io/tastiest-utils';
import { HomeTastiestDishes } from 'components/home/HomeTastiestDishes';
import { SuggestRestaurant } from 'components/SuggestRestaurant';
import { useScreenSize } from 'hooks/useScreenSize';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { Contained } from '../components/Contained';
import { HomeMapSection } from '../components/home/HomeMapSection';
import { HomeRecentSearchesSection } from '../components/home/HomeRecentSearchesSection';
import { HomeSearchSection } from '../components/home/HomeSearchSection';
import { METADATA } from '../constants';
import { useAuth } from '../hooks/auth/useAuth';
import { useUserData } from '../hooks/useUserData';

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

  const { user } = useAuth();
  const { isDesktop } = useScreenSize();
  const { userData } = useUserData(user);

  return (
    <>
      <Head>
        <title>{METADATA.TITLE_SUFFIX}</title>
        <meta
          property="og:title"
          content="Tastiest food no matter where you are"
          key="title"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        ></meta>
      </Head>

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
