import TriangleSVG from '@svg/triangle.svg';
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
}

// eslint-disable-next-line react/display-name
export const Select = (props: Props) => {
  const { children, noDefault, defaultSelected, promptText, label } = props;

  return (
    <label className="relative block w-full">
      {label && <span className="text-gray-700">{label}</span>}
      <div
        // style={{ width: 'min-content' }}
        className="relative flex items-center"
      >
        <select
          className="block w-full py-2 pl-2 pr-10 tracking-wider bg-transparent border-2 rounded-lg outline-none appearance-none border-secondary center"
          onChange={event => props?.onChange?.(event?.target?.value)}
        >
          {noDefault && (
            <option disabled selected={defaultSelected}>
              {promptText ?? null}
            </option>
          )}
          {children}
        </select>
        <TriangleSVG className="absolute right-0 z-0 h-4 mr-4 transform rotate-90 fill-current text-secondary" />
      </div>
    </label>
  );
};
