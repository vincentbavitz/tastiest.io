import {
  Button,
  Dropdown,
  DropdownItem,
} from '@tastiest-io/tastiest-components';
import useShareArticle, {
  IUseShareArticle,
} from 'hooks/article/useShareArticle';
import React from 'react';
import { InputGroup } from './inputs/InputGroup';

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

  const items: Array<IShareDropdownItems> = [
    {
      id: 'share-to-facebook',
      name: 'Facebook',
      onClick: shareToFacebook,
    },
    {
      id: 'share-to-twitter',
      name: 'Twitter',
      onClick: shareToTwitter,
    },
    {
      id: 'share-to-whatsapp',
      name: 'WhatsApp',
      onClick: shareToWhatsApp,
    },
    {
      id: 'share-to-reddit',
      name: 'Reddit',
      onClick: shareToReddit,
    },
  ];

  return (
    <div className="relative flex justify-center w-px">
      <Dropdown
        pull="center"
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
                  value={tastiestUrl}
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
