import { Button } from '@tastiest-io/tastiest-ui';
import { AuthError, AuthErrorMessageMap } from 'contexts/auth';
import { useAuth } from 'hooks/auth/useAuth';
import { useScreenSize } from 'hooks/useScreenSize';
import React, { useContext, useState } from 'react';
import { useToggle } from 'react-use';
import { cleanupInputValue } from 'utils/text';
import { InputEmail } from '../inputs/InputEmail';
import { InputPassword } from '../inputs/InputPassword';
import { AuthTabsContext, CheckoutSignInTabSelected } from './CheckoutAuthTabs';

export function CheckoutSignIn() {
  const { signIn, isSigningIn } = useAuth();
  const [error, setError] = useState<AuthError | null>(null);

  const { setTab } = useContext(AuthTabsContext);

  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [showPassword, toggleShowPassword] = useToggle(false);

  const { isDesktop } = useScreenSize();

  const submitSignIn = async () => {
    signIn(signInEmail, signInPassword).then(({ error }) => setError(error));
  };

  return (
    <>
      <InputEmail
        value={signInEmail}
        onValueChange={value => setSignInEmail(cleanupInputValue(value, true))}
      />
      <InputPassword
        show={showPassword}
        toggleShow={toggleShowPassword}
        value={signInPassword}
        onValueChange={value => setSignInPassword(cleanupInputValue(value))}
      />
      <Button
        wide
        size="large"
        type="solid"
        color="primary"
        loading={isSigningIn}
        onClick={submitSignIn}
      >
        Sign in to Proceed to Checkout
      </Button>

      {error && (
        <div className="mb-1 -mt-1 text-sm text-center text-secondary">
          {AuthErrorMessageMap[((error as unknown) as AuthError).code]
            ?.userFacingMessage ?? String(error)}
        </div>
      )}

      {!isDesktop && (
        <div className="flex justify-center">
          Don't have an account?
          <a
            className="ml-1 font-semibold cursor-pointer"
            onClick={() => setTab(CheckoutSignInTabSelected.NEW_USER)}
          >
            Sign Up
          </a>
        </div>
      )}
    </>
  );
}
