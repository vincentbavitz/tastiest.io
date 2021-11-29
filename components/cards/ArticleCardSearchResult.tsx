/* eslint-disable jsx-a11y/media-has-caption */
import { ExperiencePost } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import Link from 'next/link';
import React, { useMemo, useRef } from 'react';
import { useHoverDirty } from 'react-use';
import { generateStaticURL } from 'utils/routing';

export function ArticleCardSearchResult(props: ExperiencePost): JSX.Element {
  const { title, slug, city, cuisine, restaurant, deal } = props;

  const ref = useRef(null);
  const { href, as } = useMemo(
    () =>
      generateStaticURL({
        city,
        slug,
        cuisine,
        restaurant: restaurant.uriName,
      }),
    [],
  );

  const isHovering = useHoverDirty(ref);

  return (
    <Link href={href} as={as}>
      <a className="no-underline">
        <div
          ref={ref}
          className={clsx(
            'overflow-hidden w-full bg-secondary no-underline',
            'rounded-sm',
          )}
        >
          <div
            style={{ paddingBottom: '50%' }}
            className="relative w-full h-0 overflow-hidden bg-white bg-opacity-25"
          >
            {deal.image.url && (
              <div className="absolute inset-0">
                <img
                  className="object-cover w-full h-full"
                  src={`${deal.image?.url}?w=400`}
                  alt={deal.image?.description}
                />
              </div>
            )}
          </div>

          <div className={'px-2'}>
            <div className={'py-2'}>
              <div
                style={{
                  lineHeight: '1.1em',
                  height: '0',
                  paddingBottom: '3.3em',
                }}
                className={clsx(
                  'text-base',
                  'font-primary overflow-hidden cursor-pointer hover:underline',
                )}
              >
                {title}
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
