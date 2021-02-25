import classNames from 'classnames';
import React from 'react';

export interface Props {
  color?: 'black' | 'primary' | 'secondary' | 'danger';
  type?: 'text' | 'ghost' | 'solid' | 'outline';
  size?: 'tiny' | 'small' | 'medium' | 'large';
  round?: boolean;

  // Is touch friendly
  touch?: boolean;

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
    round = false,
    touch,
    onClick,
    children,
    className,
    prefix,
    suffix,
    wide = false,
  } = props;

  const clickHandler = (e: React.MouseEvent) => {
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

  const outlineClassNames = ['rounded-xl py-2 hover:underline'];
  const textTypeClassNames = [`text-${color}`, 'hover:opacity-75'];

  const off = disabled
    ? ['cursor-not-allowed', 'opacity-50']
    : ['cursor-pointer'];

  // Conditional isDesktop makes buttons more touch friendly
  // with more padding
  const sizeStyles = [
    size === 'large' && 'text-lg py-2',
    size === 'medium' && 'text-base py-1',
    size === 'small' && ['text-sm', touch ? 'py-1' : 'py-0'],
    size === 'tiny' && 'text-xs py-0',
  ];

  // Make bg crop to text with tailwind on gradient
  // https://tailwindcss.com/docs/background-clip#class-reference

  // prettier-ignore
  const typeStyles = 
    type === 'ghost' ? ghostClassNames :
    type === 'solid' ? solidClassNames :
    type === 'text' ? textTypeClassNames :
    type === 'outline' ? outlineClassNames :
    '';

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
        'font-raleway',
        'font-semibold',
        off,
        sizeStyles,
        typeStyles,
        wide && 'tracking-widest',
        !disabled &&
          type !== 'text' &&
          type !== 'outline' &&
          'hover:text-white',
        round ? 'rounded-xl' : 'rounded-lg',
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
