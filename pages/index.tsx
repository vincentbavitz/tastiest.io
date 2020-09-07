import '../assets/style.css';
import NavBar from '../components/NavBar';
import CuisineBar from '../components/CuisineBar';
import SubscribeToEmailList from '../components/SubscribeToEmailList';
import BlogCard from '../components/BlogCard';
import groq from 'groq';
import client from '../client';
import Link from 'next/link';
import Head from 'next/head';

const Index = ({ posts }) => {
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
        <BlogCard />
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
                  </Link>{' '}
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
