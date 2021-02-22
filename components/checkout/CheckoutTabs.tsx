import classNames from 'classnames';

export interface ITab {
  label: string;
  selected?: boolean;
  onClick?: () => void;
}

export function CheckoutTabs({ tabs }: { tabs: ITab[] }) {
  return (
    <div
      className={classNames(
        'flex space-x-10 border-b-4 border-secondary mb-6',
        tabs.length === 1 ? 'justify-start' : 'justify-center px-6',
      )}
    >
      {tabs?.map(tab => (
        <div
          key={tab.label}
          onClick={tab?.onClick}
          style={{
            marginBottom: '0px',
          }}
          className={classNames(
            'flex justify-center w-5/12 rounded-t-xl px-3 pt-2 pb-1',
            tabs.length === 1 || tab.selected
              ? 'bg-secondary'
              : 'bg-secondary-2',
            tabs.length > 1 && 'cursor-pointer',
          )}
        >
          <span
            style={{ fontSize: 'min(0.9rem, 2vw)' }}
            className="px-2 font-medium"
          >
            {tab.label}
          </span>
        </div>
      ))}
    </div>
  );
}
