// [slug].js
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Article } from '../../../components/article/Article';
import { CmsApi } from '../../../services/cms';
import { setArticle } from '../../../state/reducers/article';
import { IArticle } from '../../../types/article';
import { generateTitle } from '../../../utils/metadata';

export const getStaticProps: GetStaticProps = async context => {
  const api = new CmsApi();
  const post = await api.fetchBlogBySlug(String(context?.query?.slug) ?? '');

  console.log('[slug] ➡️ context:', context);

  // Redirect to 404 for nonexistent page
  if (!post) {
    return {
      props: undefined,
      notFound: true,
    };
  }

  return {
    props: post,
    // Revalidate every at most once per 60 seconds
    revalidate: 60,
  };
};

function Post(props: IArticle) {
  const {
    body,
    title,
    subtitle,
    author,
    date,
    city,
    tags,
    location,
    restaurantName,
    dishName,
    video,
    featureImage,
  } = props;

  const dispatch = useDispatch();
  dispatch(setArticle(props));

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

      <Article {...props} />
    </>
  );
}

export default Post;
