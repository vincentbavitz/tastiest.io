/* eslint-disable jsx-a11y/media-has-caption */
import { IPost } from '@tastiest-io/tastiest-utils';
import classNames from 'classnames';
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
    deal: { image, dynamicImage },
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
      src={dynamicImage.url}
      className="object-cover w-full h-full"
    />,
  );

  return (
    <Link href={href} as={as}>
      <a>
        <div
          ref={ref}
          className={classNames(
            'overflow-hidden w-full bg-secondary bg-opacity-75 no-underline',
            isSmall || compact ? 'rounded-lg' : 'rounded-xl',
            isSmall ? 'pb-2' : 'pb-1',
          )}
        >
          <div
            style={{ paddingBottom: '60%' }}
            className="relative w-full h-0 overflow-hidden bg-white bg-opacity-25"
          >
            {image.url && (
              <>
                <div className="absolute inset-0 z-10 pointer-events-none">
                  {video}
                </div>
                <div className="absolute inset-0">
                  <img
                    className="object-cover w-full h-full"
                    src={`${image?.url}?w=700`}
                    alt={image?.description}
                  />
                </div>
              </>
            )}
          </div>

          <div className={isSmall || compact ? 'px-3' : 'px-4'}>
            <div className={isSmall ? 'py-2' : 'py-3'}>
              <div
                style={{
                  lineHeight: '1.1em',
                  height: '0',
                  paddingBottom: '2.2em',
                }}
                className={classNames(
                  isSmall || compact ? 'text-base' : 'text-lg',
                  'font-somatic overflow-hidden cursor-pointer hover:underline',
                )}
              >
                {title}
              </div>

              {!compact && (
                <p className="text-base text-gray-700">{description}</p>
              )}
            </div>

            {/* <div className={classNames('flex space-x-1 mt-1', !isSmall && 'mb-2')}>
          <TagRow tags={tags} size={compact ? 'small' : 'medium'} limit={3} />
        </div> */}
          </div>
        </div>
      </a>
    </Link>
  );
}
