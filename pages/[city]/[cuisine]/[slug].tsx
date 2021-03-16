// [slug].js
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { Article } from '../../../components/article/Article';
import { CmsApi } from '../../../services/cms';
import { IPost } from '../../../types/cms';
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

  const paths: IPath[] = posts.map(item => ({
    params: {
      city: item.city,
      cuisine: item.cuisine.toLowerCase(),
      slug: item.slug,
    },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const cms = new CmsApi();

  const post = await cms.getPostBySlug(String(params?.slug) ?? '');
  console.log(`Building page: %c${params.slug}`, 'color: purple;');

  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      ...post,
    },
    revalidate: 60,
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
    </>
  );
}

export default Post;
