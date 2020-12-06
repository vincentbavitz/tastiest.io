import classNames from 'classnames';
import React from 'react';

export interface Props {
  color?: 'primary' | 'secondary' | 'danger';
  type?: 'text' | 'ghost' | 'solid';
  size?: 'tiny' | 'small' | 'medium' | 'large';

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
      e?.stopPropagation && e?.stopPropagation();
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

  const textTypeClassNames = [`text-${color}`, 'hover:opacity-75'];

  const off = disabled
    ? ['cursor-not-allowed', 'opacity-50']
    : ['cursor-pointer'];

  const sizeStyles = [
    size === 'large' && 'text-lg',
    size === 'medium' && 'text-base',
    size === 'small' && 'text-sm',
    size === 'tiny' && 'text-xs',
  ];

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
        'rounded-lg',
        'font-raleway',
        'font-semibold',
        off,
        sizeStyles,
        wide && 'tracking-widest',
        !disabled && type !== 'text' && 'hover:text-white',
        size === 'small' ? 'py-1' : 'py-3',
        type === 'ghost' && ghostClassNames,
        type === 'solid' && solidClassNames,
        type === 'text' && textTypeClassNames,
        type !== 'text' && ['border-2', 'border-solid', `border-${color}`],
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
