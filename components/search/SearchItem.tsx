import classNames from 'classnames';
import { useRouter } from 'next/dist/client/router';
import React, { SyntheticEvent } from 'react';
import { IArticle } from '../../types/article';

export function SearchItem(props: IArticle) {
  const router = useRouter();
  const { title, imageUrl, altTag, href } = props;

  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    router.push(href);
  };

  console.log('IMage', imageUrl);

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
        <img className="w-full h-full" src={imageUrl} alt={altTag} />
      </div>

      <div className="px-6 py-4 w-full">
        <div className="font-bold text-xl">{title}</div>
      </div>
    </div>
  );
}
