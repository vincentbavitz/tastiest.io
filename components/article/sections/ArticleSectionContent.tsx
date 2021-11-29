import { ExperiencePost, Media } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { RichBody } from 'components/RichBody';
import { useScreenSize } from 'hooks/useScreenSize';
import { CovidAware, OpenMenuIcon } from 'public/assets/article';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleOfferMenu } from 'state/navigation';
import ArticleMenuModal from '../modals/ArticleMenuModal';

// TODO
// Really want writers to be able to do {{CALL_TO_ACTION}} sorta things like Wordpress shortcodes
// And that will then conditionally render our components
export function ArticleSectionContent(post: ExperiencePost) {
  const { isMobile } = useScreenSize();

  return (
    <div>
      <div
        className={clsx(
          'flex items-center pb-4',
          isMobile ? 'flex-col' : 'justify-between gap-2',
        )}
      >
        <CovidAwareBadge />
        {post.menuImage ? <OpenMenuButton menuImage={post.menuImage} /> : null}
      </div>

      <div className="flex flex-col pb-10 space-y-6">
        <RichBody body={post.body} />

        {/* <ArticleSectionNeedToKnow body={post.needToKnow} /> */}
      </div>
    </div>
  );
}

const CovidAwareBadge = () => {
  const height = 1.75; // in rem

  return (
    <div className="relative my-3 select-none">
      <CovidAware
        style={{
          height: `${1.710836622 * height}rem`,
          top: `-${0.3 * height}rem`,
        }}
        className="absolute left-2 z-30"
      />

      <div
        style={{ height: `${height}rem`, width: 'fit-content' }}
        className="flex items-center bg-secondary rounded whitespace-nowrap text-light pr-4 pl-16"
      >
        Covid Aware
      </div>
    </div>
  );
};

interface OpenMenuButtonProps {
  menuImage: Media;
}

const OpenMenuButton = ({ menuImage }: OpenMenuButtonProps) => {
  const height = 1.75; // in rem
  const dispatch = useDispatch();

  const openMenu = () => {
    dispatch(toggleOfferMenu(true));
  };

  return (
    <>
      <div
        onClick={openMenu}
        className="relative my-3 cursor-pointer select-none duration-300 filter hover:brightness-125"
      >
        <OpenMenuIcon
          style={{
            height: `${1.710836622 * height}rem`,
            top: `-${0.3 * height}rem`,
          }}
          className="absolute left-2 z-30"
        />

        <div
          style={{
            height: `${height}rem`,
            width: 'fit-content',
            paddingLeft: '4.25rem',
          }}
          className="flex items-center bg-secondary rounded whitespace-nowrap text-light pr-4"
        >
          Menu
        </div>
      </div>

      <ArticleMenuModal menu={menuImage} />
    </>
  );
};
