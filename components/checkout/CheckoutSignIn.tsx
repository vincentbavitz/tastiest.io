import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ScreenContext } from '../../contexts/screen';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../Button';
import { InputEmail } from '../inputs/InputEmail';
import { InputPassword } from '../inputs/InputPassword';

export function CheckoutSignIn() {
  const { signIn, signUp, resetPassword, isSignedIn, error } = useAuth();
  const { isMobile } = useContext(ScreenContext);
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
        className="rounded-xl py-3"
        onClick={() => signIn(signInEmail, signInPassword)}
      >
        Sign In
      </Button>

      {error && (
        <div className="text-sm text-center mb-1 -mt-1 text-red-700">
          {error?.message}
        </div>
      )}
    </>
  );
}
