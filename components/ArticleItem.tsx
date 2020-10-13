import { useRouter } from 'next/dist/client/router';
import { SyntheticEvent } from 'react';
import { ISanityArticle } from '../types/article';
import { generateURL } from '../utils/routing';

export function ArticleItem(props: ISanityArticle): JSX.Element {
  const { featureImage, title, paragraph, tags, slug, city, cuisine } = props;

  const router = useRouter();

  const handleClick = (e: SyntheticEvent) => {
    const { href, as } = generateURL({ city, slug, cuisine });

    e.preventDefault();
    router.push(href, as);
  };

  return (
    <div
      className="rounded-lg cursor-pointer overflow-hidden w-full mb-6"
      onClick={e => handleClick(e)}
    >
      <img
        className="w-full"
        src={featureImage.source}
        alt={featureImage.altText}
      />
      <div className="px-6 py-4 bg-secondary">
        <div className="text-xl font-somantic mb-2">{title}</div>
        <p className="text-gray-700 text-base">{paragraph}</p>
      </div>
      <div className="px-6 py-4 bg-secondary">
        {tags &&
          tags
            .filter(map => !!map)
            .map(hashtag => (
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
