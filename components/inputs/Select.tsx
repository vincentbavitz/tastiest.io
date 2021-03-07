import TriangleSVG from '@svg/triangle.svg';
import classNames from 'classnames';
import React from 'react';

export type SelectOption = React.DetailedHTMLProps<
  React.OptionHTMLAttributes<HTMLOptionElement>,
  HTMLOptionElement
>;

interface Props {
  label?: string;
  noDefault?: boolean;
  defaultSelected?: boolean;
  // The text shown with noDefault. Else it's an empty box
  promptText?: string;
  children: SelectOption | SelectOption[];
  onChange?: (value: string) => void;
  size?: 'small' | 'medium';
}

// eslint-disable-next-line react/display-name
export const Select = (props: Props) => {
  const {
    children,
    noDefault,
    defaultSelected,
    promptText,
    label,
    size = 'medium',
  } = props;

  return (
    <label className="relative block w-full">
      {label && <span className="text-gray-700">{label}</span>}
      <div
        // style={{ width: 'min-content' }}
        className="relative flex items-center"
      >
        <select
          className={classNames(
            'block w-full pl-2 tracking-wider bg-transparent border-2 rounded-lg outline-none appearance-none border-secondary center',
            size === 'small' && 'py-1 text-sm pr-2',
            size === 'medium' && 'py-2 pr-10',
          )}
          onChange={event => props?.onChange?.(event?.target?.value)}
        >
          {noDefault && (
            <option disabled selected={defaultSelected}>
              {promptText ?? null}
            </option>
          )}
          {children}
        </select>
        <TriangleSVG
          className={classNames(
            'absolute right-0 z-0 transform rotate-90 fill-current text-secondary',
            size === 'small' && 'h-3 mr-2',
            size === 'medium' && 'h-4 mr-4',
          )}
        />
      </div>
    </label>
  );
};
