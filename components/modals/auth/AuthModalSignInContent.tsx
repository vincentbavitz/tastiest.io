import { EmailIcon, LockIcon } from '@tastiest-io/tastiest-icons';
import { Button, Input, Tooltip } from '@tastiest-io/tastiest-ui';
import { AuthError } from 'contexts/auth';
import { useAuth } from 'hooks/auth/useAuth';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { cleanupInputValue } from 'utils/text';
import { REGEX } from '../../../constants';
import { AuthFlowStep, ContentElementProps } from './AuthModal';
import { ContentSubtext } from './AuthModalContentSubtext';
import { AuthModalWrapper } from './AuthModalWrapper';

type SignInFormData = {
  email: string;
  password: string;
};

export const AuthModalSignInContent = ({ setStep }: ContentElementProps) => {
  const { signIn, isSigningIn } = useAuth();
  const [error, setError] = useState<AuthError | null>(null);

  const { handleSubmit, control } = useForm<SignInFormData>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    criteriaMode: 'firstError',
    shouldFocusError: true,
  });

  const onClickSignIn = handleSubmit(({ email, password }) => {
    signIn(email, password).then(({ error }) => {
      setError(error);
    });
  });

  return (
    <AuthModalWrapper
      title="Welcome Back!"
      subtitle="Sign in to your account here."
    >
      <Controller
        control={control}
        defaultValue=""
        name="email"
        rules={{
          required: {
            value: true,
            message: 'Please enter your email',
          },
          pattern: {
            value: REGEX.EMAIL,
            message: 'Please enter a valid email address',
          },
        }}
        render={({ field, formState }) => (
          <Input
            type="text"
            label="Email"
            prefix={
              <EmailIcon className="w-full h-full fill-current text-primary" />
            }
            error={formState.errors.email?.message}
            value={field.value}
            {...field}
            onChange={e =>
              field.onChange(cleanupInputValue(e.target.value, true))
            }
          ></Input>
        )}
      />

      <Controller
        control={control}
        defaultValue=""
        name="password"
        rules={{
          required: {
            value: true,
            message: 'Please enter your password',
          },
        }}
        render={({ field, formState }) => (
          <Input
            type="password"
            label="Password"
            prefix={
              <LockIcon className="w-full h-full fill-current text-primary" />
            }
            error={formState.errors.password?.message}
            {...field}
          ></Input>
        )}
      />

      <Tooltip
        show={Boolean(error)}
        trigger="manual"
        placement="bottom"
        hideDelay={2500}
        resetHideDeps={[error]}
        content={
          <div style={{ maxWidth: '260px' }}>
            {error?.userFacingMessage ?? error?.message}
          </div>
        }
      >
        <Button wide size="large" loading={isSigningIn} onClick={onClickSignIn}>
          Sign In
        </Button>
      </Tooltip>

      <ContentSubtext>
        <p>
          Forgot password?{' '}
          <a
            className="font-semibold cursor-pointer"
            onClick={() => setStep(AuthFlowStep.RESET_PASSWORD)}
          >
            Reset
          </a>
        </p>
        <p>
          Don't have an account?{' '}
          <a
            className="font-semibold cursor-pointer"
            onClick={() => setStep(AuthFlowStep.REGISTER)}
          >
            Sign Up
          </a>
        </p>
      </ContentSubtext>
    </AuthModalWrapper>
  );
};
