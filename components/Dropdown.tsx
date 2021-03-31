import classNames from 'classnames';
import React, { useRef } from 'react';
import { useClickAway } from 'react-use';

interface Props {
  isOpen: boolean;
  pull?: 'left' | 'right' | 'center';
  style?: 'default' | 'outline';
  opacity?: 25 | 50 | 75 | 100;
  onClickAway: () => void;
  center?: boolean;

  offsetX?: number;
  offsetY?: number;

  // Use DropdownItem
  children?: JSX.Element | JSX.Element[];
}

export function Dropdown(props: Props) {
  // Ensure children are all DropdownItems
  const {
    isOpen,
    pull = 'right',
    style = 'default',
    opacity = 100,
    offsetX,
    offsetY,
    onClickAway,
    children,
  } = props;

  const ref = useRef(null);
  useClickAway(ref, onClickAway);

  return (
    <div className="relative z-50 w-full h-0">
      <div
        style={{
          width: 'max-content',
          marginLeft: offsetX ? `${offsetX}px` : 'unset',
          marginTop: offsetY ? `${offsetY}px` : '0.5rem',
        }}
        className={classNames(
          'absolute',
          'top-0',
          'z-50',
          isOpen ? 'block' : 'hidden',
          pull === 'right' && 'left-0',
          pull === 'left' && 'right-0',
          pull === 'center' && 'left-0 right-0',
        )}
      >
        <div
          ref={ref}
          style={{ filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.11))' }}
          className={classNames(
            'bg-white',
            'duration-300',
            'rounded-lg',
            'transform -translate-x-1/2',
            'overflow-hidden',
            'children:last:border-b-0',
            `bg-opacity-${opacity}`,
            style === 'default' && ['pt-2'],
            style === 'outline' && ['py-2', 'border-2', 'border-secondary'],
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
