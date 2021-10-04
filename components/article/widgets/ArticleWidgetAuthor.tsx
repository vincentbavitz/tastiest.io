import { IAuthor } from '@tastiest-io/tastiest-utils';
import { Avatar } from '../../avatar/Avatar';

interface Props {
  author: IAuthor;
  date: string;
}

export function ArticleWidgetAuthor({ author, date }: Props) {
  return (
    <div className="flex items-center space-x-3">
      <Avatar size={10} imageSrc={author?.profileImage?.url} />

      <div className="flex flex-col leading-tight">
        <span className="text-sm font-bold tracking-wider font-secondary">
          By: {author?.name}
        </span>
        <span>{date}</span>
      </div>
    </div>
  );
}
