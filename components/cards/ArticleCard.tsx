import classNames from 'classnames';
import { TagRow } from 'components/TagRow';
import Link from 'next/link';
import React from 'react';
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

  const { href, as } = generateURL({ city, slug, cuisine });
  // const handleClick = (e: SyntheticEvent) => {
  //   e.preventDefault();
  //   router.push(href, as);
  // };

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
        {featureImage.imageUrl && (
          <div className="absolute inset-0">
            <img
              className="object-cover w-full h-full"
              src={`${featureImage?.imageUrl}?w=300`}
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
