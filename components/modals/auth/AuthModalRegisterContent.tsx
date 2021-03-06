import { EmailIcon, LockIcon, UserIcon } from '@tastiest-io/tastiest-icons';
import { Button, Input, Tooltip } from '@tastiest-io/tastiest-ui';
import { AUTH, dlog, titleCase } from '@tastiest-io/tastiest-utils';
import { useAuth } from 'hooks/auth/useAuth';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { METADATA, REGEX } from '../../../constants';
import { AuthFlowStep, ContentElementProps } from './AuthModal';
import { ContentSubtext } from './AuthModalContentSubtext';
import { AuthModalWrapper } from './AuthModalWrapper';

type RegisterFormData = {
  email: string;
  password: string;
  firstName: string;
};

export const AuthModalRegisterContent = ({ setStep }: ContentElementProps) => {
  const { register } = useAuth();

  const { handleSubmit, control } = useForm<RegisterFormData>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    criteriaMode: 'firstError',
    shouldFocusError: true,
  });

  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const onClickRegister = handleSubmit(
    async ({ email, password, firstName }) => {
      setSubmitting(true);
      setError(null);

      const { success, error } = await register(
        email,
        password,
        firstName.trim(),
      );

      if (error) {
        setError(error);
      }

      setSubmitting(false);
    },
  );

  dlog('AuthModal ➡️ error:', error);

  return (
    <AuthModalWrapper
      title="Join Now! - It's free!"
      subtitle={METADATA.TAGLINE}
    >
      <Controller
        control={control}
        defaultValue=""
        name="firstName"
        rules={{
          required: {
            value: true,
            message: 'Please enter your name',
          },
          minLength: {
            value: 3,
            message: 'Name too short',
          },
          maxLength: { value: 20, message: 'Name too long' },
          pattern: {
            value: /^([a-zA-Z]{0,15}[ ]?){1,4}$/,
            message: 'Names must be alphabetic only',
          },
        }}
        render={({ field, formState }) => (
          <Input
            {...field}
            type="text"
            label="First Name"
            prefix={<UserIcon className="w-8 h-8 fill-current text-primary" />}
            error={formState.errors.firstName?.message}
            onChange={e => field.onChange(titleCase(e.target.value))}
            value={field.value}
          ></Input>
        )}
      />

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
            {...field}
            type="text"
            label="Email"
            prefix={<EmailIcon className="w-8 h-8 fill-current text-primary" />}
            error={formState.errors.email?.message}
            onChange={e => field.onChange(e.target.value.trim().toLowerCase())}
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
            message: 'Please enter a new password',
          },
          minLength: {
            value: AUTH.MIN_PASSWORD_LENGTH,
            message: `Please include at least ${AUTH.MIN_PASSWORD_LENGTH} characters.`,
          },
          maxLength: {
            value: AUTH.MAX_PASSWORD_LENGTH,
            message: `Password should be under ${AUTH.MAX_PASSWORD_LENGTH} characters.`,
          },
        }}
        render={({ field, formState }) => (
          <Input
            {...field}
            type="password"
            label="Password"
            prefix={<LockIcon className="w-8 h-8 fill-current text-primary" />}
            error={formState.errors.password?.message}
          ></Input>
        )}
      />

      <Tooltip
        show={Boolean(error)}
        trigger="manual"
        placement="bottom"
        content={
          <div
            style={{ maxWidth: '260px' }}
            className="flex items-center text-dark"
          >
            {/* {error?.userFacingMessage ?? error?.message} */}
            {error ?? null}
          </div>
        }
      >
        <Button
          wide
          size="large"
          type="solid"
          color="primary"
          loading={submitting}
          onClick={onClickRegister}
        >
          Join
        </Button>
      </Tooltip>

      <ContentSubtext>
        <p>
          Already have an account?{' '}
          <a
            className="font-semibold cursor-pointer"
            onClick={() => setStep(AuthFlowStep.SIGN_IN)}
          >
            Sign In
          </a>
        </p>
      </ContentSubtext>
    </AuthModalWrapper>
  );
};
