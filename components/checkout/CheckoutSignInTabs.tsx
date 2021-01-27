import classNames from 'classnames';

interface ITab {
  label: string;
  selected?: boolean;
  onClick: () => void;
}

interface Props {
  tabs: ITab[];
}

export function CheckoutSignInTabs({ tabs }: Props) {
  return (
    <div className="flex space-x-10 justify-center px-6 border-b-4 border-secondary">
      {tabs?.map(tab => (
        <div
          key={tab.label}
          onClick={tab.onClick}
          className={classNames(
            'flex justify-center w-5/12 rounded-t-xl px-3 pt-2 pb-1',
            tab.selected ? 'bg-secondary' : 'bg-secondary-2',
          )}
        >
          <span
            style={{ fontSize: 'min(1rem, 2vw)' }}
            className="font-semibold px-2"
          >
            {tab.label}
          </span>
        </div>
      ))}
    </div>
  );
}
