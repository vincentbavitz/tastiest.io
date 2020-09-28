import groq from 'groq';
import client from '../client';
import imageUrlBuilder from '@sanity/image-url';
import { Hashtag } from '../objects';
import { IArticle } from '../types/article';

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

export async function search(query: string): Promise<Array<IArticle>> {
  const sanityQuery = groq`*[_type == "post"]|order(publishedAt desc) {
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

  const posts = await client.fetch(sanityQuery);

  return posts.map(post => ({
    title: post.title,
    href: `/blog/${post.slug}`,
    imageUrl: post.mainImage ? urlFor(post.mainImage.image).url() : undefined,
    tags: post.tags ? post.tags.map(tag => new Hashtag(tag)) : [],
  }));
}
