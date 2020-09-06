// [slug].js
import '../../assets/style.scss';
import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import client from '../../client';
import NavBar from '../../components/NavBar';
import { CityIndictor } from '../../components/CityIndictor';
import moment from 'moment';
import { Hashtag } from '../../objects';
import { RecommendForm } from '../../components/RecommendForm';

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

interface Props {
  title: string;
  subtitle: string;
  name: string;
  authorImage: any;
  publishedAt: string;
  cuisine: string;
  city: string;
  tags: Array<string>;
  location: {
    lat: number;
    lng: number;
    _type: string;
  };
  restaurantName: string;
  dishName: string;
  mainImage: any;
  backdropSVG: any;
  video: {
    link: string;
    description: string;
  };
  body: Array<any>;
}

const Post = (props: Props): JSX.Element => {
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
    <article>
      <NavBar />

      <div className="article__top w-full bg-primary">
        <div className="w-full pt-10 pb-6">
          <CityIndictor city={city} />
        </div>

        <div className="flex w-full">
          <div className="w-1/4">
            <h1 className="article__title text-secondary">{title}</h1>

            <span className="block font-bold text-xs">
              BY: {name.toUpperCase()}
            </span>

            <span className="block text-xs">{date}</span>

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

            <div className="bg-white bg-opacity-25 w-full mb-12">
              <img
                src={urlFor(mainImage.image).url()}
                alt={mainImage.altText}
              />
            </div>

            <div className="bg-white bg-opacity-25 w-full mt-12">
              <img src={urlFor(backdropSVG).url()} />
            </div>
          </div>

          <div className="w-3/4 pl-16">
            <p className="pb-8 font-bold">{subtitle}</p>
            <div className="article__feature-video">
              <iframe
                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full"
                src={videoSrc}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
            <p className="py-3 text-sm italic">{video.description}</p>
          </div>
        </div>
      </div>

      <div className="article__content w-full">
        <div className="w-3/4 pl-16 ml-auto">
          <BlockContent
            blocks={body}
            imageOptions={{ w: 320, h: 240, fit: 'max' }}
            {...client.config()}
          />

          <div className="py-10">
            <RecommendForm
              dish={dishName}
              city={{ name: 'London', lat: 45, lng: 45 }}
            />
          </div>
        </div>
      </div>
    </article>
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
