import groq from 'groq';
import React from 'react';
import client from '../client';
import { ArticleCard } from '../components/ArticleCard';
import { CuisineSymbol } from '../constants';
import { ISanityArticle } from '../types/article';
import { sanityPostQuery } from './search';
import { titleCase } from './text';

export async function getCuisinePosts(cuisine: CuisineSymbol, limit: number) {
  const query = groq`
      *[_type == "post" && cuisine->title match "${titleCase(cuisine)}"][0..${
    limit ?? 100
  }]|order(publishedAt desc) {
        ${sanityPostQuery}
      }
    `;

  console.log('query', query);

  let posts: Array<ISanityArticle>;

  try {
    posts = await client.fetch(query);
    console.log('Posts', posts);
  } catch (error) {
    console.warn('Error:', error);
  }

  return posts;
}

export function postsToCards(posts: ISanityArticle[]) {
  const cards = posts
    ? posts.slice(0, 4).map(post => <ArticleCard key={post.id} {...post} />)
    : [];

  return cards;
}
