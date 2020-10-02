import imageUrlBuilder from '@sanity/image-url';
import groq from 'groq';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import '../assets/style.scss';
import client from '../client';
import { ArticleItem } from '../components/ArticleItem';
import { CuisineBar } from '../components/CuisineBar';
import NavBar from '../components/NavBar';
import SubscribeToEmailList from '../components/SubscribeToEmailList';
import { Hashtag } from '../objects';
import { rootReducer } from '../state/reducers';
import { IPost } from '../types/post';
import { generateURL } from '../utils/routing';

const store = createStore(rootReducer);

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

interface Props {
  posts: Array<IPost>;
}

const Index = (props: Props) => {
  const { posts } = props;

  const cards = posts.map(post => (
    <ArticleItem
      key={post.title.toLowerCase()}
      href={`/[slug]/${post.slug}`}
      imageUrl={post.mainImage && urlFor(post.mainImage.image).url()}
      altTag={post.mainImage && post.mainImage.altText}
      title={post.title}
      paragraph={post.subtitle}
      hashtags={post.tags && post.tags.map(tag => new Hashtag(tag))}
    />
  ));

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
        <div className="flex overflow-x-hidden">{cards}</div>
      </div>
      <div>
        <h1>Welcome to a blog! hello</h1>
        <ul>
          {posts
            .filter(post => post.slug && post.cuisine && post.city)
            .map(post => {
              const { href, as } = generateURL({
                city: post.city,
                cuisine: post.cuisine,
                slug: post?.slug?.current,
              });

              return (
                <div key={post._id}>
                  <button className="m-1 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                    <Link href={href} as={as}>
                      <a>{post.title}</a>
                    </Link>
                  </button>
                  ({new Date(post._updatedAt).toDateString()})
                </div>
              );
            })}
        </ul>
      </div>
    </Provider>
  );
};

export const getStaticProps = async () => {
  const query = groq`
    *[_type == "post" ]|order(publishedAt desc) {
      title,
      subtitle,
    "name": author->name,
    "authorImage": author->image,
    "cuisine": cuisine->title,
    "city": city->title,
    "tags": tags[]->title,
    "slug": slug.current,
    publishedAt,
    location,
    restaurantName,
    dishName,
    mainImage,
    backdropSVG,
    video,
    body,
    }
  `;

  const posts = await client.fetch(query);

  console.log('First post:', posts[0]);

  return {
    props: {
      posts,
    },
  };
};

export default Index;
