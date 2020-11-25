import { IAuthor } from '../../types/article';
import { ArticleAuthor } from './ArticleAuthor';

//
interface Props {
  title: string;
  author: IAuthor;
  date: string;
}

export function ArticleTitleArea(props: Props) {
  const { title, author, date } = props;

  return (
    <div className="flex flex-col justify-center space-y-10">
      <h1 className="text-primary text-center pt-4 pb-4 w-11/12 text-fourxl">
        {title}
      </h1>

      <ArticleAuthor author={author} date={date} />
    </div>
  );
}
