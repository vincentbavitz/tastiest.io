import TabbedContent from 'components/TabbedContent';
import React, { useContext, useState } from 'react';
import { CheckoutSignIn } from './CheckoutSignIn';
import { CheckoutSignUp } from './CheckoutSignUp';

export enum CheckoutSignInTabSelected {
  HAS_ACCOUNT = 'HAS_ACCOUNT',
  NEW_USER = 'NEW_USER',
}

export const AuthTabsContext = React.createContext(undefined);
export const AuthTabsProvider = ({ children }) => {
  const [tab, setTab] = useState(CheckoutSignInTabSelected.NEW_USER);

  return (
    <AuthTabsContext.Provider value={{ tab, setTab }}>
      {children}
    </AuthTabsContext.Provider>
  );
};

export function CheckoutAuthTabs() {
  const { tab, setTab } = useContext(AuthTabsContext);

  return (
    <TabbedContent
      manualSelected={tab}
      setManualSelected={value => setTab(value as CheckoutSignInTabSelected)}
    >
      {[
        {
          id: CheckoutSignInTabSelected.HAS_ACCOUNT,
          label: 'I have an account',
          content: (
            <div className="flex flex-col space-y-4">
              <CheckoutSignIn />
            </div>
          ),
        },
        {
          id: CheckoutSignInTabSelected.NEW_USER,
          label: "I'm new here",
          content: (
            <div className="flex flex-col space-y-4">
              <CheckoutSignUp />
            </div>
          ),
        },
      ]}
    </TabbedContent>
  );
}
