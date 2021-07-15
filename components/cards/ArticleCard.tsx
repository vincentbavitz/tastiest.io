import { IPost } from '@tastiest-io/tastiest-utils';
import classNames from 'classnames';
import { TagRow } from 'components/TagRow';
import Link from 'next/link';
import React from 'react';
import { useMeasure } from 'react-use';
import { generateStaticURL } from 'utils/routing';

interface Props extends IPost {
  // Compact omits description
  compact?: boolean;
}

export function ArticleCard(props: Props): JSX.Element {
  const {
    compact,
    featureImage,
    title,
    description,
    tags,
    slug,
    city,
    cuisine,
    restaurant,
  } = props;

  const [ref, { width }] = useMeasure();
  const isSmall = width < 170;

  const { href, as } = generateStaticURL({
    city,
    slug,
    cuisine,
    restaurant: restaurant.uriName,
  });

  return (
    <div
      ref={ref}
      className={classNames(
        'overflow-hidden w-full bg-aux-orange bg-opacity-75',
        isSmall ? 'rounded-lg' : 'rounded-xl',
        isSmall ? 'pb-3' : 'pb-1',
      )}
      // onClick={e => handleClick(e)}
    >
      <div
        style={{ paddingBottom: '60%' }}
        className="relative w-full h-0 overflow-hidden bg-white bg-opacity-25"
      >
        {featureImage.url && (
          <div className="absolute inset-0">
            <img
              className="object-cover w-full h-full"
              src={`${featureImage?.url}?w=700`}
              alt={featureImage?.description}
            />
          </div>
        )}
      </div>

      <div className={isSmall ? 'px-3' : 'px-4'}>
        <div className={isSmall ? 'py-2' : 'py-3'}>
          <div
            style={{
              lineHeight: '1.1em',
              height: '0',
              paddingBottom: '2.2em',
            }}
            className={classNames(
              isSmall ? 'text-base' : 'text-lg',
              'font-somatic overflow-hidden cursor-pointer hover:underline',
            )}
          >
            <Link href={href} as={as}>
              <a href="">{title}</a>
            </Link>
          </div>

          {!compact && <p className="text-base text-gray-700">{description}</p>}
        </div>

        <div className={classNames('flex space-x-1 mt-1', !isSmall && 'mb-2')}>
          <TagRow tags={tags} limit={3} />
        </div>
      </div>
    </div>
  );
}
