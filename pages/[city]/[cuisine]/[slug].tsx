// [slug].js
import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
import groq from 'groq';
import moment from 'moment';
import React, { useEffect } from 'react';
import '../../../assets/style.scss';
import CookingSVG from '../../../assets/svgs/cooking.svg';
import HelloSVG from '../../../assets/svgs/hello.svg';
import client from '../../../client';
import { Button } from '../../../components/Button';
import { CityIndictor } from '../../../components/CityIndictor';
import { Footer } from '../../../components/Footer';
import { RecommendForm } from '../../../components/RecommendForm';
import { ISanityArticle } from '../../../types/article';
import { sanityPostQuery } from '../../../utils/search';

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Post = (props: ISanityArticle): JSX.Element => {
  const {
    body,
    title = '',
    subtitle = '',
    author,
    publishedAt = '',
    city,
    tags = [],
    location,
    restaurantName,
    dishName,
    backdropSVG,
    video,
    featureImage,
  } = props;

  console.log('Props:', props);

  const videoSrc = `https://www.youtube.com/embed/${
    video.link?.split('?v=')[1] ?? ''
  }`;

  const date = moment(publishedAt).format('MMMM D, YYYY');

  // Scroll to top on load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <Button>From £21</Button>

      <article>
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

          <div className="article__author w-full flex flex-col items-center justify-center space-around">
            <div>
              <div className="flex w-full content-center items-center">
                <img
                  className="rounded-full w-12 h-12"
                  src={author.imageSrc}
                  alt={'Author profile picture'}
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <span className="block font-bold text-xs uppercase">
                BY {author.name}
              </span>
              <div className="flex justify-center">
                <span className="text-xs z-10">{date}</span>
              </div>
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

          {/* <div>
          {tags && (
            <ul className="mt-2 mb-6">
              {tags.map(tag => (
                <li key={tag}>
                  <span className="rounded p-1 bg-white bg-opacity-50 text-xs">
                    {new Tag(tag).formatted}
                  </span>
                </li>
              ))}
            </ul>
          )}

       
          <div className="bg-white bg-opacity-25 w-full mt-12">
            <img src={urlFor(backdropSVG).url()} />
          </div>
        </div> */}
        </div>

        <div className="article__content contained w-full mt-16 text-black">
          <div className="w-full">
            <BlockContent
              blocks={body}
              imageOptions={{ w: 320, h: 240, fit: 'max' }}
              {...client.config()}
            />
          </div>

          {/* OFF TO SIDE IMAGE WITH CONTENT */}

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

        {/* RECOMMEND FORM */}
        <div className="contained flex justify-between">
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
      </article>

      <Footer />
    </>
  );
};

Post.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const query = groq`*[_type == "post" && slug.current == $slug][0]{
    ${sanityPostQuery}
  }`;

  const { slug = '' } = context.query;

  let posts;
  try {
    posts = await client.fetch(query, { slug });
  } catch (error) {
    console.warn('Error:', error);
  }

  return posts;
};

export default Post;
