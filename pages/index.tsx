import groq from 'groq';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import '../assets/style.scss';
import client from '../client';
import { Footer } from '../components/Footer';
import { ArticleItem } from '../components/ArticleItem';
import { CuisineBar } from '../components/CuisineBar';
import NavBar from '../components/NavBar';
import SubscribeToEmailList from '../components/SubscribeToEmailList';
import { rootReducer } from '../state/reducers';
import { ISanityArticle } from '../types/article';
import { generateURL } from '../utils/routing';
import { sanityPostQuery } from '../utils/search';

const store = createStore(rootReducer);

interface Props {
  posts: Array<ISanityArticle>;
}

const Index = (props: Props) => {
  const { posts = [] } = props;
  const cards = posts
    ? posts.map(post => <ArticleItem key={post.title} {...post} />)
    : [];

  return (
    <Provider store={store}>
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
        <NavBar />
        <CuisineBar />
        <SubscribeToEmailList />
        <div className="md:flex overflow-x-hidden m-6">{cards}</div>
      </div>
      <div>
        <h1>Welcome to a blog! hello</h1>
        <ul>
          {posts?.length &&
            posts
              .filter(post => post.slug && post.cuisine && post.city)
              .map(post => {
                const { href, as } = generateURL({
                  city: post.city,
                  cuisine: post.cuisine,
                  slug: post?.slug,
                });

                return (
                  <div key={post.id}>
                    <button className="m-1 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                      <Link href={href} as={as}>
                        <a>{post.title}</a>
                      </Link>
                    </button>
                    ({new Date(post.updatedAt).toDateString()})
                  </div>
                );
              })}
        </ul>
      </div>
      <Footer />
    </Provider>
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
