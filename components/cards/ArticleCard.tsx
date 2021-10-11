/* eslint-disable jsx-a11y/media-has-caption */
import { RightOutlined } from '@ant-design/icons';
import { Button } from '@tastiest-io/tastiest-components';
import { IPost } from '@tastiest-io/tastiest-utils';
import classNames from 'classnames';
import clsx from 'clsx';
import Link from 'next/link';
import React, { useEffect, useMemo, useRef } from 'react';
import { useHoverDirty, useVideo } from 'react-use';
import { generateStaticURL } from 'utils/routing';

interface Props extends IPost {
  // Compact omits description
  compact?: boolean;
}

export function ArticleCard(props: Props): JSX.Element {
  const {
    compact,
    title,
    description,
    tags,
    slug,
    city,
    cuisine,
    restaurant,
    deal,
  } = props;

  // const [ref, { width }] = useMeasure();
  const ref = useRef(null);
  const width = 300;
  const isSmall = width < 170;

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
  useEffect(() => {
    if (isHovering) {
      controls.play();
    } else {
      controls.pause();
    }
  }, [isHovering]);

  const [video, state, controls] = useVideo(
    <video
      loop
      src={deal.dynamicImage.url}
      className="object-cover w-full h-full"
    />,
  );

  return (
    <Link href={href} as={as}>
      <a className="no-underline">
        <div
          ref={ref}
          className={classNames(
            'overflow-hidden w-full bg-secondary no-underline',
            isSmall || compact ? 'rounded-lg' : 'rounded-xl',
            isSmall ? 'pb-2' : 'pb-1',
          )}
        >
          <div
            style={{ paddingBottom: '60%' }}
            className="relative w-full h-0 overflow-hidden bg-white bg-opacity-25"
          >
            {deal.dynamicImage.url && (
              <div className="absolute inset-0 z-10 pointer-events-none">
                {video}
              </div>
            )}

            {deal.image.url && (
              <div className="absolute inset-0">
                <img
                  className="object-cover w-full h-full"
                  src={`${deal.image?.url}?w=400`}
                  alt={deal.image?.description}
                />
              </div>
            )}

            {/* Offer includes items */}
            <div
              className={clsx(
                'absolute inset-0 z-50 flex flex-col px-3 py-3 text-white font-primary',
                compact ? 'space-y-1' : 'space-y-2',
              )}
            >
              {deal.includes.slice(0, 3).map(item => (
                <div
                  key={item}
                  style={{ width: 'fit-content' }}
                  className={clsx(
                    'px-2 py-1 leading-4 bg-opacity-75 rounded-md bg-alt',
                    compact ? 'text-xs' : 'text-sm',
                  )}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className={isSmall || compact ? 'px-3' : 'px-4'}>
            <div className={isSmall ? 'py-2' : 'py-3'}>
              <div
                style={{
                  lineHeight: '1.1em',
                  height: '0',
                  paddingBottom: '3.3em',
                }}
                className={classNames(
                  isSmall || compact ? 'text-lg' : 'text-xl',
                  'font-primary overflow-hidden cursor-pointer hover:underline',
                )}
              >
                {title}
              </div>
            </div>

            <div className="pb-2">
              <Button
                wide
                size={compact ? 'small' : 'medium'}
                suffix={
                  <RightOutlined
                    className={clsx(
                      'text-white',
                      compact ? 'text-lg' : 'text-xl',
                    )}
                  />
                }
              >
                £{deal.pricePerHeadGBP}/person
              </Button>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
