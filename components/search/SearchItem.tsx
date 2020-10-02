import classNames from 'classnames';
import { useRouter } from 'next/dist/client/router';
import React, { SyntheticEvent } from 'react';
import { ISanityArticle } from '../../types/article';
import { generateURL } from '../../utils/routing';

export function SearchItem(props: ISanityArticle) {
  const router = useRouter();
  const { title, featureImage, city, cuisine, slug } = props;

  console.log('Search item props', props);

  const handleClick = (e: SyntheticEvent) => {
    const { href, as } = generateURL({ city, cuisine, slug });
    e.preventDefault();
    router.push(href);
  };

  return (
    <div
      className={classNames(
        'search-item',
        'flex',
        'flex-col',
        'rounded-lg',
        'overflow-hidden',
        'shadow-lg',
        'm-4',
        'w-full',
      )}
      onClick={e => handleClick(e)}
    >
      <div className="w-full h-64">
        <img
          className="w-full h-full"
          src={featureImage.source}
          alt={featureImage.altText}
        />
      </div>

      <div className="px-6 py-4 w-full">
        <div className="font-bold text-xl">{title}</div>
      </div>
    </div>
  );
}
