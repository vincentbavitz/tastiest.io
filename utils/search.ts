import imageUrlBuilder from '@sanity/image-url';
import groq from 'groq';
import client from '../client';
import { ISanityArticle } from '../types/article';

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

export async function getPosts() {
  //
}

export async function search(query: string): Promise<Array<ISanityArticle>> {
  const sanityQuery = groq`*[_type == "post" && title match "${query}*"][0..5] {
    title,
    subtitle,
    "name": author->name,
    "authorImage": author->image,
    "cuisine": cuisine->title,
    "city": city->title,
    "tags": tags[]->title,
    "slug": slug.current,
    publishedAt,
    location,
    restaurantName,
    dishName,
    mainImage,
    backdropSVG,
    video,
    body,
  }`;

  // interface ISanityPostQuery {

  // }

  let posts: ISanityArticle[];
  try {
    posts = await client.fetch(sanityQuery);
  } catch (error) {
    console.warn('Error: ', error);
    return posts;
  }

  console.log('Posts', posts);

  return posts
    .filter(post =>
      // Ensure all values are present in each post
      Object.values(post).every(value => Boolean(value)),
    )
    .map(post => ({
      ...post,
    }));
}
