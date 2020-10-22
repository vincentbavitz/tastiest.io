import classNames from 'classnames';
import React from 'react';

export interface Props {
  color?: 'primary' | 'secondary' | 'danger';
  type?: 'ghost' | 'solid';
  size?: 'small' | 'medium' | 'large';

  disabled?: boolean;
  selected?: boolean;
  onClick?(): any;
  children?: string;
  className?: string;

  // Icons
  prefix?: JSX.Element;
  suffix?: JSX.Element;

  wide?: boolean;
}

export function Button(props: Props) {
  const {
    color = 'primary',
    size = 'medium',
    type = 'solid',
    disabled = false,
    selected = false,
    onClick = () => null,
    children,
    className,
    prefix,
    suffix,
    wide = false,
  } = props;

  const clickHandler = (e: any) => {
    if (onClick) {
      e.stopPropagation();
      onClick();
    }
  };

  const onClickFn = disabled ? () => null : clickHandler;

  const ghostClassNames = [
    'bg-white',
    `hover:bg-${color}`,
    'bg-transparent',
    selected && `bg-white`,
    selected ? 'text-white' : `text-${color}`,
  ];

  const solidClassNames = [
    'text-white',
    `bg-${color}`,
    'hover:opacity-75',
    selected && 'bg-opacity-75',
  ];

  const off = disabled
    ? ['cursor-not-allowed', 'opacity-50']
    : ['cursor-pointer'];

  const fontSize =
    size === 'medium' ? 'text-base' : size === 'large' ? 'text-lg' : 'text-sm';

  // Make bg crop to text with tailwind on gradient
  // https://tailwindcss.com/docs/background-clip#class-reference

  return (
    <div
      className={classNames(
        'flex',
        'justify-center',
        'items-center',
        'px-4',
        'outline-none',
        'duration-300',
        'ease-in-out',
        'text-center',
        'text-lg',
        'rounded-lg',
        'font-raleway',
        'font-semibold',
        'border-2',
        'border-solid',
        `border-${color}`,
        off,
        fontSize,
        wide && 'tracking-widest',
        !disabled && 'hover:text-white',
        size === 'small' ? 'py-1' : 'py-3',
        type === 'ghost' && ghostClassNames,
        type === 'solid' && solidClassNames,
        className,
      )}
      role="button"
      tabIndex={-1}
      onClick={onClickFn}
    >
      {prefix && (
        <div className={classNames('flex', 'items-center', children && 'pr-2')}>
          {prefix}
        </div>
      )}
      {children}
      {suffix && (
        <div className={classNames('flex', 'items-center', children && 'pl-2')}>
          {suffix}
        </div>
      )}
    </div>
  );
}
