import { CheckCircleOutlined } from '@ant-design/icons';
import { EmailIcon } from '@tastiest-io/tastiest-icons';
import { Button, Input, Tooltip } from '@tastiest-io/tastiest-ui';
import { useResetPassword } from 'hooks/auth/useResetPassword';
import React, { useState } from 'react';
import { cleanupInputValue } from 'utils/text';
import { ContentElementProps, LoginFlowStep } from './AuthModal';
import { ContentSubtext } from './AuthModalContentSubtext';
import { AuthModalWrapper } from './AuthModalWrapper';

export const AuthModalResetPasswordContent = ({
  setStep,
}: ContentElementProps) => {
  const [email, setEmail] = useState('');
  const { resetPassword, submitting, success, error } = useResetPassword();

  return (
    <AuthModalWrapper
      title="Reset your password"
      subtitle="Forgot your password? No worries."
    >
      {success ? (
        <div className="flex flex-col items-center pt-6 space-y-4">
          <CheckCircleOutlined className="text-4xl text-success" />

          <div className="px-4 mb-1 -mt-1 text-base text-center">
            We've sent you an email with instructions to reset your password.
          </div>

          <Button
            type="solid"
            color="primary"
            onClick={() => setStep(LoginFlowStep.SIGN_IN)}
          >
            Sign In
          </Button>
        </div>
      ) : (
        <>
          <Input
            type="email"
            label="Email"
            prefix={<EmailIcon className="w-8 h-8 fill-current text-primary" />}
            value={email}
            onValueChange={value => setEmail(cleanupInputValue(value))}
            disabled={success}
          ></Input>

          <Tooltip
            show={Boolean(error)}
            trigger="manual"
            placement="bottom"
            content={
              <div
                style={{ maxWidth: '260px' }}
                className="flex items-center text-dark"
              >
                {error.userFacingMessage ?? error.message}
              </div>
            }
          >
            <Button
              wide
              size="large"
              type="solid"
              color="primary"
              loading={submitting}
              disabled={submitting || success}
              onClick={() => resetPassword(email)}
            >
              Reset
            </Button>
          </Tooltip>
        </>
      )}

      {success ? null : (
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
      )}
    </AuthModalWrapper>
  );
};
