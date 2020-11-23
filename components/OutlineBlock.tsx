import classNames from 'classnames';

interface Props {
  size?: 'small' | 'medium' | 'large';
  children: string;
}

export function OutlineBlock(props: Props) {
  const { children, size = 'medium' } = props;

  return (
    <div
      className={classNames(
        'border-2 border-secondary rounded-lg px-3',
        size === 'small' && 'py-1 text-sm',
        size === 'medium' && 'py-2',
        size === 'large' && 'py-3 text-lg',
      )}
    >
      <span className="text-primary">{children}</span>
    </div>
  );
}
