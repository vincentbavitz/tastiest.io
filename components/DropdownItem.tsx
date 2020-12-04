import classNames from 'classnames';

// Simplest use is to define your options and map over them to product JSX and your desired onSelect; eg:
// options?.map(option => <DropdownItem onSelect={() => setDropdownItem(option.key)})}</Dropdown>
export interface DropdownItemProps {
  id: string;
  selected?: boolean;
  onSelect?(): void;
  children: JSX.Element | JSX.Element[] | string;
}

export type TDropdownItem = React.FC<DropdownItemProps>;

export const DropdownItem: TDropdownItem = (props: DropdownItemProps) => {
  const { id, children, onSelect, selected = false } = props;

  const handleOnSelect = () => {
    if (onSelect) {
      onSelect();
    }
  };

  return (
    <div
      onClick={() => handleOnSelect()}
      className={classNames(
        'block',
        'pl-4',
        'pr-6',
        'py-1',
        'text-sm',
        'text-primary',
        'text-opacity-75',
        'hover:text-opacity-100',
        'select-none',
        'cursor-pointer',
        selected && 'font-bold text-opacity-100',
      )}
    >
      {children}
    </div>
  );
};
