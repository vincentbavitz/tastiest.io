import groq from 'groq';
import Head from 'next/head';
import React from 'react';
import client from '../client';
import { ArticleItem } from '../components/ArticleItem';
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
    ? posts.map(post => <ArticleItem key={post.id} {...post} />)
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

      <div>
        <MainPageSearch />
        <div className="md:flex overflow-x-hidden m-6">{cards}</div>
      </div>

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
