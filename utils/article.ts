import groq from 'groq';
import moment from 'moment';
import client from '../client';
import { sanityPostQuery } from '../hooks/useSearch';
import { IArticle, ISanityArticle } from '../types/article';
import { titleCase } from './text';

export async function getArticleBy(
  key: 'slug' | 'id',
  value: string,
  onFail?: () => void,
): Promise<IArticle | Partial<IArticle>> {
  const query = groq`*[_type == "post" && ${
    key === 'slug' ? 'slug.current' : 'id'
  } == "${value}"][0]{
        ${sanityPostQuery}
      }`;

  console.log('query', query);

  let sanityArticle: ISanityArticle;
  try {
    sanityArticle = await client.fetch(query);
  } catch (error) {
    if (onFail) {
      onFail();
    }

    return {};
  }

  const article = buildArticleInfo(sanityArticle);
  return article;
}

export async function getArticlesHaving(
  key: 'slug' | 'id',
  values: Array<string>,
  onFail?: () => void,
): Promise<Array<IArticle | Partial<IArticle>>> {
  const query = groq`*[_type == "post" && [${values
    .map(i => `"${i}"`)
    .join(', ')}] match ${key === 'slug' ? 'slug.current' : '_id'}]{
    ${sanityPostQuery}
  }`;

  try {
    const sanityArticles: ISanityArticle[] = await client.fetch(query);
    return sanityArticles.map(a => buildArticleInfo(a));
  } catch (error) {
    if (onFail) {
      onFail();
    }

    return [];
  }
}

// Converts an ISanityArticle into an IArticle
export function buildArticleInfo(
  article: ISanityArticle,
): IArticle | undefined {
  const date = moment(article.publishedAt).format('MMMM D, YYYY');

  // YouTube video ID
  const video = article?.video?.link?.split('?v=')[1] ?? '';

  return {
    id: article.id,
    slug: article.slug,
    title: titleCase(article.title ?? ''),
    subtitle: article.subtitle ?? '',
    author: article.author,
    city: titleCase(article.city) ?? '',
    restaurantName: article.restaurantName ?? '',
    dishName: article.dishName ?? '',
    body: article.body,
    location: article.location,
    cuisine: article.cuisine ?? '',
    paragraph: article.paragraph ?? '',
    featureImage: article.featureImage,
    tags: article.tags ?? [],
    date,
    video,
  };
}
