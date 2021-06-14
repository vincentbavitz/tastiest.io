import { ExitIcon } from '@tastiest-io/tastiest-icons';
import { dlog } from '@tastiest-io/tastiest-utils';
import classNames from 'classnames';
import { useScreenSize } from 'hooks/useScreenSize';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useClickAway, useKey } from 'react-use';
import { UI } from '../constants';
import { closeSignInModal, collapseSearchOverlay } from '../state/navigation';
import { IState } from '../state/reducers';

interface Props {
  modalId: string;
  isOpen: boolean;
  children: ReactNode;
  // size: 'small' | 'regular' | 'large';
  className?: string;
  close?: () => void;
  onMobileFullscreen?: boolean;
}

export function Modal(props: Props) {
  const {
    modalId,
    isOpen,
    close,
    className,
    children,
    onMobileFullscreen,
  } = props;

  const { isMobile } = useScreenSize();
  const { searchOverlayExpanded, openedModal } = useSelector(
    (state: IState) => state.navigation,
  );

  const dispatch = useDispatch();
  const [shouldRender, setShouldRender] = useState(false);

  const ref = useRef(null);
  const boxRef = useRef(null);
  useKey('Escape', () => dispatch(closeSignInModal()));
  useClickAway(boxRef, () => dispatch(closeSignInModal()));
  // useLockBodyScroll(isOpen);

  useEffect(() => {
    // If modal is open, close search overlay
    if (isOpen && searchOverlayExpanded) {
      dispatch(collapseSearchOverlay());
    }

    // Refuse to open if another modal is currently open

    if (modalId !== openedModal) {
      dlog(`Cannot open modal ${modalId}, ${openedModal} is already open.`);

      setShouldRender(true);
    }
  }, []);

  if (!isOpen || !shouldRender) {
    return null;
  }

  const padding =
    onMobileFullscreen && isMobile ? 0 : UI.PAGE_CONTAINED_PADDING_VW;

  return (
    <div
      ref={ref}
      style={{
        zIndex: UI.Z_INDEX_MODAL_OVERLAY,
        paddingLeft: `${padding}vw`,
        paddingRight: `${padding}vw`,
      }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25"
    >
      <div
        ref={boxRef}
        style={{
          height: onMobileFullscreen && isMobile ? '100%' : 'unset',
          width: onMobileFullscreen && isMobile ? '100vw' : 'unset',
        }}
        className={classNames(
          'relative border-2 border-gray px-6 pb-4 pt-12 bg-white',
          className,
        )}
      >
        <div className="absolute top-0 right-0 z-0 flex justify-end pt-3 pr-3">
          <ExitIcon
            onClick={close}
            className="h-6 cursor-pointer fill-current text-primary"
          />
        </div>
        {children}
      </div>
    </div>
  );
}
