// [slug].js
import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
import groq from 'groq';
import moment from 'moment';
import React from 'react';
import '../../assets/style.scss';
import CookingSVG from '../../assets/svgs/cooking.svg';
import HelloSVG from '../../assets/svgs/hello.svg';
import client from '../../client';
import { CityIndictor } from '../../components/CityIndictor';
import { CuisineBar } from '../../components/CuisineBar';
import { Footer } from '../../components/Footer';
import NavBar from '../../components/NavBar';
import { RecommendForm } from '../../components/RecommendForm';
import { IPost } from '../../types/post';

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Post = (props: IPost): JSX.Element => {
  const {
    title = '',
    subtitle = '',
    name = '',
    authorImage = null,
    publishedAt = '',
    city = '',
    tags = [],
    location = { lat: 0, lng: 0, _type: '' },
    restaurantName = '',
    dishName = '',
    mainImage = null,
    backdropSVG = null,
    video = { link: '', description: '' },
    body = [],
  } = props;

  console.log('Props:', props);

  const videoSrc = `https://www.youtube.com/embed/${
    video.link?.split('?v=')[1] ?? ''
  }`;

  const date = moment(publishedAt).format('MMMM D, YYYY');

  return (
    <>
      <NavBar />
      <CuisineBar />

      <article>
        <div className="article__top relative w-full bg-white flex flex-col justify-center items-center mt-20">
          <div className="article__title w-full">
            <div className="w-full pb-0 mb-0 flex flex-col items-center">
              <CityIndictor city={city} />
              <h1 className="text-secondary text-center">{title}</h1>
            </div>
          </div>

          <div className="article__author w-full flex justify-center space-around">
            <div>
              <div className="flex w-full content-center items-center">
                <img
                  className="rounded-full w-10 h-10 mr-3"
                  src={urlFor(authorImage).url()}
                  alt={'Author profile picture'}
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-center">
              <span className="block font-bold text-xs">
                BY {name.toUpperCase()}
              </span>
              <span className="block text-xs">{date}</span>
            </div>
          </div>
        </div>

        <div className="relative w-full -mt-2 contained bg-primary">
          <div className="flex flex-col items-center w-full pt-8 pb-0">
            <p className="w-3/4 text-center pb-8 font-semi-bold font-roboto-slab">
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
                    {new Hashtag(tag).formatted}
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

        <div className="article__content contained bg-white w-full mt-16">
          <div className="w-3/4">
            <BlockContent
              blocks={body}
              imageOptions={{ w: 320, h: 240, fit: 'max' }}
              {...client.config()}
            />
          </div>

          {/* OFF TO SIDE IMAGE WITH CONTENT */}

          <div className="mt-8 mb-8">
            <h4 className="font-roboto-slab font-bold w-1/2 text-md mb-4">
              {mainImage.description}
            </h4>
            <img
              className="w-full"
              src={urlFor(mainImage.image).url()}
              alt={mainImage.altText}
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

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  subtitle,
  "name": author->name,
  "authorImage": author->image,
  publishedAt,
  cuisine,
  "city": city->title,
  "tags": tags[]->title,
  location,
  restaurantName,
  dishName,
  mainImage,
  backdropSVG,
  video,
  body,
}`;

Post.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.query;
  return await client.fetch(query, { slug });
};

export default Post;
