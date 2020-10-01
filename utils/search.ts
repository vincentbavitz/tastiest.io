import imageUrlBuilder from '@sanity/image-url';
import groq from 'groq';
import client from '../client';
import { Hashtag } from '../objects';
import { IArticle } from '../types/article';

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

export async function getPosts() {
  //
}

export async function search(query: string): Promise<Array<IArticle>> {
  const sanityQuery = groq`*[_type == "post" && title match "${query}*"][0..5] {
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
    slug,
  }`;

  let posts;
  try {
    posts = await client.fetch(sanityQuery);
  } catch (error) {
    console.warn('Error: ', error);
  }

  console.log('Posts', posts);

  return posts
    .filter(post => post.title && post.mainImage && post?.slug?.current)
    .map(post => ({
      title: post.title,
      href: `/[slug]/${post.slug?.current}`,
      imageUrl: post.mainImage ? urlFor(post.mainImage.image).url() : undefined,
      tags: post.tags ? post.tags.map(tag => new Hashtag(tag)) : [],
    }));
}
