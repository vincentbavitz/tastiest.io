import { CopyOutlined } from '@ant-design/icons';
import { Input, Popover } from '@tastiest-io/tastiest-ui';
import { useDevice } from 'hooks/useDevice';
import { useScreenSize } from 'hooks/useScreenSize';
import React, { useState } from 'react';
import { useCopyToClipboard } from 'react-use';

export const SharePopoverPanel = () => {
  const { isDesktop } = useScreenSize();

  const { isTouchDevice } = useDevice();
  // const { tastiestUrl } = useShareArticle({ ...props });

  // Track copies
  const [copied, setCopied] = useState(0);
  const [_, copyToClipboard] = useCopyToClipboard();

  // const onClickCopyToClipboard = () => {
  //   copyToClipboard(tastiestUrl.toString());
  //   setCopied(copied + 1);
  // };

  // const items: Array<IShareDropdownItems> = [
  // {
  //   id: 'share-to-facebook',
  //   name: 'Facebook',
  //   onClick: shareToFacebook,
  // },
  // {
  //   id: 'share-to-twitter',
  //   name: 'Twitter',
  //   onClick: shareToTwitter,
  // },
  // {
  //   id: 'share-to-whatsapp',
  //   name: 'WhatsApp',
  //   onClick: shareToWhatsApp,
  // },
  // {
  //   id: 'share-to-reddit',
  //   name: 'Reddit',
  //   onClick: shareToReddit,
  // },
  // ];

  return (
    <Popover.Panel>
      doloribus unde exercitationem cum? Iste.
      <div style={{ width: '25rem' }} className="px-2 overflow-visible">
        <Input
          readOnly
          // value={tastiestUrl.toString()}
          inputClassName="!text-sm"
          suffix={
            <CopyOutlined
              // onClick={onClickCopyToClipboard}
              className="-mt-1 text-xl text-secondary hover:text-primary duration-300"
            />
          }
        />

        {/* <div className="flex items-center w-full border rounded-sm bg-soft border-soft">
            <input
              className="pl-3 border-l outline-none bg-soft border-soft rounded-l-md"
              style={{ minWidth: '20rem', maxWidth: '80vw' }}
              readOnly
              value={tastiestUrl.toString()}
            />

            <Button onClick={onClickCopyToClipboard} color="primary">
              <Tooltip
                isOpen={Boolean(copied)}
                content="Copied"
                size="small"
                theme="light"
                placement="top"
                hideAfter={500}
              >
                <div className="-mt-1">
                  <CopyOutlined className="-mt-1 text-xl" />
                </div>
              </Tooltip>
            </Button>
          </div> */}
      </div>
    </Popover.Panel>
  );
};
