import classNames from 'classnames';

interface Props {
  text: string;
  selected: boolean;
}

export function MenuItem(props: Props) {
  return (
    <a
      href="#"
      className={classNames(
        'inline-block',
        'flex-1',
        'bg-yellow-500',
        'text-sm',
        'font-bold',
        'px-4',
        'py-2',
        'rounded-lg',
        'text-white',
        'border',
        'border-yellow-500',
        'border-opacity-0',
        'hover:border-opacity-100',
        'hover:bg-transparent',
        'hover:text-orange-400',
        'mt-4',
        'lg:mt-0',
      )}
    >
      {props.text}
    </a>
  );
}
