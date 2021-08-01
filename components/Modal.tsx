import { ExitIcon } from '@tastiest-io/tastiest-icons';
import { dlog } from '@tastiest-io/tastiest-utils';
import classNames from 'classnames';
import clsx from 'clsx';
import { useScreenSize } from 'hooks/useScreenSize';
import React, {
  BaseSyntheticEvent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useKey } from 'react-use';
import { UI } from '../constants';
import { closeAuthModal, collapseSearchOverlay } from '../state/navigation';
import { IState } from '../state/reducers';

interface Props {
  modalId: string;
  isOpen: boolean;
  children: ReactNode;
  // size: 'small' | 'regular' | 'large';
  title?: string;
  className?: string;
  onMobileFullscreen?: boolean;
  noPadding?: boolean;
  close?: () => void;
}

export function Modal(props: Props) {
  const {
    modalId,
    title,
    isOpen,
    close,
    className,
    children,
    noPadding,
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

  useKey('Escape', () => {
    dispatch(closeAuthModal());
    close();
  });

  // Close when the user clicks outside the modal.
  const containerId = `modal-container-${modalId}`;
  const onClickedAway = (e: BaseSyntheticEvent) => {
    if (e.target.id === containerId) {
      close();
    }
  };

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

  const padding =
    onMobileFullscreen && isMobile ? 0 : UI.PAGE_CONTAINED_PADDING_VW;

  if (
    typeof document === 'undefined' ||
    !document.getElementById('modal-root')
  ) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      id={containerId}
      ref={ref}
      style={{
        zIndex: UI.Z_INDEX_MODAL_OVERLAY,
        paddingLeft: `${padding}vw`,
        paddingRight: `${padding}vw`,
      }}
      className={clsx(
        'fixed inset-0 flex items-center justify-center bg-black bg-opacity-25',
        'transition-opacity duration-300',
        isOpen && shouldRender
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none',
      )}
      onClick={e => onClickedAway(e)}
    >
      <div
        ref={boxRef}
        style={{
          height: onMobileFullscreen && isMobile ? '100%' : 'unset',
          width: onMobileFullscreen && isMobile ? '100vw' : 'unset',
        }}
        className={classNames(
          'relative border-2 border-gray pt-12 bg-white',
          !noPadding && 'px-6 pb-4',
          className,
        )}
      >
        <div className="absolute top-0 left-0 right-0 z-0 flex items-center justify-between px-3 pt-3">
          <div className="w-6"></div>
          <div className="text-xl font-medium">{title}</div>
          <ExitIcon
            onClick={close}
            className="w-6 cursor-pointer fill-current text-primary"
          />
        </div>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
}
