import { IFigureImage } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { Modal } from 'components/Modal';
import { OpenMenuIcon } from 'public/assets/article';
import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { useLockBodyScroll } from 'react-use';
import { toggleOfferMenu } from 'state/navigation';
import { IState } from 'state/reducers';

interface Props {
  menu: IFigureImage;
  children: ReactNode;
}

export default function OpenMenuButton(props: Props) {
  const { menu, children } = props;
  const { isOfferMenuOpen } = useSelector((state: IState) => state.navigation);

  // Lock body scrolling when menu is open
  useLockBodyScroll(isOfferMenuOpen);

  return (
    <div className="relative flex items-center h-10">
      <div
        onClick={() => toggleOfferMenu(true)}
        style={{ height: '59.42857%' }}
        className={clsx(
          'relative pl-16 pr-4 text-white duration-200 flex items-center rounded-md cursor-pointer whitespace-nowrap',
          'bg-primary hover:-bg-primary-1',
        )}
      >
        <div style={{ lineHeight: '0' }} className="font-medium">
          {children}
        </div>
      </div>

      <OpenMenuIcon className="absolute top-0 bottom-0 h-full cursor-pointer left-2" />

      <Modal
        noPadding
        modalId="MENU"
        onMobileFullscreen
        isOpen={isOfferMenuOpen}
        close={() => toggleOfferMenu(false)}
      >
        <div
          style={{ width: '450px', maxWidth: '80vw', height: '90vh' }}
          className="overflow-auto "
        >
          <img src={menu.url} />
        </div>
      </Modal>
    </div>
  );
}
