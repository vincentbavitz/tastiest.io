import { Button, Input } from '@tastiest-io/tastiest-components';
import { EmailIcon } from '@tastiest-io/tastiest-icons';
import { useResetPassword } from 'hooks/auth/useResetPassword';
import React, { useState } from 'react';
import { cleanupInputValue } from 'utils/text';
import { ContentElementProps, LoginFlowStep } from './AuthModal';
import { ContentError } from './AuthModalContentError';
import { ContentSubtext } from './AuthModalContentSubtext';
import { AuthModalWrapper } from './AuthModalWrapper';

export const AuthModalResetPasswordContent = ({
  setStep,
}: ContentElementProps) => {
  const [email, setEmail] = useState('');
  const { resetPassword } = useResetPassword();

  const onClickResetPassword = async () => {
    const resetPasswordSuccessful = await resetPassword(email);
    setResetPasswordSuccess(resetPasswordSuccessful);
  };

  const [resetPasswordSuccess, setResetPasswordSuccess] = useState(null);
  const error = null;

  // Reset password success message when moving between steps
  // useEffect(() => {
  // setResetPasswordSuccess(null);
  // }, [step]);

  return (
    <AuthModalWrapper
      title="Reset your password"
      subtitle="Forgot your password? No worries."
    >
      <Input
        size="large"
        type="email"
        className="py-2"
        placeholder="Email address"
        prefix={<EmailIcon className="w-8 h-8 fill-current text-primary" />}
        value={email}
        onValueChange={value => setEmail(cleanupInputValue(value))}
      ></Input>

      <Button
        wide
        size="large"
        type="solid"
        color="primary"
        className="py-3"
        onClick={onClickResetPassword}
      >
        Reset
      </Button>

      <ContentError error={error} />

      {!error && resetPasswordSuccess && (
        <div className="mb-1 -mt-1 text-sm text-center">
          We've sent you an email with instructions to reset your password.
        </div>
      )}

      <ContentSubtext>
        <p>
          Found your account?{' '}
          <a
            className="font-semibold cursor-pointer hover:underline"
            onClick={() => setStep(LoginFlowStep.SIGN_IN)}
          >
            Sign In
          </a>
        </p>
        <p>
          Otherwise, you can sign up{' '}
          <a
            className="font-semibold cursor-pointer hover:underline"
            onClick={() => setStep(LoginFlowStep.REGISTER)}
          >
            here
          </a>
          .
        </p>
      </ContentSubtext>
    </AuthModalWrapper>
  );
};
