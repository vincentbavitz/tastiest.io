import { IFigureImage } from '@tastiest-io/tastiest-utils';
import { Modal } from 'components/Modal';
import ResponsiveImage from 'components/ResponsiveImage';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleOfferMenu } from 'state/navigation';
import { IState } from 'state/reducers';

interface Props {
  menu: IFigureImage;
}

export default function ArticleMenuModal({ menu }: Props) {
  const { isOfferMenuOpen } = useSelector((state: IState) => state.navigation);
  const dispatch = useDispatch();

  // Lock body scrolling when menu is open
  // useLockBodyScroll(isOfferMenuOpen);

  return (
    <Modal
      noPadding
      modalId="MENU"
      onMobileFullscreen
      isOpen={isOfferMenuOpen}
      close={() => dispatch(toggleOfferMenu(false))}
    >
      <div
        style={{
          width: '450px',
          maxWidth: '80vw',
          maxHeight: '90vh',
        }}
        className="relative overflow-auto"
      >
        <ResponsiveImage src={menu.url} priority={true} loading="eager" />
      </div>
    </Modal>
  );
}
