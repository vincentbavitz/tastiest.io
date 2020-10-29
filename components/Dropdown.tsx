import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

interface Props {
  isOpen: boolean;
  children?: JSX.Element | JSX.Element[];
}

export function Dropdown(props: Props) {
  // Ensure children are all DropdownItems
  const { isOpen, children } = props;

  const [isHidden, setIsHidden] = useState(!isOpen);

  // Disappear when not open
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setIsHidden(true);
      }, 280);
    } else {
      setIsHidden(false);
    }
  }, [isOpen]);

  return (
    <div className="relative w-full h-0 z-50">
      <div
        className={classNames(
          'absolute',
          'top-0',
          'overflow-y-hidden',
          // Allows shadow to overflow
          '-left-4',
          '-right-4',
          'px-4',
          'pb-4',
          isHidden && 'hidden',
        )}
      >
        <div
          className={classNames(
            'bg-white',
            'duration-300',
            'rounded-b-lg',
            'transform',
            'overflow-hidden',
            isOpen && 'shadow-lg',
            isOpen ? 'translate-y-0' : '-translate-y-full',
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
