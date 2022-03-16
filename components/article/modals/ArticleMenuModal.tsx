import { Media } from '@tastiest-io/tastiest-horus';
import { Modal } from '@tastiest-io/tastiest-ui';
import ResponsiveImage from 'components/ResponsiveImage';
import { useScreenSize } from 'hooks/useScreenSize';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLockBodyScroll } from 'react-use';
import { toggleOfferMenu } from 'state/navigation';
import { IState } from 'state/reducers';

interface Props {
  menu: Media;
}

export default function ArticleMenuModal({ menu }: Props) {
  const { isOfferMenuOpen } = useSelector((state: IState) => state.navigation);
  const dispatch = useDispatch();

  const { isMobile } = useScreenSize();
  useLockBodyScroll(isMobile && isOfferMenuOpen);

  return (
    <Modal
      show={isOfferMenuOpen}
      close={() => dispatch(toggleOfferMenu(false))}
      fullscreen={isMobile}
      noPadding
      preload
    >
      <div className="relative flex justify-center h-full">
        <div
          style={{
            width: isMobile ? '100vw' : '450px',
            maxWidth: isMobile ? '100vw' : '80vw',
            maxHeight: isMobile ? '100%' : '90vh',
            minHeight: isMobile ? '100%' : '500px',
          }}
          className="relative overflow-auto"
        >
          <ResponsiveImage src={menu.url} priority={true} loading="eager" />
        </div>
      </div>
    </Modal>
  );
}
