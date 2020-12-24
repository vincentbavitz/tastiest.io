import classNames from 'classnames';
import router from 'next/dist/client/router';
import { SyntheticEvent } from 'react';
import { useMeasure } from 'react-use';
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
        'overflow-hidden w-full bg-secondary bg-opacity-75',
        isSmall ? 'rounded-lg' : 'rounded-xl',
        isSmall ? 'pb-3' : 'pb-1',
      )}
      onClick={e => handleClick(e)}
    >
      <div
        style={{ paddingBottom: '60%' }}
        className="w-full h-0 overflow-hidden"
      >
        <img src={featureImage.source} alt={featureImage.altText} />
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
        </div>
      </div>
    </div>
  );
}
