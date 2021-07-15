import { IPost } from '@tastiest-io/tastiest-utils';
import classNames from 'classnames';
import { useScreenSize } from 'hooks/useScreenSize';
import Link from 'next/link';
import React from 'react';
import { generateSlugURL } from '../../utils/routing';

export function SearchItem(props: IPost) {
  const { title, featureImage, city, cuisine, slug, restaurant } = props;
  const { isDesktop } = useScreenSize();

  const { href, as } = generateSlugURL({
    city,
    cuisine,
    slug,
    restaurant: restaurant.uriName,
  });

  return (
    <Link href={href} as={as}>
      <a>
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
        >
          <div className={classNames('w-full', !isDesktop && 'h-64')}>
            <img
              className="w-full h-full"
              src={featureImage.url}
              alt={featureImage.description}
            />
          </div>

          <div className="w-full px-6 py-4">
            <div className="text-xl font-bold">{title}</div>
          </div>
        </div>
      </a>
    </Link>
  );
}
