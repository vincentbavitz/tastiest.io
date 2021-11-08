import { Button } from '@tastiest-io/tastiest-components';
import { ShareIcon } from '@tastiest-io/tastiest-icons';
import { IPost } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { ShareDropdown } from 'components/ShareDropdown';
import { useFavouriteArticle } from 'hooks/article/useFavouriteArticle';
import useShareArticle from 'hooks/article/useShareArticle';
import { useScreenSize } from 'hooks/useScreenSize';
import React, { useEffect, useRef, useState } from 'react';
import { useIntersection, useWindowScroll } from 'react-use';
import { UI } from '../../../constants';

const useSaveShareGeometry = () => {
  // Load intersection observer for iOS and IE11
  // if (
  //   typeof window !== 'undefined' &&
  //   typeof window.IntersectionObserver === 'undefined'
  // ) {
  //   import('intersection-observer');
  // }

  const { isDesktop } = useScreenSize();
  const { y: scrollY } = useWindowScroll();

  // Mobile - Manage scrolling behaviour
  const ref = useRef(null);
  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  });

  const isFixedToTop =
    !isDesktop && intersection?.intersectionRatio < 1 && scrollY > 150;

  return {
    ref,
    isFixedToTop,
  };
};

export function ArticleSaveShareWidget(props: IPost) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isDesktop } = useScreenSize();

  const { share } = useShareArticle(
    {
      ...props,
      restaurant: props.restaurant.uriName,
    },
    { onNoNativeShare: () => setIsDropdownOpen(true) },
  );

  const { savedArticles, toggleSaveArticle } = useFavouriteArticle();
  const isArticleSaved = savedArticles.some(slug => slug === props.slug);

  const { ref, isFixedToTop } = useSaveShareGeometry();

  // Close dropdown on fixing to top
  useEffect(() => {
    setIsDropdownOpen(false);
  }, [isFixedToTop]);

  return (
    <div className="relative">
      {isFixedToTop && (
        <ArticleSaveShareFixed
          isDesktop={isDesktop}
          isArticleSaved={isArticleSaved}
          toggleSaveArticle={toggleSaveArticle}
          {...props}
        />
      )}

      <div ref={ref} className="flex flex-col items-center">
        <div>
          <div className="z-10 flex justify-center w-full">
            <div
              style={{ width: 'fit-content' }}
              className="relative flex rounded-sm cursor-pointer bg-soft text-primary"
            >
              {/* <div
              onClick={() => toggleSaveArticle(props.slug)}
              className="flex items-center flex-1 px-2 py-1 space-x-1 font-medium duration-150 cursor-pointer hover:bg-white rounded-l-md"
            >
              {isArticleSaved ? (
                <HeartFilledIcon
                  className={clsx(
                    'text-primary fill-current',
                    isDesktop ? 'h-4' : 'h-4',
                  )}
                />
              ) : (
                <HeartIcon
                  className={clsx(
                    'text-primary stroke-current fill-current',
                    isDesktop ? 'h-5' : 'h-5',
                  )}
                />
              )}
              <span>Save</span>
            </div> */}

              <Button
                color="secondary"
                type="outline"
                onClick={() => share()}
                prefix={
                  <ShareIcon
                    className={clsx('fill-current', isDesktop ? 'h-5' : 'h-5')}
                  />
                }
              >
                Share
              </Button>
            </div>
          </div>

          <ShareDropdown
            title={props.title}
            city={props.city}
            cuisine={props.cuisine}
            restaurant={props.restaurant.uriName}
            slug={props.slug}
            isOpen={isDropdownOpen}
            setIsOpen={setIsDropdownOpen}
          />
        </div>
      </div>
    </div>
  );
}

interface ArticleSaveShareFixedProps
  extends Pick<
    IPost,
    'title' | 'city' | 'cuisine' | 'slug' | 'deal' | 'restaurant'
  > {
  isArticleSaved: boolean;
  isDesktop: boolean;
  toggleSaveArticle: (slug: string) => void;
}

function ArticleSaveShareFixed(props: ArticleSaveShareFixedProps) {
  const {
    title,
    city,
    cuisine,
    slug,
    deal: { dishName },
  } = props;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { share } = useShareArticle(
    {
      ...props,
      restaurant: props.restaurant.uriName,
    },
    { onNoNativeShare: () => setIsDropdownOpen(true) },
  );

  return (
    <div
      style={{
        zIndex: UI.Z_INDEX_FLOATING_COMPONENTS,
      }}
      className="fixed top-0 left-0 right-0"
    >
      <div className="flex items-center justify-between w-full h-12 px-6 bg-white shadow-lg">
        <p className="text-lg tracking-wide whitespace-nowrap sm:text-xl">
          {dishName.replace('*', '')}
        </p>

        <div className="flex items-center mt-1 space-x-4">
          {/* {isArticleSaved ? ( // /> //   className="h-5 cursor-pointer" //   onClick={() => toggleSaveArticle(slug)} // <HeartFilledIcon
            <HeartIcon
              onClick={() => toggleSaveArticle(slug)}
              className="h-6 cursor-pointer fill-current text-primary"
            />
          )} */}

          <ShareIcon
            onClick={() => share()}
            className="h-6 cursor-pointer fill-current text-primary"
          />
        </div>
      </div>

      <div className="flex justify-center w-full">
        <ShareDropdown
          title={title}
          city={city}
          cuisine={cuisine}
          restaurant={props.restaurant.uriName}
          slug={slug}
          isOpen={isDropdownOpen}
          setIsOpen={setIsDropdownOpen}
          offsetY={15}
        />
      </div>
    </div>
  );
}
