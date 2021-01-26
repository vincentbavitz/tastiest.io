import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TastiestLogo from '../../assets/svgs/brand.svg';
import EmailSVG from '../../assets/svgs/email.svg';
import PasswordSVG from '../../assets/svgs/lock.svg';
import { METADATA } from '../../constants';
import { ScreenContext } from '../../contexts/screen';
import { useAuth } from '../../hooks/useAuth';
import { closeSignInModal, ModalInstance } from '../../state/navigation';
import { IState } from '../../state/reducers';
import { Button } from '../Button';
import { Input } from '../Input';
import { Modal } from '../Modal';

enum LoginFlowStep {
  CONTINUE = 'CONTINUE',
  SIGN_IN = 'SIGN_IN',
  SIGN_UP = 'SIGN_UP',
}

export function LoginModal() {
  const { signIn, signUp, resetPassword, isSignedIn, error } = useAuth();
  const { isSignInModalOpen } = useSelector(
    (state: IState) => state.navigation,
  );

  const isOpen = isSignInModalOpen && !isSignedIn;
  const { isMobile } = useContext(ScreenContext);
  const dispatch = useDispatch();

  const [signInEmail, setSignInEmail] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [step, setStep] = useState<LoginFlowStep>(LoginFlowStep.SIGN_IN);

  // Close if the user is signed in
  useEffect(() => {
    if (isSignedIn) {
      dispatch(closeSignInModal());
    }
  }, []);

  const onClickSignUp = async () => {
    const signUpSuccessful = await signUp('', signUpEmail, signUpPassword);

    if (signUpSuccessful) {
      dispatch(closeSignInModal());
    }
  };

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
        // suffix={<>!</>}
        value={signInEmail}
        maxLength={50}
        onValueChange={value => setSignInEmail(cleanupInputValue(value))}
      ></Input>

      <Input
        size="large"
        type="password"
        className="rounded-xl py-2"
        placeholder="Password"
        prefix={<PasswordSVG className="ml-2 mr-2 h-8" />}
        value={signInPassword}
        onValueChange={value => setSignInPassword(cleanupInputValue(value))}
        maxLength={50}
      ></Input>

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

  const cleanupInputValue = (value: string | number) =>
    String(value).toLowerCase().trim();

  const signUpContent = (
    <>
      <Input
        size="large"
        type="email"
        className="rounded-xl py-2"
        placeholder="Email address"
        prefix={<EmailSVG className="h-6" />}
        value={signUpEmail}
        onValueChange={value => setSignUpEmail(cleanupInputValue(value))}
      ></Input>

      <Input
        size="large"
        type="password"
        className="rounded-xl py-2"
        placeholder="Create a password"
        prefix={<PasswordSVG className="ml-2 mr-2 h-8" />}
        value={signUpPassword}
        onValueChange={value => setSignUpPassword(cleanupInputValue(value))}
      ></Input>

      <Button
        wide
        size="large"
        type="solid"
        color="primary"
        className="rounded-xl py-3"
        onClick={() => onClickSignUp()}
      >
        Join
      </Button>

      {error && (
        <div className="text-sm text-center mb-1 -mt-1 text-red-700">
          {error?.message}
        </div>
      )}
    </>
  );

  const signInSubtext = (
    <>
      <p>
        Forgot password?{' '}
        <a className="cursor-pointer font-semibold" onClick={resetPassword}>
          Reset
        </a>
      </p>
      <p>
        Don't have an account?{' '}
        <a
          className="cursor-pointer font-semibold"
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
          className="cursor-pointer font-semibold"
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

  if (isSignedIn) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onMobileFullscreen
      modalId={ModalInstance.LOGIN}
      close={() => dispatch(closeSignInModal())}
    >
      <div
        style={{
          width: isMobile ? '100%' : '350px',
          height: isMobile ? '100%' : '510px',
          minHeight: '500px',
        }}
        className="relative flex flex-col justify-between"
      >
        <div className="flex flex-col flex-grow items-center space-y-5">
          <TastiestLogo className="fill-current h-8" />
          <div className="w-full text-center">
            <h1 className="font-somatic text-4xl">{title}</h1>
            {subtitle && (
              <h3 className="font-roboto font-semiobld -mt-1">{subtitle}</h3>
            )}
          </div>

          <div className="flex flex-col w-full space-y-4 pt-2">{content}</div>
          <div className="text-center text-sm">{subtext}</div>
        </div>

        <div className="text-xs">
          By proceeding, you agree to our{' '}
          <a href="/privacy" className="underline cursor-pointer font-semibold">
            Terms of Use
          </a>{' '}
          and confirm that you have read our{' '}
          <a href="/privacy" className="underline cursor-pointer font-semibold">
            Privacy and Cookie Statement
          </a>
        </div>
      </div>
    </Modal>
  );
}
