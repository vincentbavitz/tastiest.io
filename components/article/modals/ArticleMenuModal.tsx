import { Modal } from '@tastiest-io/tastiest-ui';
import { Media } from '@tastiest-io/tastiest-utils';
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
  useLockBodyScroll(isOfferMenuOpen);

  return (
    <Modal
      show={isOfferMenuOpen}
      close={() => dispatch(toggleOfferMenu(false))}
      fullscreen={isMobile}
      noPadding
      preload
    >
      <div className="flex justify-center">
        <div
          style={{
            width: '450px',
            maxWidth: '80vw',
            maxHeight: '90vh',
            minHeight: '500px',
          }}
          className="relative overflow-auto"
        >
          <ResponsiveImage src={menu.url} priority={true} loading="eager" />
        </div>
      </div>
    </Modal>
  );
}
