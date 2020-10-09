import groq from 'groq';
import client from '../client';
import { ISanityArticle } from '../types/article';

export const sanityPostQuery = `
"id": _id,
"updatedAt": _updatedAt,
title,
subtitle,
body,
publishedAt,
restaurantName,
dishName,
"backdropSVG": backdropSVG.asset->url,
"video": {"link": video.link, "description": video.description},
"location": {"lat": location.lat, "lng": location.lng},
"author": {"name": author->name, "imageSrc": author->image.asset->url },
"featureImage": {"source": featureImage.image.asset->url, "altText": featureImage.altText, "description": featureImage.description },
"cuisine": cuisine->title,
"city": city->title,
"tags": tags[]->title,
"slug": slug.current,
`;

export async function search(query: string): Promise<Array<ISanityArticle>> {
  const sanityQuery = groq`*[_type == "post" && title match "${query}*"][0..5] {
    ${sanityPostQuery}
  }`;

  let posts: ISanityArticle[];
  try {
    posts = await client.fetch(sanityQuery);
  } catch (error) {
    console.warn('Error: ', error);
  }

  return posts
    .filter(post =>
      // Ensure all values are present in each post
      Object.values(post).every(value => Boolean(value)),
    )
    .map(post => ({
      ...post,
    }));
}
