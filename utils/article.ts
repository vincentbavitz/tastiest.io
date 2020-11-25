import groq from 'groq';
import moment from 'moment';
import client from '../client';
import { Tag } from '../objects';
import { IArticle, ISanityArticle } from '../types/article';
import { sanityPostQuery } from './search';
import { titleCase } from './text';

export async function getArticle(
  slug: string,
  onFail?: () => void,
): Promise<IArticle | Partial<IArticle>> {
  const query = groq`*[_type == "post" && slug.current == ${slug}][0]{
      ${sanityPostQuery}
    }`;

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

// Converts an ISanityArticle into an IArticle
export function buildArticleInfo(
  article: ISanityArticle,
): IArticle | undefined {
  const tags = article.tags ? article.tags.map(tag => new Tag(tag)) : [];
  const date = moment(article.publishedAt).format('MMMM D, YYYY');

  const video = `https://www.youtube.com/embed/${
    article.video.link?.split('?v=')[1] ?? ''
  }`;

  return {
    slug: article.slug,
    title: titleCase(article.title ?? ''),
    subtitle: article.subtitle ?? '',
    author: article.author,
    city: titleCase(article.city),
    restaurantName: article.restaurantName,
    dishName: article.dishName,
    body: article.body,
    location: article.location,
    cuisine: article.cuisine,
    paragraph: article.paragraph,
    featureImage: article.featureImage,
    date,
    tags,
    video,
  };
}
