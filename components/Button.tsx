import classNames from 'classnames';
import React from 'react';

export interface Props {
  type?: 'primary' | 'secondary' | 'danger' | 'subtle' | 'gradient';
  size?: 'small' | 'medium' | 'large';

  // shape?: 'default' | 'circle';
  ghost?: boolean;
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
    type = 'primary',
    size = 'medium',
    ghost = false,
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

  const background =
    type === 'gradient'
      ? [
          'bg-gradient-to-br',
          !disabled && 'hover:from-primary',
          !disabled && 'hover:to-secondary',
          selected ? 'from-primary' : 'from-white',
          selected ? 'to-secondary' : 'to-white',
        ]
      : [
          selected ? `bg-${type}` : ghost ? 'bg-white' : 'bg-gray-100',
          !disabled && `hover:bg-${type}`,
        ];

  const outline = ghost
    ? ['border-solid', 'border-2', 'bg-transparent', `border-${type}`]
    : ['border-none'];

  const off = disabled
    ? ['cursor-not-allowed', 'opacity-50']
    : ['cursor-pointer'];

  const text = selected ? [`text-white`] : [`text-${type}`];

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
        'py-2',
        'outline-none',
        'duration-300',
        'ease-in-out',
        'text-center',
        'rounded-md',
        'uppercase',
        'font-raleway',
        'font-semibold',
        fontSize,
        wide && 'tracking-widest',
        !disabled && 'hover:text-white',
        off,
        text,
        outline,
        background,
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
