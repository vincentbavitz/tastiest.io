interface ITab {
  label: string;
  onClick: () => void;
}

interface Props {
  tabs: ITab[];
}

export function CheckoutSignInTabs({ tabs }: Props) {
  return (
    <div className="flex space-x-10 px-6 border-b-4 border-secondary">
      {tabs?.map(tab => (
        <div
          key={tab.label}
          onClick={tab.onClick}
          className="flex justify-center w-5/12 bg-secondary-2 rounded-t-xl px-3 pt-2 pb-1"
        >
          <span
            style={{ fontSize: 'min(1rem, 2vw)' }}
            className="font-semibold"
          >
            {tab.label}
          </span>
        </div>
      ))}
    </div>
  );
}
