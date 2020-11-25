import { IArticle } from '../../types/article';
import { ArticleTitleArea } from './ArticleTitleArea';

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
      <ArticleTitleArea title={title} author={author} date={date} />
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
      <ArticleTitleArea title={title} author={author} date={date} />
    </article>
  );
}
