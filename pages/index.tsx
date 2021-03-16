import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React, { useContext } from 'react';
import { CmsApi } from 'services/cms';
import { IPost } from 'types/cms';
import { ArticleCard } from '../components/cards/ArticleCard';
import { Contained } from '../components/Contained';
import { HomeFavouritesSection } from '../components/home/HomeFavouritesSection';
import { HomeMapSection } from '../components/home/HomeMapSection';
import { HomeRecentSearchesSection } from '../components/home/HomeRecentSearchesSection';
import { HomeSearchSection } from '../components/home/HomeSearchSection';
import { SuggestDish } from '../components/SuggestDish';
import { METADATA } from '../constants';
import { ScreenContext } from '../contexts/screen';
import { useAuth } from '../hooks/useAuth';
import { useUserData } from '../hooks/useUserData';

interface Props {
  posts: Array<IPost>;
}

export const getStaticProps: GetStaticProps = async () => {
  const cms = new CmsApi();
  const { posts = [] } = await cms.getPosts(12);

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
};

const Index: NextPage<Props> = ({ posts = [] }) => {
  const cards = posts
    ? posts
        .slice?.(0, 6)
        .map(post => <ArticleCard compact key={post.id} {...post} />)
    : [];

  const { isDesktop } = useContext(ScreenContext);

  const { user } = useAuth();
  const { userData } = useUserData(user);
  console.log('userData', userData);

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

        <HomeFavouritesSection cards={cards} />

        <Contained>
          <SuggestDish />
        </Contained>
      </div>
    </>
  );
};

export default Index;
