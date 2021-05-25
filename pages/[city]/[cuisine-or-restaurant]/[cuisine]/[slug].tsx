// [slug].js
import { CmsApi, dlog, IPost } from '@tastiest-io/tastiest-utils';
import { ArticleSuggestRestaurant } from 'components/article/ArticleSuggestRestaurant';
import RecommendedPosts from 'components/sections/RecommendedPosts';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { Article } from '../../../../components/article/Article';
import { generateTitle } from '../../../../utils/metadata';

interface IPath {
  params: {
    slug: string;
    city: string;
    cuisine: string;
    ['cuisine-or-restaurant']: string;
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const cms = new CmsApi();
  let posts: IPost[] = [];
  let page = 1;
  let foundAllPosts = false;

  // Contentful only allows 100 at a time
  while (!foundAllPosts) {
    const { posts: _posts } = await cms.getPosts(100, page);

    if (_posts.length === 0) {
      foundAllPosts = true;
      continue;
    }

    posts = [...posts, ..._posts];
    page++;
  }

  const paths: IPath[] = posts.map(item => ({
    params: {
      slug: item.slug,
      city: item.city.toLowerCase(),
      cuisine: item.cuisine.toLowerCase(),
      'cuisine-or-restaurant': item.restaurant.uriName.toLowerCase(),
    },
  }));

  // Blocking ensures that if the path isn't cached,
  // we build it before serving.
  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const cms = new CmsApi();

  const post = await cms.getPostBySlug(String(params?.slug) ?? '');
  dlog(`Building page: %c${params.slug}`, 'color: purple;');

  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      ...post,
    },
    revalidate: 360,
  };
};

const cms = new CmsApi();

function Post(post: IPost) {
  const { title } = post;

  // TODO; abstract away into onlocationchange in app.tsx
  // Scroll to top on load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  // Get recommended posts
  const [recommendedPosts, setRecommendedPosts] = useState([]);
  useEffect(() => {
    dlog('[slug] ➡️ recommendedPosts:', recommendedPosts);
    cms.getTopPosts(8).then(result => setRecommendedPosts(result?.posts));
  });

  return (
    <>
      <Head>
        <title>{generateTitle(title)}</title>
      </Head>

      <Article {...post} />
      <ArticleSuggestRestaurant {...post} />

      <div className="pb-20">
        <RecommendedPosts
          label="You might also like"
          posts={recommendedPosts}
          rowLimit={1}
        />
      </div>
    </>
  );
}

export default Post;
