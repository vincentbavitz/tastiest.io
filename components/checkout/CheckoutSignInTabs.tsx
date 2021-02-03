import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { setSignInTabSelected } from '../../state/checkout';
import { IState } from '../../state/reducers';
import { CheckoutSignInTabSelected } from '../../types/checkout';

interface ITab {
  label: string;
  selected?: boolean;
  onClick: () => void;
}

export function CheckoutSignInTabs() {
  const {
    flow: { signInTabSelected },
  } = useSelector((state: IState) => state.checkout);
  const disaptch = useDispatch();

  const tabs: ITab[] = [
    {
      label: 'I have an account',
      selected: signInTabSelected === CheckoutSignInTabSelected.HAS_ACCOUNT,
      onClick: () =>
        disaptch(setSignInTabSelected(CheckoutSignInTabSelected.HAS_ACCOUNT)),
    },
    {
      label: "I'm new here",
      selected: signInTabSelected === CheckoutSignInTabSelected.NEW_USER,
      onClick: () =>
        disaptch(setSignInTabSelected(CheckoutSignInTabSelected.NEW_USER)),
    },
  ];

  return (
    <div className="flex justify-center px-6 space-x-10 border-b-4 border-secondary">
      {tabs?.map(tab => (
        <div
          key={tab.label}
          onClick={tab.onClick}
          className={classNames(
            'flex justify-center w-5/12 rounded-t-xl px-3 pt-2 pb-1 cursor-pointer',
            tab.selected ? 'bg-secondary' : 'bg-secondary-2',
          )}
        >
          <span
            style={{ fontSize: 'min(1rem, 2vw)' }}
            className="px-2 font-semibold"
          >
            {tab.label}
          </span>
        </div>
      ))}
    </div>
  );
}
