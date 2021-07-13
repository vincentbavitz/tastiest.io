import { Button, Input } from '@tastiest-io/tastiest-components';
import { UserIcon } from '@tastiest-io/tastiest-icons';
import { dlog, titleCase } from '@tastiest-io/tastiest-utils';
import { AuthError, AuthErrorCode, AuthErrorMessageMap } from 'contexts/auth';
import { useRegister } from 'hooks/auth/useRegister';
import { useScreenSize } from 'hooks/useScreenSize';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useToggle } from 'react-use';
import {
  CheckoutSignInTabSelected,
  setSignInTabSelected,
} from 'state/checkout';
import { InputEmail } from '../inputs/InputEmail';
import { InputPassword } from '../inputs/InputPassword';
import { SignInTosInfo } from '../SignInTosInfo';

export function CheckoutSignUp() {
  const { register, error: fetchError, submitting } = useRegister();

  const { isDesktop } = useScreenSize();
  const dispatch = useDispatch();

  const [signUpName, setSignUpName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword0, setSignUpPassword0] = useState('');
  const [signUpPassword1, setSignUpPassword1] = useState('');
  const [error, setError] = useState<AuthError | null>(null);

  // Sync local errors with fetchError
  useEffect(() => {
    if (fetchError) {
      setError(fetchError);
    }
  }, [fetchError]);

  const cleanupInputValue = (value: string | number) =>
    String(value).toLowerCase().trim();

  // TODO -> Abstract this away so it's not just copying SignUpModal
  const [showPassword, toggleShowPassword] = useToggle(false);

  const submit = async () => {
    if (signUpPassword0 !== signUpPassword1) {
      setError(AuthErrorMessageMap[AuthErrorCode.PASSWORDS_DO_NOT_MATCH]);
      return;
    }

    const { user } = await register(signUpEmail, signUpPassword0, signUpName);

    if (user?.uid) {
      // Track sign up from checkout
      window.analytics.track('User Signed Up', {
        userId: user.uid,
      });

      return;
    }
  };

  dlog('CheckoutSignUp ➡️ error:', error);

  return (
    <>
      <Input
        size="large"
        type="text"
        placeholder="First Name"
        prefix={<UserIcon className="w-6 fill-current text-primary" />}
        maxLength={20}
        value={signUpName}
        onValueChange={value => setSignUpName(titleCase(value ?? ''))}
      />
      <InputEmail
        value={signUpEmail}
        onValueChange={value => setSignUpEmail(cleanupInputValue(value))}
      />
      <InputPassword
        show={showPassword}
        toggleShow={toggleShowPassword}
        value={signUpPassword0}
        onValueChange={value => setSignUpPassword0(cleanupInputValue(value))}
      />
      <InputPassword
        placeholder="Re-type password"
        show={showPassword}
        toggleShow={toggleShowPassword}
        value={signUpPassword1}
        onValueChange={value => setSignUpPassword1(cleanupInputValue(value))}
      />

      {error && (
        <div className="mb-1 -mt-1 text-sm text-center text-danger">
          {error.userFacingMessage}
        </div>
      )}

      {!isDesktop && (
        <div className="flex justify-center">
          Already have an account?
          <a
            className="ml-1 font-semibold cursor-pointer"
            onClick={() =>
              dispatch(
                setSignInTabSelected(CheckoutSignInTabSelected.HAS_ACCOUNT),
              )
            }
          >
            Sign in
          </a>
        </div>
      )}

      <div className="flex justify-center">
        <div
          style={{
            maxWidth: '20rem',
          }}
        >
          <SignInTosInfo center />
        </div>
      </div>

      <Button
        wide
        size="large"
        type="solid"
        color="primary"
        loading={submitting}
        onClick={submit}
      >
        Sign up to Proceed to Checkout
      </Button>

      {error && (
        <div className="mb-1 -mt-1 text-sm text-center text-red-700">
          {
            AuthErrorMessageMap[((error as unknown) as AuthError).code]
              ?.userFacingMessage
          }
        </div>
      )}
    </>
  );
}
