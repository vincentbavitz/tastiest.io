import {
  HeartFilledPrimaryIcon,
  HeartPrimaryIcon,
  ShareIcon,
} from '@tastiest-io/tastiest-icons';
import { IPost } from '@tastiest-io/tastiest-utils';
import classNames from 'classnames';
import { useScreenSize } from 'hooks/useScreenSize';
import router from 'next/dist/client/router';
import Link from 'next/link';
import React, { SyntheticEvent } from 'react';
import { useMeasure } from 'react-use';
import { generateURL } from '../../utils/routing';

interface Props extends Partial<IPost> {
  isFavourite: boolean;
  onToggleFavourite: () => void;
}

export function ArticleCardFavourite(props: Props): JSX.Element {
  const {
    id,
    featureImage,
    title,
    city,
    slug,
    cuisine,
    isFavourite,
    onToggleFavourite,
  } = props;
  const { isTablet, isDesktop, isHuge } = useScreenSize();

  const [ref, { width }] = useMeasure();
  const isSmall = width < 130;

  const { href, as } = generateURL({ city, slug, cuisine });
  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    router.push(href, as);
  };

  return (
    <div
      ref={ref}
      className={classNames(
        'overflow-hidden w-full bg-opacity-75',
        isSmall ? 'pb-3' : 'pb-1',
      )}
    >
      <div
        style={{ paddingBottom: '80%' }}
        className={classNames(
          'relative w-full h-0 overflow-hidden bg-primary bg-opacity-10',
          isSmall ? 'rounded-lg' : 'rounded-xl',
        )}
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

      <div className={isSmall ? 'py-1' : 'py-3'}>
        <div
          style={{
            lineHeight: '1em',
            height: '2em',
            paddingBottom: '2.1em',
          }}
          className={classNames(
            !isDesktop ? 'text-base' : isSmall ? 'text-lg' : 'text-xl',
            'font-somatic text-primary hover:underline overflow-hidden cursor-pointer',
          )}
        >
          <Link href={href} as={as}>
            <a>{title}</a>
          </Link>
        </div>

        <div className="flex justify-between pr-2 mt-2 text-primary">
          <div
            onClick={onToggleFavourite}
            className="flex items-center text-sm cursor-pointer"
          >
            {isFavourite ? (
              <HeartFilledPrimaryIcon className={!isDesktop ? 'h-8' : 'h-8'} />
            ) : (
              <HeartPrimaryIcon className={!isDesktop ? 'h-8' : 'h-8'} />
            )}
            {!!isDesktop && isFavourite ? 'Unsave' : 'Save'}
          </div>

          <div className="flex items-center text-sm cursor-pointer">
            <ShareIcon className={!isDesktop ? 'h-8' : 'h-8'} />
            {!!isDesktop && 'Share'}
          </div>
        </div>
      </div>
    </div>
  );
}
