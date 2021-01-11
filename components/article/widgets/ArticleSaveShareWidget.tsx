import { useRouter } from 'next/router';
import React, { useState } from 'react';
import HeartFilledPrimarySVG from '../../../assets/svgs/heart-filled-primary.svg';
import HeartPrimarySVG from '../../../assets/svgs/heart-primary.svg';
import ShareSVG from '../../../assets/svgs/share.svg';
import { useArticle } from '../../../hooks/article';
import { useAuth } from '../../../hooks/auth';
import { useUserData } from '../../../hooks/userData';
import { USER_DATA } from '../../../types/firebase';
import {
  shareToFacebook,
  shareToReddit,
  shareToTwitter,
  shareToWhatsApp,
} from '../../../utils/share';
import { Button } from '../../Button';
import { Dropdown } from '../../Dropdown';
import { DropdownItem } from '../../DropdownItem';
import { Input } from '../../Input';
import { InputGroup } from '../../InputGroup';

interface IShareDropdownItems {
  id: string;
  name: string;
  onClick: () => void;
}

export function ArticleSaveShareWidget() {
  const router = useRouter();
  const articleUrl = `tastiest.io${router.asPath}`;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const article = useArticle();
  const { isSignedIn } = useAuth();

  const { userData = {}, setUserData } = useUserData();

  const toggleSaveArticle = () => {
    if (!isSignedIn) {
      router.push('/login');
    }

    if (isArticleSaved) {
      const filtered = userData?.savedArticles?.filter(
        saved => article.id !== saved,
      );

      setUserData(USER_DATA.SAVED_ARTICLES, filtered);
      return;
    }

    setUserData(USER_DATA.SAVED_ARTICLES, [
      ...(userData?.savedArticles ?? []),
      article.id,
    ]);
  };

  const isArticleSaved = userData?.savedArticles?.find(
    saved => article.id === saved,
  );

  console.log('ArticleSaveShareWidget ➡️ articleUrl:', articleUrl);

  const dropdownItems: Array<IShareDropdownItems> = [
    {
      id: 'share-to-facebook',
      name: 'Facebook',
      onClick: () => shareToFacebook(),
    },
    {
      id: 'share-to-twitter',
      name: 'Twitter',
      onClick: () => shareToTwitter(),
    },
    {
      id: 'share-to-whatsapp',
      name: 'WhatsApp',
      onClick: () => shareToWhatsApp(),
    },
    {
      id: 'share-to-reddit',
      name: 'Reddit',
      onClick: () => shareToReddit(),
    },
  ];

  return (
    <div className="flex justify-center w-full z-10">
      <div
        style={{ width: 'fit-content' }}
        className="flex bg-secondary desktop:bg-white bg-opacity-50 cursor-pointer rounded-md text-primary my-4"
      >
        <div
          onClick={() => toggleSaveArticle()}
          className="flex flex-1 items-center cursor-pointer px-2 py-1 space-x-1 hover:bg-white bg-opacity-50 font-medium rounded-md"
        >
          {isArticleSaved ? (
            <HeartFilledPrimarySVG className="h-8" />
          ) : (
            <HeartPrimarySVG className="h-8" />
          )}
          <span>Save</span>
        </div>

        <div
          className="flex flex-1 items-center cursor-pointer px-2 py-1 space-x-1 hover:bg-white bg-opacity-50 font-medium rounded-md"
          onClick={() => setIsDropdownOpen(true)}
        >
          <ShareSVG className="h-8" />
          <span>Share</span>
        </div>

        <Dropdown
          isOpen={isDropdownOpen}
          onClickAway={() => setIsDropdownOpen(false)}
          pull="center"
          offsetX={-50}
          offsetY={25}
        >
          <>
            <div className="px-3 pt-1 pb-2">
              <InputGroup className="w-full rounded-sm bg-secondary bg-opacity-25">
                <Input
                  style={{ minWidth: '9rem' }}
                  border="none"
                  readonly
                  value={articleUrl}
                />

                <Button type="text" size="small" color="primary">
                  COPY
                </Button>
              </InputGroup>
            </div>

            {dropdownItems.map(item => (
              <DropdownItem key={item.id} id={item.id}>
                <div className="w-full text-center">{item.name}</div>
              </DropdownItem>
            ))}
          </>
        </Dropdown>
      </div>
    </div>
  );
}
