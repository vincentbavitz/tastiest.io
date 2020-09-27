import Link from 'next/link';
import React from 'react';
import { IArticle } from '../../types/article';

export function SearchItem(props: IArticle) {
  const { title, paragraph, image, altTag, href, hashtags } = props;

  return (
    <Link href={href}>
      <a>
        <div className="search-item rounded-lg overflow-hidden shadow-lg m-8 w1/2">
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
        </div>
      </a>
    </Link>
  );
}
