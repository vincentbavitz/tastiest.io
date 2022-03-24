import { LinkOutlined, ShareAltOutlined } from '@ant-design/icons';
import { Button, Popover } from '@tastiest-io/tastiest-ui';
import { ContentfulPost } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import useShareArticle from 'hooks/article/useShareArticle';
import { useScreenSize } from 'hooks/useScreenSize';
import React, { useState } from 'react';
import { useCopyToClipboard } from 'react-use';

export function ArticleSaveShareWidget(props: ContentfulPost) {
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

  const { share, hasNativeSharing, tastiestUrl } = useShareArticle(
    {
      ...props,
      title: props.title,
      city: props.restaurant.city,
      slug: props.slug,
      cuisine: props.restaurant.cuisine,
      restaurant: props.restaurant.uri_name,
    },
    { onNoNativeShare: () => setIsDropdownOpen(true) },
  );

  return (
    <div className="relative">
      {hasNativeSharing ? (
        <button
          onClick={() => share()}
          className="flex items-center justify-center h-12 w-12 rounded-full shadow-md bg-white"
        >
          <ShareAltOutlined className={clsx('text-gray-500 text-xl')} />
        </button>
      ) : (
        <Popover align="center">
          <Popover.Trigger>
            <button className="flex items-center justify-center h-12 w-12 rounded-full shadow-md bg-white">
              <ShareAltOutlined className={clsx('text-gray-500 text-xl')} />
            </button>
          </Popover.Trigger>

          <Popover.Panel>
            <div
              style={{ maxWidth: '80vw' }}
              className="flex flex-wrap justify-center items-center gap-3"
            >
              <div className="flex-grow items-center gap-3 flex justify-center">
                <LinkOutlined className="text-lg" />
                <input
                  readOnly
                  color="neutral"
                  className="flex-grow border-l py-2 px-3 text-sm outline-none"
                  value={tastiestUrl.toString()}
                />
              </div>

              <div style={{ minWidth: '6rem' }} className="flex-grow">
                <Button
                  wide
                  color={copied ? 'success' : 'secondary'}
                  onClick={handleCopyToClipboard}
                >
                  {copied ? 'Copied' : 'Copy'}
                </Button>
              </div>
            </div>
          </Popover.Panel>
        </Popover>
      )}
    </div>
  );
}
