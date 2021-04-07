// [slug].js
import { CmsApi, IPost } from '@tastiest-io/tastiest-utils';
import { RecommendForm } from 'components/RecommendForm';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { dlog } from 'utils/development';
import { Article } from '../../../components/article/Article';
import { generateTitle } from '../../../utils/metadata';

interface IPath {
  params: { slug: string; city: string; cuisine: string };
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

  dlog('[slug] ➡️ item:', posts?.[0]);

  const paths: IPath[] = posts.map(item => ({
    params: {
      city: item.city.toLowerCase(),
      cuisine: item.cuisine.toLowerCase(),
      slug: item.slug,
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

function Post(post: IPost) {
  const { title } = post;

  // TODO; abstract away into onlocationchange in app.tsx
  // Scroll to top on load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <Head>
        <title>{generateTitle(title)}</title>
      </Head>

      <Article {...post} />

      <RecommendForm dish={post?.dishName} city={post?.city} />
    </>
  );
}

export default Post;
