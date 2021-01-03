import classNames from 'classnames';
import router from 'next/dist/client/router';
import { SyntheticEvent } from 'react';
import { useMeasure } from 'react-use';
import HeartFilledPrimarySVG from '../../assets/svgs/heart-filled-primary.svg';
import ShareSVG from '../../assets/svgs/share.svg';
import { ISanityArticle } from '../../types/article';
import { generateURL } from '../../utils/routing';

export function ArticleCardFavourite(props: ISanityArticle): JSX.Element {
  const { featureImage, title, city, slug, cuisine } = props;

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
        'overflow-hidden w-full bg-opacity-75',
        isSmall ? 'pb-3' : 'pb-1',
      )}
      onClick={e => handleClick(e)}
    >
      <div
        style={{ paddingBottom: '80%' }}
        className={classNames(
          'relative w-full h-0 overflow-hidden',
          isSmall ? 'rounded-lg' : 'rounded-xl',
        )}
      >
        <div className="absolute inset-0">
          <img
            className="object-cover w-full h-full"
            src={featureImage.source}
            alt={featureImage.altText}
          />
        </div>
      </div>

      <div className={isSmall ? 'py-1' : 'py-3'}>
        <div
          style={{
            lineHeight: '1em',
            height: '2em',
            paddingBottom: '2.1em',
          }}
          className={classNames(
            isSmall ? 'text-lg' : 'text-twoxl',
            'font-somatic text-primary overflow-hidden cursor-pointer',
          )}
        >
          {title}
        </div>

        <div className="flex justify-between text-primary mt-2 pr-2">
          <div className="flex items-center">
            <HeartFilledPrimarySVG className="h-10" />
            Unsave
          </div>

          <div className="flex items-center">
            <ShareSVG className="h-10" />
            Share
          </div>
        </div>
      </div>
    </div>
  );
}
