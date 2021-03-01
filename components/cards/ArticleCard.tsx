import classNames from 'classnames';
import { TagRow } from 'components/TagRow';
import router from 'next/dist/client/router';
import React, { SyntheticEvent } from 'react';
import { useMeasure } from 'react-use';
import { IPost } from 'types/cms';
import { generateURL } from '../../utils/routing';

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
  } = props;

  const [ref, { width }] = useMeasure();
  const isSmall = width < 130;

  const handleClick = (e: SyntheticEvent) => {
    const { href, as } = generateURL({ city, slug, cuisine });

    e.preventDefault();
    router.push(href, as);
  };

  return (
    <div
      ref={ref}
      className={classNames(
        'overflow-hidden w-full bg-aux-orange bg-opacity-75',
        isSmall ? 'rounded-lg' : 'rounded-xl',
        isSmall ? 'pb-3' : 'pb-1',
      )}
      onClick={e => handleClick(e)}
    >
      <div
        style={{ paddingBottom: '60%' }}
        className="relative w-full h-0 overflow-hidden bg-white bg-opacity-25"
      >
        {featureImage.imageUrl && (
          <div className="absolute inset-0">
            <img
              className="object-cover w-full h-full"
              src={featureImage?.imageUrl}
              alt={featureImage?.description}
            />
          </div>
        )}
      </div>

      <div className={isSmall ? 'px-3' : 'px-4'}>
        <div className={isSmall ? 'py-1' : 'py-3'}>
          <div
            style={{
              lineHeight: '1em',
              height: '2em',
              paddingBottom: '2.1em',
            }}
            className={classNames(
              isSmall ? 'text-base' : 'text-xl',
              'font-somatic overflow-hidden cursor-pointer',
            )}
          >
            {title}
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
