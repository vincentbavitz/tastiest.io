import { Button } from '@tastiest-io/tastiest-ui';
import { AuthError, AuthErrorMessageMap } from 'contexts/auth';
import { useSignIn } from 'hooks/auth/useSignIn';
import { useScreenSize } from 'hooks/useScreenSize';
import React, { useContext, useState } from 'react';
import { useToggle } from 'react-use';
import { InputEmail } from '../inputs/InputEmail';
import { InputPassword } from '../inputs/InputPassword';
import { AuthTabsContext, CheckoutSignInTabSelected } from './CheckoutAuthTabs';

export function CheckoutSignIn() {
  const { isDesktop } = useScreenSize();

  const { signIn, error } = useSignIn();
  const { setTab } = useContext(AuthTabsContext);

  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [showPassword, toggleShowPassword] = useToggle(false);
  const [submitting, setSubmitting] = useState(false);

  const cleanupInputValue = (value: string | number) =>
    String(value).toLowerCase().trim();

  const submitSignIn = async () => {
    setSubmitting(true);

    try {
      await signIn(signInEmail, signInPassword);
    } catch {
      setSubmitting(false);
    }
  };

  return (
    <>
      <InputEmail
        value={signInEmail}
        onValueChange={value => setSignInEmail(cleanupInputValue(value))}
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
        loading={submitting}
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
