import { CopyOutlined } from '@ant-design/icons';
import { Button, Dropdown, Tooltip } from '@tastiest-io/tastiest-components';
import useShareArticle, {
  IUseShareArticle,
} from 'hooks/article/useShareArticle';
import React, { useState } from 'react';
import { useCopyToClipboard } from 'react-use';
import { UI } from '../constants';

interface IShareDropdownProps extends IUseShareArticle {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  offsetY?: number;
}

interface IShareDropdownItems {
  id: string;
  name: string;
  onClick: () => void;
}

export const ShareDropdown = (props: IShareDropdownProps) => {
  const { isOpen, setIsOpen, offsetY = -5 } = props;

  const {
    tastiestUrl,
    shareToFacebook,
    shareToTwitter,
    shareToReddit,
    shareToWhatsApp,
  } = useShareArticle({ ...props });

  // Track copies
  const [copied, setCopied] = useState(0);
  const [_, copyToClipboard] = useCopyToClipboard();

  const onClickCopyToClipboard = () => {
    copyToClipboard(tastiestUrl);
    setCopied(copied + 1);
  };

  const items: Array<IShareDropdownItems> = [
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
  ];

  return (
    <div style={{ zIndex: UI.Z_INDEX_DROPDOWNS }} className="">
      <Dropdown
        pull="center"
        style="outline"
        isOpen={isOpen}
        offsetY={offsetY}
        onClickAway={() => setIsOpen(false)}
      >
        <div className="px-2 overflow-visible">
          <div className="flex items-center w-full border rounded-md bg-soft border-soft">
            <input
              className="pl-3 border-l outline-none bg-soft border-soft rounded-l-md"
              style={{ minWidth: '12rem', maxWidth: '80vw' }}
              readOnly
              value={tastiestUrl}
            />

            <Button
              className="rounded-l-none"
              onClick={onClickCopyToClipboard}
              color="primary"
            >
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
          </div>
        </div>
      </Dropdown>
    </div>
  );
};
