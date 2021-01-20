import { useRouter } from 'next/router';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import TastiestLogo from '../../assets/svgs/brand.svg';
import EmailSVG from '../../assets/svgs/email.svg';
import PasswordSVG from '../../assets/svgs/lock.svg';
import { METADATA } from '../../constants';
import { useAuth } from '../../hooks/auth';
import { ModalInstance } from '../../state/navigation';
import { Button } from '../Button';
import { Input } from '../Input';
import { Modal } from '../Modal';

interface Props {
  isOpen: boolean;
  close?: () => void;
}

enum LoginFlowStep {
  CONTINUE = 'CONTINUE',
  SIGN_IN = 'SIGN_IN',
  SIGN_UP = 'SIGN_UP',
}

export function LoginModal(props: Props) {
  const { signIn, signUp, resetPassword, isSignedIn } = useAuth();

  const router = useRouter();

  const [signInEmail, setSignInEmail] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [step, setStep] = useState<LoginFlowStep>(LoginFlowStep.CONTINUE);

  if (isSignedIn) {
    return null;
  }

  useEffect(() => {
    console.log('LoginModal ➡️ signInEmail:', signInEmail);
    console.log('LoginModal ➡️ signUpEmail:', signUpEmail);
    console.log('LoginModal ➡️ signInPassword:', signInPassword);
    console.log('LoginModal ➡️ signUpPassword:', signUpPassword);
    console.log('LoginModal ➡️ router.pathname;:', router.pathname);
  }, [
    signInEmail,
    signUpEmail,
    signInPassword,
    signUpPassword,
    router.pathname,
  ]);

  const continueContent = (
    <Button
      wide
      size="large"
      type="outline"
      color="secondary"
      prefix={<EmailSVG className="h-6 w-8" />}
      suffix={<div className="w-6"></div>}
      onClick={() => setStep(LoginFlowStep.SIGN_IN)}
    >
      Continue with email
    </Button>
  );

  const signInContent = (
    <>
      <Input
        size="large"
        type="email"
        className="rounded-xl py-2"
        placeholder="Email address"
        prefix={<EmailSVG className="h-6" />}
        value={signInEmail}
        maxLength={50}
        onValueChange={value => setSignInEmail(value)}
      ></Input>
      <Input
        size="large"
        type="password"
        className="rounded-xl py-2"
        placeholder="Password"
        prefix={<PasswordSVG className="ml-2 mr-2 h-8" />}
        value={signInPassword}
        onValueChange={value => setSignInPassword(value)}
        maxLength={50}
      ></Input>
      <Button
        wide
        size="large"
        type="solid"
        color="primary"
        className="rounded-xl py-3"
        onClick={() => signIn('sd', 'sd')}
      >
        Sign In
      </Button>
    </>
  );

  const signUpContent = (
    <>
      <Input
        size="large"
        type="email"
        className="rounded-xl py-2"
        placeholder="Email address"
        prefix={<EmailSVG className="h-6" />}
        value={signUpEmail}
        onValueChange={value => setSignUpEmail(value)}
      ></Input>
      <Input
        size="large"
        type="password"
        className="rounded-xl py-2"
        placeholder="Create a password"
        prefix={<PasswordSVG className="ml-2 mr-2 h-8" />}
        value={signUpPassword}
        onValueChange={value => setSignUpPassword(value)}
      ></Input>
      <Button
        wide
        size="large"
        type="solid"
        color="primary"
        className="rounded-xl py-3"
        onClick={() => signUp('', signUpEmail, signUpPassword)}
      >
        Join
      </Button>
    </>
  );

  const signInSubtext = (
    <>
      <p>
        Forgot password?{' '}
        <a className="font-semibold" onClick={resetPassword}>
          Reset
        </a>
      </p>
      <p>
        Don't have an account?{' '}
        <a
          className="font-semibold"
          onClick={() => setStep(LoginFlowStep.SIGN_UP)}
        >
          Sign Up
        </a>
      </p>
    </>
  );

  const signUpSubtext = (
    <>
      <p>
        Already have an account?{' '}
        <a
          className="font-semibold"
          onClick={() => setStep(LoginFlowStep.SIGN_IN)}
        >
          Sign In
        </a>
      </p>
    </>
  );

  // prettier-ignore
  const title = 
    step === LoginFlowStep.CONTINUE ? 'Hello!' :
    step === LoginFlowStep.SIGN_IN ? 'Welcome Back!' :
    step === LoginFlowStep.SIGN_UP? "Join Now! - It's free!" :
    null;

  // prettier-ignore
  const subtitle = 
    step === LoginFlowStep.SIGN_IN ? 'Sign in to your account here.' :
    step === LoginFlowStep.SIGN_UP? METADATA.TAGLINE :
    null;

  // prettier-ignore
  const content = 
    step === LoginFlowStep.CONTINUE ? continueContent :
    step === LoginFlowStep.SIGN_IN ? signInContent :
    step === LoginFlowStep.SIGN_UP? signUpContent :
    null;

  // prettier-ignore
  const subtext = 
    step === LoginFlowStep.SIGN_IN ? signInSubtext :
    step === LoginFlowStep.SIGN_UP? signUpSubtext :
    null;

  return (
    <Modal modalId={ModalInstance.LOGIN} {...props}>
      <div
        style={{ maxWidth: '350px', height: '480px', maxHeight: '90vw' }}
        className="relative flex flex-col justify-between pb-3"
      >
        <div className="flex flex-col flex-grow items-center space-y-5">
          <TastiestLogo className="fill-current h-8" />

          <div className="w-full text-center">
            <h1 className="font-somatic text-fourxl">{title}</h1>
            {subtitle && (
              <h3 className="font-roboto font-semiobld -mt-1">{subtitle}</h3>
            )}
          </div>

          <div className="flex flex-col w-full space-y-4 pt-2">{content}</div>

          <div className="text-center text-sm">{subtext}</div>
        </div>

        <div className="text-xs">
          By proceeding, you agree to our{' '}
          <a href="/privacy" className="underline font-semibold">
            Terms of Use
          </a>{' '}
          and confirm that you have read our{' '}
          <a href="/privacy" className="underline font-semibold">
            Privacy and Cookie Statement
          </a>
        </div>
      </div>
    </Modal>
  );
}
