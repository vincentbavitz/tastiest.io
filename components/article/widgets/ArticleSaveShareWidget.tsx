import HeartFilledPrimarySVG from '@svg/heart-filled-primary.svg';
import HeartPrimarySVG from '@svg/heart-primary.svg';
import ShareSVG from '@svg/share.svg';
import { Button } from '@tastiest-io/tastiest-components';
import { ScreenContext } from 'contexts/screen';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useIntersection } from 'react-use';
import { UI } from '../../../constants';
import { useArticle } from '../../../hooks/useArticle';
import { useAuth } from '../../../hooks/useAuth';
import { useUserData } from '../../../hooks/useUserData';
import {
  shareToFacebook,
  shareToReddit,
  shareToTwitter,
  shareToWhatsApp,
} from '../../../utils/share';
import { Dropdown } from '../../Dropdown';
import { DropdownItem } from '../../DropdownItem';
import { InputGroup } from '../../inputs/InputGroup';

export interface IShareDropdownItems {
  id: string;
  name: string;
  onClick: () => void;
}

export interface ArticleSaveShareProps {
  id: string;
  title: string;
  slug: string;
}

const useSaveShare = ({ id, title, slug }: ArticleSaveShareProps) => {
  const { toggleSaveArticle } = useArticle();
  const { user } = useAuth();
  const { userData = {} } = useUserData(user);

  const router = useRouter();
  const articleUrl = `tastiest.io${router.asPath}`;
  const isArticleSaved = userData?.savedArticles?.find(saved => id === saved);

  const dropdownItems: Array<IShareDropdownItems> = [
    {
      id: 'share-to-facebook',
      name: 'Facebook',
      onClick: () => shareToFacebook(title, slug),
    },
    {
      id: 'share-to-twitter',
      name: 'Twitter',
      onClick: () => shareToTwitter(title, slug),
    },
    {
      id: 'share-to-whatsapp',
      name: 'WhatsApp',
      onClick: () => shareToWhatsApp(title, slug),
    },
    {
      id: 'share-to-reddit',
      name: 'Reddit',
      onClick: () => shareToReddit(title, slug),
    },
  ];

  return {
    articleUrl,
    isArticleSaved,
    dropdownItems,
    toggleSaveArticle,
  };
};

const useSaveShareGeometry = () => {
  const { isDesktop } = useContext(ScreenContext);

  // Mobile - Manage scrolling behaviour
  const ref = useRef(null);
  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  });

  const isFixedToTop = !isDesktop && intersection?.intersectionRatio < 1;

  return {
    ref,
    isFixedToTop,
  };
};

export function ArticleSaveShareWidget(props: ArticleSaveShareProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isDesktop } = useContext(ScreenContext);

  const {
    articleUrl,
    isArticleSaved,
    dropdownItems,
    toggleSaveArticle,
  } = useSaveShare(props);

  const { ref, isFixedToTop } = useSaveShareGeometry();

  // Close dropdown on fixing to top
  useEffect(() => {
    setIsDropdownOpen(false);
  }, [isFixedToTop]);

  return (
    <>
      {isFixedToTop && (
        <ArticleSaveShareFixed
          {...props}
          dishName={'The Best Xiao Long Bao'}
          isDesktop={isDesktop}
        />
      )}

      <div ref={ref} className="flex flex-col items-center">
        <div className="z-10 flex justify-center w-full">
          <div
            style={{ width: 'fit-content' }}
            className="flex my-4 rounded-md cursor-pointer bg-soft text-primary"
          >
            <div
              onClick={() => toggleSaveArticle(props.id)}
              className="flex items-center flex-1 px-2 py-1 space-x-1 font-medium duration-150 cursor-pointer hover:bg-white rounded-l-md"
            >
              {isArticleSaved ? (
                <HeartFilledPrimarySVG className={isDesktop ? 'h-6' : 'h-8'} />
              ) : (
                <HeartPrimarySVG className={isDesktop ? 'h-6' : 'h-8'} />
              )}
              <span>Save</span>
            </div>

            <div
              className="flex items-center flex-1 px-2 py-1 space-x-1 font-medium duration-150 cursor-pointer hover:bg-white rounded-r-md"
              onClick={() => setIsDropdownOpen(true)}
            >
              <ShareSVG className={isDesktop ? 'h-5' : 'h-8'} />
              <span>Share</span>
            </div>
          </div>
        </div>

        <ShareDropdown
          url={articleUrl}
          items={dropdownItems}
          isOpen={isDropdownOpen}
          setIsOpen={setIsDropdownOpen}
        />
      </div>
    </>
  );
}

interface ArticleSaveShareFixedProps extends ArticleSaveShareProps {
  dishName: string;
  isDesktop: boolean;
}

function ArticleSaveShareFixed(props: ArticleSaveShareFixedProps) {
  const { dishName, isDesktop } = props;

  const {
    articleUrl,
    isArticleSaved,
    dropdownItems,
    toggleSaveArticle,
  } = useSaveShare(props);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      style={{
        zIndex: UI.ARTICLE.FLOATING_COMPONENTS_Z_INDEX,
      }}
      className="fixed top-0 left-0 right-0"
    >
      <div className="flex items-center justify-between w-full h-12 px-6 bg-white shadow-lg">
        <p className="text-lg tracking-wide whitespace-nowrap mobile:text-xl">
          {dishName}
        </p>

        <div className="flex items-center mt-1 space-x-2">
          {isArticleSaved ? (
            <HeartFilledPrimarySVG
              onClick={toggleSaveArticle}
              className="h-8"
            />
          ) : (
            <HeartPrimarySVG onClick={toggleSaveArticle} className="h-10" />
          )}

          <ShareSVG
            onClick={() => setIsDropdownOpen(true)}
            className="h-10 -mt-1"
          />
        </div>
      </div>

      <div className="flex justify-center w-full">
        <ShareDropdown
          url={articleUrl}
          items={dropdownItems}
          isOpen={isDropdownOpen}
          setIsOpen={setIsDropdownOpen}
          offsetY={15}
        />
      </div>
    </div>
  );
}

interface ShareDropdownProps {
  url: string;
  items: IShareDropdownItems[];
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  offsetY?: number;
}

const ShareDropdown = (props: ShareDropdownProps) => {
  const { url, items, isOpen, setIsOpen, offsetY = -5 } = props;

  return (
    <div className="relative flex justify-center w-px">
      <Dropdown
        isOpen={isOpen}
        onClickAway={() => setIsOpen(false)}
        style="outline"
        offsetY={offsetY}
      >
        <>
          <div className="px-3 pt-1 pb-2">
            <InputGroup className="w-full border rounded-md bg-soft border-soft">
              <div>
                <input
                  className="pl-3 text-sm border-l outline-none bg-soft border-soft rounded-l-md"
                  style={{ minWidth: '9rem' }}
                  readOnly
                  value={url}
                />
              </div>

              <Button type="text" size="small" color="primary">
                COPY
              </Button>
            </InputGroup>
          </div>

          {items.map(item => (
            <DropdownItem key={item.id} id={item.id} onSelect={item.onClick}>
              <div className="w-full text-center">{item.name}</div>
            </DropdownItem>
          ))}
        </>
      </Dropdown>
    </div>
  );
};
