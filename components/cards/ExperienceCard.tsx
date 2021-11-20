/* eslint-disable jsx-a11y/media-has-caption */
import { Button } from '@tastiest-io/tastiest-ui';
import { dlog, IPost } from '@tastiest-io/tastiest-utils';
import classNames from 'classnames';
import clsx from 'clsx';
import LineLimit from 'components/text/LineLimit';
import Link from 'next/link';
import React, { useEffect, useMemo, useRef } from 'react';
import { useHoverDirty, useMeasure, useVideo } from 'react-use';
import { generateStaticURL } from 'utils/routing';

interface Props extends IPost {
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
    deal,
  } = props;

  const ref = useRef(null);
  const [contentRef, { width }] = useMeasure();
  const shouldStackButtons = useMemo(() => width < 250, [width]);
  const isSmall = useMemo(() => width < 170, [width]);

  dlog('ArticleCard ➡️ width:', width);

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

  const [video, , controls] = useVideo(
    <video
      loop
      playsInline // prevent fullscreen on iOS
      src={deal.dynamicImage?.url}
      className="object-cover w-full h-full"
    />,
  );

  return (
    <Link href={href} as={as}>
      <a className="no-underline">
        <div
          ref={ref}
          className={classNames(
            'overflow-hidden w-full bg-light shadow-lg no-underline',
            isSmall || compact ? 'rounded-md' : 'rounded-xl',
            isSmall ? 'pb-2' : 'pb-1',
          )}
        >
          <div
            style={{ paddingBottom: '60%' }}
            className="relative w-full h-0 overflow-hidden bg-white bg-opacity-25"
          >
            {deal.dynamicImage?.url && (
              <div className="absolute inset-0 z-10 pointer-events-none">
                {video}
              </div>
            )}

            {deal.image.url && (
              <div className="absolute inset-0">
                <img
                  className="object-cover w-full h-full"
                  src={`${deal?.image?.url}?w=400`}
                  alt={deal.image?.description}
                />
              </div>
            )}
          </div>

          <div
            ref={contentRef}
            className={clsx('text-dark', isSmall || compact ? 'px-3' : 'px-4')}
          >
            <div className={isSmall ? 'py-2' : 'py-3'}>
              <div
                className={clsx(
                  isSmall || compact ? 'text-lg' : 'text-xl',
                  'font-medium cursor-pointer hover:underline pb-2',
                )}
              >
                <LineLimit lines={2} fit="tight">
                  {title}
                </LineLimit>
              </div>

              <LineLimit lines={3} fit="compact">
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
              {/* <div className="flex-1">
                <Button
                  wide
                  color="secondary"
                  size={compact ? 'small' : 'medium'}
                >
                  Buy Now
                </Button>
              </div> */}

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
