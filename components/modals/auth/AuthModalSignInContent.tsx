import { LoadingOutlined } from '@ant-design/icons';
import { Button, Input } from '@tastiest-io/tastiest-components';
import { EmailIcon, LockIcon } from '@tastiest-io/tastiest-icons';
import { dlog } from '@tastiest-io/tastiest-utils';
import { useSignIn } from 'hooks/auth/useSignIn';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { cleanupInputValue } from 'utils/text';
import { ContentElementProps, LoginFlowStep } from './AuthModal';
import { ContentError } from './AuthModalContentError';
import { ContentSubtext } from './AuthModalContentSubtext';
import { AuthModalWrapper } from './AuthModalWrapper';

type SignInFormData = {
  email: string;
  password: string;
};

export const AuthModalSignInContent = ({ setStep }: ContentElementProps) => {
  const { signIn, error, submitting } = useSignIn();

  const { handleSubmit, control } = useForm<SignInFormData>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    criteriaMode: 'firstError',
    shouldFocusError: true,
  });

  const onClickSignIn = handleSubmit(({ email, password }) => {
    signIn(email, password);
  });

  dlog('AuthModal ➡️ error:', error);

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
            value: /^[\w]{1,30}@[\w\-_]{1,30}\.[a-zA-Z]{2,10}(\.[a-zA-Z]{2,10})?$/,
            message: 'Please enter a valid email address',
          },
        }}
        render={({ field, formState }) => (
          <Input
            {...field}
            size="large"
            type="text"
            className="py-2"
            placeholder="Email"
            prefix={<EmailIcon className="w-8 h-8 fill-current text-primary" />}
            error={formState.errors.email?.message}
            onChange={e => field.onChange(cleanupInputValue(e.target.value))}
            value={field.value}
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
            {...field}
            size="large"
            type="password"
            className="py-2"
            placeholder="Password"
            prefix={<LockIcon className="w-8 h-8 fill-current text-primary" />}
            error={formState.errors.password?.message}
          ></Input>
        )}
      />

      <Button
        wide
        size="large"
        type="solid"
        color="primary"
        onClick={onClickSignIn}
      >
        <>
          {submitting ? <LoadingOutlined className="text-3xl" /> : <>Sign In</>}
        </>
      </Button>

      <ContentError error={error} />

      <ContentSubtext>
        <p>
          Forgot password?{' '}
          <a
            className="font-semibold cursor-pointer"
            onClick={() => setStep(LoginFlowStep.RESET_PASSWORD)}
          >
            Reset
          </a>
        </p>
        <p>
          Don't have an account?{' '}
          <a
            className="font-semibold cursor-pointer"
            onClick={() => setStep(LoginFlowStep.REGISTER)}
          >
            Sign Up
          </a>
        </p>
      </ContentSubtext>
    </AuthModalWrapper>
  );
};
