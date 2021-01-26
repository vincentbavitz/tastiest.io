import classNames from 'classnames';
import { useRouter } from 'next/dist/client/router';
import React, { SyntheticEvent, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { ScreenContext } from '../../contexts/screen';
import { ISanityArticle } from '../../types/article';
import { generateURL } from '../../utils/routing';

export function SearchItem(props: ISanityArticle) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { title, featureImage, city, cuisine, slug } = props;

  const { isDesktop } = useContext(ScreenContext);

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
      <div className={classNames('w-full', !isDesktop && 'h-64')}>
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
