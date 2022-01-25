import { UserIcon } from '@tastiest-io/tastiest-icons';
import { Button, Input } from '@tastiest-io/tastiest-ui';
import { dlog, titleCase } from '@tastiest-io/tastiest-utils';
import { AuthError, AuthErrorCode, AuthErrorMessageMap } from 'contexts/auth';
import { useRegister } from 'hooks/auth/useRegister';
import { useScreenSize } from 'hooks/useScreenSize';
import { useTrack } from 'hooks/useTrack';
import React, { useContext, useEffect, useState } from 'react';
import { useToggle } from 'react-use';
import { cleanupInputValue } from 'utils/text';
import { InputEmail } from '../inputs/InputEmail';
import { InputPassword } from '../inputs/InputPassword';
import { SignInTosInfo } from '../SignInTosInfo';
import { AuthTabsContext, CheckoutSignInTabSelected } from './CheckoutAuthTabs';

export function CheckoutSignUp() {
  const { track } = useTrack();
  const { register, error: fetchError, submitting } = useRegister();

  const { isDesktop } = useScreenSize();
  const { setTab } = useContext(AuthTabsContext);

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
      track('User Signed Up', {
        ...user,
      });

      return;
    }
  };

  dlog('CheckoutSignUp ➡️ error:', error);

  return (
    <>
      <Input
        type="text"
        label="First Name"
        prefix={<UserIcon className="w-8 h-6 fill-current text-primary" />}
        maxLength={20}
        value={signUpName}
        onValueChange={value => setSignUpName(titleCase(value ?? ''))}
      />
      <InputEmail
        value={signUpEmail}
        onValueChange={value => setSignUpEmail(cleanupInputValue(value, true))}
      />
      <InputPassword
        show={showPassword}
        toggleShow={toggleShowPassword}
        value={signUpPassword0}
        onValueChange={value => setSignUpPassword0(cleanupInputValue(value))}
      />
      <InputPassword
        label="Re-type password"
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
            onClick={() => setTab(CheckoutSignInTabSelected.HAS_ACCOUNT)}
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
    </>
  );
}
