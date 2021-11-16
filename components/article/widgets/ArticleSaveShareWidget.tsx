import { LinkOutlined, ShareAltOutlined } from '@ant-design/icons';
import { Button, Popover } from '@tastiest-io/tastiest-ui';
import { IPost } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { useFavouriteArticle } from 'hooks/article/useFavouriteArticle';
import useShareArticle from 'hooks/article/useShareArticle';
import { useScreenSize } from 'hooks/useScreenSize';
import React, { useState } from 'react';
import { useCopyToClipboard } from 'react-use';

export function ArticleSaveShareWidget(props: IPost) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isDesktop } = useScreenSize();

  const [copied, setCopied] = useState(false);
  const [copyState, copyToClipboard] = useCopyToClipboard();

  const handleCopyToClipboard = () => {
    copyToClipboard(tastiestUrl.toString());
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  const { share, tastiestUrl } = useShareArticle(
    {
      ...props,
      restaurant: props.restaurant.uriName,
    },
    { onNoNativeShare: () => setIsDropdownOpen(true) },
  );

  const { savedArticles, toggleSaveArticle } = useFavouriteArticle();
  const isArticleSaved = savedArticles.some(slug => slug === props.slug);

  return (
    <div className="relative">
      <Popover align="center">
        <Popover.Trigger>
          <button className="flex items-center justify-center h-12 w-12 rounded-full shadow-md bg-white">
            <ShareAltOutlined className={clsx('text-gray-500 text-xl')} />
          </button>

          {/* <IconButton
            circle
            size="large"
            theme="light"
            icon={ShareAltOutlined}
          /> */}
        </Popover.Trigger>

        <Popover.Panel>
          <div className="flex items-center space-x-3">
            <LinkOutlined className="text-lg" />
            <input
              readOnly
              color="neutral"
              className="border-l py-2 px-3 w-64 text-sm outline-none"
              value={tastiestUrl.toString()}
            />

            <Button
              color={copied ? 'success' : 'secondary'}
              onClick={handleCopyToClipboard}
            >
              <div className="w-16">{copied ? 'Copied' : 'Copy'}</div>
            </Button>
          </div>
        </Popover.Panel>
      </Popover>
    </div>
  );
}
