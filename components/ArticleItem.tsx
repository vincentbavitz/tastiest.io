import Link from 'next/link';
import { IArticle } from '../types/article';

function ArticleItem(props: IArticle): JSX.Element {
  const { href, image, altTag, title, paragraph, hashtags } = props;

  return (
    <Link href={href}>
      <div className="rounded-lg overflow-hidden shadow-lg m-8 lg:w-3/12">
        <a>
          <img className="w-full" src={image} alt={altTag} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{paragraph}</p>
          </div>
          <div className="px-6 py-4">
            {hashtags &&
              hashtags.map(hashtag => (
                <span
                  key={hashtag.tag}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {hashtag.formatted}
                </span>
              ))}
          </div>
        </a>
      </div>
    </Link>
  );
}

export default ArticleItem;
