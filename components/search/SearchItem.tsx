import classNames from 'classnames';
import { useRouter } from 'next/dist/client/router';
import React, { SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useMedia } from 'react-use';
import { UI } from '../../constants';
import { ISanityArticle } from '../../types/article';
import { generateURL } from '../../utils/routing';

export function SearchItem(props: ISanityArticle) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { title, featureImage, city, cuisine, slug } = props;

  // Responsive
  let isMobile;
  if (typeof window !== 'undefined') {
    isMobile = useMedia(`(max-width: ${UI.MOBILE_BREAKPOINT}px)`);
  }

  const handleClick = (e: SyntheticEvent) => {
    const { href, as } = generateURL({ city, cuisine, slug });
    e.preventDefault();
    router.push(href, as);
  };

  return (
    <div
      className={classNames(
        'cursor-pointer',
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
      <div className={classNames('w-full', isMobile && 'h-64')}>
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
