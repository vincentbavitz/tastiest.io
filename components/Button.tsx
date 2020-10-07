import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useWindowScroll, useWindowSize } from 'react-use';

interface Props {
  onClick?(): void;
  children: string | JSX.Element;
}

export function Button(props: Props) {
  const { children, onClick } = props;

  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const { y } = useWindowScroll();
  const { height } = useWindowSize();

  const scrollOffset = 0.25 * height;

  useEffect(() => {
    console.log(height);

    if (y > scrollOffset && isButtonVisible === false) {
      setIsButtonVisible(true);
    } else if (y <= scrollOffset && isButtonVisible === true) {
      setIsButtonVisible(false);
    }
  }, [y]);

  return (
    <div
      //   style={{
      //     transform: isButtonVisible ? 'translateY(0px)' : 'translateY(50px)',
      //     transition: 'transform 2s ease-in-out',
      //   }}
      className={classNames(
        'fixed',
        'bottom-0',
        'z-50',
        'left-0',
        'right-0',
        'text-center',
        'm-3',
        isButtonVisible ? 'mb-10' : '-mb-20',
      )}
    >
      <div
        role="button"
        className={classNames(
          'bg-primary',
          'text-sm',
          'text-secondary',
          'font-somantic',
          'px-4',
          'py-2',
          'w-full',
          'select-none',
          'rounded-lg',
        )}
      >
        {children}
      </div>
    </div>
  );
}
