import { Modal } from '@tastiest-io/tastiest-ui';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleHiwModal } from 'state/navigation';
import { IState } from 'state/reducers';

export default function ArticleHowItWorksModal() {
  // Article How-It-Works overlay
  const dispatch = useDispatch();
  const { isArticleHiwOpen } = useSelector((state: IState) => state.navigation);

  return (
    <Modal
      show={isArticleHiwOpen}
      close={() => dispatch(toggleHiwModal(false))}
      noPadding
      preload
    >
      <div
        style={{ maxWidth: '90vw', maxHeight: '90vh', width: '400px' }}
        className="overflow-auto"
      >
        <img
          src="/assets/illustrations/how-it-works-illustration.png"
          className="w-full"
        />
      </div>
    </Modal>
  );
}
