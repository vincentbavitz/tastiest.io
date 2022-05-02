/* eslint-disable jsx-a11y/media-has-caption */
import { Button } from '@tastiest-io/tastiest-ui';
import {
  ContentfulPost,
  dlog,
  generateStaticURL,
} from '@tastiest-io/tastiest-utils';
import classNames from 'classnames';
import clsx from 'clsx';
import LineLimit from 'components/text/LineLimit';
import Link from 'next/link';
import React, { useMemo, useRef } from 'react';
import { useMeasure } from 'react-use';

interface Props extends ContentfulPost {
  // Compact omits description
  compact?: boolean;
}

export function ExperienceCard(props: Props): JSX.Element {
  const {
    compact,
    title,
    description,
    tags,
    slug,
    city,
    cuisine,
    restaurant,
    product,
  } = props;

  const ref = useRef(null);
  const [contentRef, { width }] = useMeasure();
  const shouldStackButtons = useMemo(() => width < 250, [width]);
  const isSmall = useMemo(() => width < 230, [width]);

  dlog('ArticleCard ➡️ width:', width);

  const { href, as } = useMemo(
    () =>
      generateStaticURL({
        city,
        slug,
        cuisine,
        restaurant: restaurant.uri_name,
      }),
    [],
  );

  // FIX ME CORRECT ME
  // Greyed out for 'Coming Soon' restaurants.
  const isComingSoon = restaurant.name.includes('Numa');

  return (
    <Link href={isComingSoon ? '#' : href} as={isComingSoon ? '#' : as}>
      <a className="no-underline relative">
        {/* Greyed out for 'Coming soon' restaurants */}
        {isComingSoon ? (
          <div
            style={{ zIndex: 9999 }}
            className="flex absolute inset-0 items-center justify-center bg-dark bg-opacity-75"
          >
            <div className="text-2xl font-medium text-white">Coming Soon</div>
          </div>
        ) : null}

        <div
          ref={ref}
          className={classNames(
            'overflow-hidden w-full bg-light shadow-lg no-underline',
            isSmall || compact ? '' : '',
            isSmall ? 'pb-2' : 'pb-1',
          )}
        >
          <div
            style={{ paddingBottom: '60%' }}
            className="relative w-full h-0 overflow-hidden bg-white bg-opacity-25"
          >
            <div className="absolute inset-0">
              <img
                className="object-cover w-full h-full"
                src={`${product?.image?.url}?w=400`}
                alt={product.image?.description}
              />
            </div>
          </div>

          <div
            ref={contentRef}
            className={clsx('text-dark', isSmall || compact ? 'px-3' : 'px-4')}
          >
            <div className={isSmall ? 'py-2' : 'py-3'}>
              <div
                className={clsx(
                  isSmall || compact ? 'text-base' : 'text-lg',
                  'font-medium cursor-pointer hover:underline pb-2 leading-tight',
                )}
              >
                {title}
              </div>

              <LineLimit lines={4} fit="compact">
                <p className="text-sm opacity-75">{description}</p>
              </LineLimit>
            </div>

            <div
              className={clsx(
                'flex pb-2',
                shouldStackButtons ? 'space-y-2' : 'space-x-2',
                shouldStackButtons && 'flex-col',
              )}
            >
              <div className="flex-1">
                <Button
                  wide
                  color="secondary"
                  size={compact ? 'small' : 'medium'}
                >
                  More Info
                </Button>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
