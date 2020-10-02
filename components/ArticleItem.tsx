import { useRouter } from 'next/dist/client/router';
import { SyntheticEvent } from 'react';
import { ISanityArticle } from '../types/article';

export function ArticleItem(props: ISanityArticle): JSX.Element {
  const { href, imageUrl, altTag, title, paragraph, hashtags } = props;

  const router = useRouter();

  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <div
      className="rounded-lg overflow-hidden shadow-lg m-8 w-full"
      onClick={e => handleClick(e)}
    >
      <img className="w-full" src={imageUrl} alt={altTag} />
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
    </div>
  );
}
