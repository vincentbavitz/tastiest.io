import classNames from 'classnames';
import React, { useRef } from 'react';
import { useClickAway } from 'react-use';

interface Props {
  isOpen: boolean;
  pull?: 'left' | 'right';

  onClickAway: () => void;

  // Always use DropdownItem
  children?: JSX.Element[];
}

export function Dropdown(props: Props) {
  // Ensure children are all DropdownItems
  const { isOpen, pull = 'right', onClickAway, children } = props;

  const ref = useRef(null);
  useClickAway(ref, onClickAway);

  return (
    <div className="relative w-full h-0 z-50">
      <div
        style={{ width: 'max-content' }}
        className={classNames(
          'absolute',
          'top-0',
          'z-50',
          'mt-2',
          isOpen ? 'block' : 'hidden',
          pull === 'right' && 'left-0',
          pull === 'left' && 'right-0',
        )}
      >
        <div
          ref={ref}
          className={classNames(
            'py-2',
            'bg-white',
            'duration-300',
            'rounded-lg',
            'transform',
            'overflow-hidden',
            'border-2',
            'border-secondary',
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
