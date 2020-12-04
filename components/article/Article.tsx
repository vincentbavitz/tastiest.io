import { IArticle } from '../../types/article';
import { ArticleSectionAbstract } from './sections/ArticleSectionAbstract';
import { ArticleSectionTitle } from './sections/ArticleSectionTitle';

export function ArticleMobile(props: IArticle) {
  const {
    body,
    title,
    subtitle,
    author,
    date,
    city,
    tags,
    location,
    restaurantName,
    dishName,
    video,
    featureImage,
  } = props;

  return (
    <article>
      <ArticleSectionTitle title={title} author={author} date={date} />
    </article>
  );
}

export function ArticleDesktop(props: IArticle) {
  const {
    body,
    title,
    subtitle,
    author,
    date,
    city,
    tags,
    location,
    restaurantName,
    dishName,
    video,
    featureImage,
  } = props;

  return (
    <article>
      <ArticleSectionTitle title={title} author={author} date={date} />

      <ArticleSectionAbstract />
    </article>
  );
}
