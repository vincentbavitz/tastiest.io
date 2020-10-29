import classNames from 'classnames';

// Simplest use is to define your options and map over them to product JSX and your desired onSelect; eg:
// options?.map(option => <DropdownItem onSelect={() => setDropdownItem(option.key)})}</Dropdown>
interface Props {
  id: string;
  selected?: boolean;
  children: JSX.Element | JSX.Element[] | string;
  onSelect?(): void;
}

export function DropdownItem(props: Props) {
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
        'px-4',
        'py-2',
        'text-gray-800',
        !selected && 'hover:bg-gray-200',
        selected && 'bg-gray-300',
        'select-none',
      )}
    >
      {children}
    </div>
  );
}
