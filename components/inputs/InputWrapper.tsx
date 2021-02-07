import classNames from 'classnames';
import { ReactNode } from 'react';

export interface Props {
  size?: 'large' | 'medium' | 'small';
  border?: 'primary' | 'secondary' | 'none';

  // Sublabel can be used as a subtle descriptor to the right of label
  disabled?: boolean;
  hasFocus?: boolean;
  className?: string;
  label?: string;
  subLabel?: string;
  prefix?: JSX.Element;
  suffix?: JSX.Element;
  externalSuffix?: JSX.Element;

  children: ReactNode;
}

// This wraps any <input> with Tastiest branding
// originally created for Stripe inputs.
export function InputWrapper(props: Props) {
  const {
    size = 'medium',
    border = 'secondary',
    prefix,
    label,
    suffix,
    hasFocus,
    className,
    disabled,
    externalSuffix,
    children,
  } = props;

  return (
    <div className="w-full">
      {label && (
        <div
          className={classNames(
            'mb-1',
            size === 'small' ? 'text-sm' : 'text-base',
          )}
        >
          {label}
        </div>
      )}

      <div className="flex items-center space-x-3">
        <div
          className={classNames(
            'flex',
            'items-center',
            'appearance-none',
            'w-full',
            // 'bg-white',
            'text-gray-700',
            'leading-tight',
            'outline-black',
            'outline-secondary',
            'focus:outline-black',
            'duration-300',
            border !== 'none' && 'border-2',
            disabled && 'opacity-50 cursor-not-allowed',
            border === 'primary' && 'border-primary',
            border === 'secondary' && hasFocus
              ? `border-primary`
              : 'border-secondary',
            size === 'small' ? 'px-2' : 'px-4',
            size === 'large' ? 'rounded-xl' : 'rounded-lg',
            className,
          )}
        >
          {prefix && (
            <span
              className={classNames(
                `text-black`,
                'flex',
                'items-center',
                'pr-4',
              )}
            >
              {prefix}
            </span>
          )}

          {children}

          {suffix && (
            <span
              className={classNames(
                `text-primary`,
                'flex',
                'items-center',
                'pl-4',
              )}
            >
              {suffix}
            </span>
          )}
        </div>

        {externalSuffix}
      </div>
    </div>
  );
}
