import groq from 'groq';
import Head from 'next/head';
import React from 'react';
import client from '../client';
import { ArticleItem } from '../components/ArticleItem';
import { Content } from '../components/Content';
import { Footer } from '../components/Footer';
import MainPageSearch from '../components/MainPageSearch';
import { ISanityArticle } from '../types/article';
import { sanityPostQuery } from '../utils/search';

interface Props {
  posts: Array<ISanityArticle>;
}

const Index = (props: Props) => {
  const { posts = [] } = props;
  const cards = posts
    ? posts.slice(0, 4).map(post => <ArticleItem key={post.id} {...post} />)
    : [];

  return (
    <>
      <Head>
        <title>Tastiest</title>
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

      <Content>
        <MainPageSearch />

        <div className="flex justify-center font-somantic text-twoxl mt-4 text-primary">
          <p>Discover your</p>

          <div className="mx-2 relative flex justify-center">
            next
            <div className="absolute w-4/5 h-1 mt-10 rounded-full bg-secondary"></div>
          </div>
          <p>favourite dish!</p>
        </div>

        <div className="md:flex overflow-x-hidden mx-6 my-8 space-x-6">
          {cards}
        </div>
      </Content>

      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const query = groq`
    *[_type == "post"]|order(publishedAt desc) {
      ${sanityPostQuery}
    }
  `;

  let posts: ISanityArticle;
  try {
    posts = await client.fetch(query);
    console.log('Posts', posts);
  } catch (error) {
    console.warn('Error:', error);
  }

  return {
    props: {
      posts,
    },
  };
};

export default Index;
