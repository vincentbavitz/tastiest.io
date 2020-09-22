import imageUrlBuilder from '@sanity/image-url';
import groq from 'groq';
import Head from 'next/head';
import Link from 'next/link';
import '../assets/style.scss';
import client from '../client';
import ArticleItem from '../components/ArticleItem';
import { CuisineBar } from '../components/CuisineBar';
import NavBar from '../components/NavBar';
import SubscribeToEmailList from '../components/SubscribeToEmailList';
import { Hashtag } from '../objects';
import { IPost } from '../types/post';

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

interface Props {
  posts: Array<IPost>;
}

const Index = (props: Props) => {
  const { posts } = props;

  console.log('posts:', posts);

  const cards = posts.map(post => (
    <ArticleItem
      key={post.title.toLowerCase()}
      href={`/post/${post.slug}`}
      sameSite=""
      image={post.mainImage && urlFor(post.mainImage.image).url()}
      altTag={post.mainImage && post.mainImage.altText}
      title={post.title}
      paragraph={post.subtitle}
      hashtags={post.tags && post.tags.map(tag => new Hashtag(tag))}
    />
  ));

  return (
    <div>
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
      <div className="max-w-screen-xl mx-auto md:m-6">
        <NavBar />
        <CuisineBar />
        <SubscribeToEmailList />
        <div className="flex cards">{cards}</div>
      </div>
      <div>
        <h1>Welcome to a blog! hello</h1>
        <ul>
          {posts.map(post => {
            return (
              <div key={post._id}>
                <button className="m-1 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                  <Link href="/post/[slug]" as={`/post/${post.slug.current}`}>
                    <a>{post.title}</a>
                  </Link>
                </button>
                ({new Date(post._updatedAt).toDateString()})
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const posts = await client.fetch(groq`
    *[_type == "post" ]|order(publishedAt desc)
  `);
  return {
    props: {
      posts,
    },
  };
};

export default Index;
