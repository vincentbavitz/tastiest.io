import classNames from 'classnames';
import { useRouter } from 'next/dist/client/router';
import React, { SyntheticEvent, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { IPost } from 'types/cms';
import { ScreenContext } from '../../contexts/screen';
import { generateURL } from '../../utils/routing';

export function SearchItem(props: IPost) {
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
          src={featureImage.imageUrl}
          alt={featureImage.description}
        />
      </div>

      <div className="w-full px-6 py-4">
        <div className="text-xl font-bold">{title}</div>
      </div>
    </div>
  );
}
