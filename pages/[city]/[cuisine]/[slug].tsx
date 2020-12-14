// [slug].js
import imageUrlBuilder from '@sanity/image-url';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useMedia } from 'react-use';
import '../../../assets/style.scss';
import client from '../../../client';
import {
  ArticleDesktop,
  ArticleMobile,
} from '../../../components/article/Article';
import { Footer } from '../../../components/Footer';
import { UI } from '../../../constants';
import { useScreenSize } from '../../../hooks/screen';
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

  const { isMobile } = useScreenSize();
  const router = useRouter();

  // Scroll to top on load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }

    const fetch = async () => {
      console.log('router', router.query);
      const article = await getArticle(String(router.query.slug));

      console.log('article', article);
    };

    fetch();
  }, []);

  console.log('props', props);

  return (
    <>
      <Head>
        <title>{generateTitle(title)}</title>
      </Head>

      {isMobile ? <ArticleMobile {...props} /> : <ArticleDesktop {...props} />}

      {/* temporary spacer */}
      <div className="py-64"></div>

      {/* <article>
        <div className="article__top relative w-full bg-white flex flex-col justify-center items-center">
          <div className="article__title w-full">
            <div className="w-full pb-0 mb-0 flex flex-col items-center">
              <CityIndictor city={city} />
              <h1 className="text-primary text-center pt-4 pb-4 w-11/12 text-fourxl">
                {title}
              </h1>
              <h3 className="text-article font-robotoslab text-center mx-8 pb-4">
                We took to the raring streets of Melbourne to see what Lygon has
                to offer. What restaurant will truly prevail as the king of
                Lygon Street
              </h3>
            </div>
          </div>
        </div>

        <div className="relative w-full -mt-2 contained bg-secondary">
          <div className="flex flex-col items-center w-full pt-8 pb-0">
            <p className="w-full text-center pb-8 font-semi-bold font-roboto-slab">
              {subtitle}
            </p>
          </div>

          <div className="article__feature-video">
            <iframe
              title="ytVideo"
              className="absolute top-0 right-0 bottom-0 left-0 w-full h-full"
              src={videoSrc}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>

          <div className="w-3/4 self-start">
            <p className="py-3 text-sm italic">{video.description}</p>
          </div>

          <div className="flex justify-center w-full h-40">
            <CookingSVG className="w-56 absolute -mt-2" />
          </div>
        </div>

        <div className="article__content contained w-full mt-16 text-black">
          <div className="w-full">
            <BlockContent
              blocks={body}
              imageOptions={{ w: 320, h: 240, fit: 'max' }}
              {...client.config()}
            />
          </div>

          <div className="mt-8 mb-8">
            <h4 className="font-roboto-slab font-bold w-1/2 text-md mb-4">
              {featureImage.description}
            </h4>
            <img
              className="w-full"
              src={featureImage.source}
              alt={featureImage.altText}
            />
          </div>

          <p className="italic w-2/3 text-sm font-thin">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            assumenda odit iure similique nobis itaque dolor deserunt, culpa cum
            praesentium eligendi facilis quae, a illum corrupti quibusdam harum
            hic modi maxime sapiente. Repellat fugit placeat distinctio eligendi
            necessitatibus quia corporis dolorum blanditiis, sequi eos
            doloremque voluptatem autem earum illum! At?
          </p>
        </div>

        <div className="flex justify-between">
          <div className="w-full py-10 relative">
            <div className="w-2/3">
              <RecommendForm
                dish={dishName}
                city={{ name: 'London', lat: 45, lng: 45 }}
              />
            </div>

            <div className="absolute bottom-0 right-0 mr-6">
              <HelloSVG className="h-24" />
            </div>
          </div>
        </div>
      </article> */}

      <Footer />
    </>
  );
}

export default Post;
