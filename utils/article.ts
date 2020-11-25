import groq from 'groq';
import moment from 'moment';
import client from '../client';
import { IArticle, ISanityArticle } from '../types/article';
import { sanityPostQuery } from './search';
import { titleCase } from './text';

export async function getArticle(
  slug: string,
  onFail?: () => void,
): Promise<IArticle | Partial<IArticle>> {
  const query = groq`*[_type == "post" && slug.current == "${slug}"][0]{
      ${sanityPostQuery}
    }`;

  console.log('slug', slug);
  console.log('query', query);

  let sanityArticle: ISanityArticle;
  try {
    sanityArticle = await client.fetch(query);

    console.log('sanityArticle', sanityArticle);
  } catch (error) {
    if (onFail) {
      onFail();
    }

    return {};
  }

  const article = buildArticleInfo(sanityArticle);

  console.log('article.title', article.title);

  return article;
}

// Converts an ISanityArticle into an IArticle
export function buildArticleInfo(
  article: ISanityArticle,
): IArticle | undefined {
  const date = moment(article.publishedAt).format('MMMM D, YYYY');

  const video = `https://www.youtube.com/embed/${
    article.video.link?.split('?v=')[1] ?? ''
  }`;

  return {
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
