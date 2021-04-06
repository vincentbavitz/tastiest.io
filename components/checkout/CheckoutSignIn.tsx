import { Button } from '@tastiest-io/tastiest-components';
import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSignInTabSelected } from 'state/checkout';
import { CheckoutSignInTabSelected } from 'types/checkout';
import { ScreenContext } from '../../contexts/screen';
import { useAuth } from '../../hooks/useAuth';
import { InputEmail } from '../inputs/InputEmail';
import { InputPassword } from '../inputs/InputPassword';

export function CheckoutSignIn() {
  const { isDesktop } = useContext(ScreenContext);

  const { signIn, error } = useAuth();
  const dispatch = useDispatch();

  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const cleanupInputValue = (value: string | number) =>
    String(value).toLowerCase().trim();

  // TODO -> Abstract this away so it's not just copying SignInModal

  return (
    <>
      <InputEmail
        value={signInEmail}
        onValueChange={value => setSignInEmail(cleanupInputValue(value))}
      />
      <InputPassword
        value={signInPassword}
        onValueChange={value => setSignInPassword(cleanupInputValue(value))}
      />
      <Button
        wide
        size="large"
        type="solid"
        color="primary"
        onClick={() => signIn(signInEmail, signInPassword)}
      >
        Sign in to Proceed to Checkout
      </Button>

      {!isDesktop && (
        <div className="flex justify-center">
          Don't have an account?
          <a
            className="ml-1 font-semibold cursor-pointer"
            onClick={() =>
              dispatch(setSignInTabSelected(CheckoutSignInTabSelected.NEW_USER))
            }
          >
            Sign Up
          </a>
        </div>
      )}
    </>
  );
}
