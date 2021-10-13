import {
  HeartFilledIcon,
  HeartIcon,
  ShareIcon,
} from '@tastiest-io/tastiest-icons';
import { IPost } from '@tastiest-io/tastiest-utils';
import classNames from 'classnames';
import clsx from 'clsx';
import { ShareDropdown } from 'components/ShareDropdown';
import { useScreenSize } from 'hooks/useScreenSize';
import router from 'next/dist/client/router';
import Link from 'next/link';
import React, { SyntheticEvent, useState } from 'react';
import { useMeasure } from 'react-use';
import { generateStaticURL } from 'utils/routing';

interface Props extends Partial<IPost> {
  isFavourite: boolean;
  onToggleFavourite: () => void;
}

export function ArticleCardFavourite(props: Props): JSX.Element {
  const {
    id,
    // featureImage,
    title,
    city,
    slug,
    cuisine,
    isFavourite,
    restaurant,
    onToggleFavourite,
    deal: { image },
  } = props;
  const { isTablet, isDesktop, isHuge } = useScreenSize();

  const [ref, { width }] = useMeasure();
  const isSmall = width < 180;

  const [isShareDropdownOpen, setIsShareDropdownOpen] = useState(false);

  const { href, as } = generateStaticURL({
    city,
    slug,
    cuisine,
    restaurant: restaurant.uriName,
  });

  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    router.push(href, as);
  };

  return (
    <div
      ref={ref}
      className={classNames('w-full bg-opacity-75', isSmall ? 'pb-3' : 'pb-1')}
    >
      <div
        style={{ paddingBottom: '80%' }}
        className={classNames(
          'relative w-full h-0 overflow-hidden bg-primary bg-opacity-10',
          isSmall ? 'rounded-md' : 'rounded-xl',
        )}
      >
        {image.url && (
          <div className="absolute inset-0">
            <img
              className="object-cover w-full h-full"
              src={image?.url}
              alt={image?.description}
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
            isSmall ? 'text-lg' : 'text-xl',
            'font-primary text-primary hover:underline overflow-hidden cursor-pointer',
          )}
        >
          <Link href={href} as={as}>
            <a>{title}</a>
          </Link>
        </div>

        <div className="flex justify-between pr-2 mt-2 text-primary">
          <div
            onClick={onToggleFavourite}
            className={clsx(
              'flex items-center cursor-pointer',
              isSmall ? 'text-sm' : 'text-base',
            )}
          >
            {isFavourite ? (
              <HeartFilledIcon
                className={clsx('pr-1', !isDesktop ? 'h-5' : 'h-5')}
              />
            ) : (
              <HeartIcon
                className={clsx(
                  'text-primary fill-current pr-1',
                  !isDesktop ? 'h-5' : 'h-5',
                )}
              />
            )}
            {isDesktop && (isFavourite ? 'Unsave' : 'Save')}
          </div>

          <div
            onClick={() => setIsShareDropdownOpen(!isShareDropdownOpen)}
            className="flex items-center text-sm cursor-pointer"
          >
            <ShareIcon className={clsx('pr-1', !isDesktop ? 'h-5' : 'h-5')} />

            {isDesktop && 'Share'}

            <ShareDropdown
              title={props.title}
              city={props.city}
              cuisine={props.cuisine}
              restaurant={props.restaurant.uriName}
              slug={props.slug}
              isOpen={isShareDropdownOpen}
              setIsOpen={setIsShareDropdownOpen}
              offsetY={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
