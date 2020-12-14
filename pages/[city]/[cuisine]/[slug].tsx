// [slug].js
import imageUrlBuilder from '@sanity/image-url';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../../assets/style.scss';
import client from '../../../client';
import { Article } from '../../../components/article/Article';
import { Footer } from '../../../components/Footer';
import { useScreenSize } from '../../../hooks/screen';
import { IState } from '../../../state/reducers';
import { setArticle } from '../../../state/reducers/article';
import { IArticle } from '../../../types/article';
import { getArticle } from '../../../utils/article';
import { generateTitle } from '../../../utils/metadata';

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

export const getServerSideProps: GetServerSideProps = async context => {
  const article = await getArticle(String(context.query.slug) ?? '');

  // Redirect to 404 for nonexistent page
  if (!article) {
    return {
      props: undefined,
      notFound: true,
    };
  }

  return {
    props: article,
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

  // Set article for useArticle
  // We don't want useArticle to fetch it directly, as this
  // hurts SEO performance
  const dispatch = useDispatch();
  dispatch(setArticle(props));

  const { isMobile } = useScreenSize();

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

      {/* temporary spacer */}
      <div className="py-64"></div>

      <Footer />
    </>
  );
}

export default Post;
