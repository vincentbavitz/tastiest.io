import { Modal } from '@tastiest-io/tastiest-ui';
import { useScreenSize } from 'hooks/useScreenSize';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '../../../hooks/auth/useAuth';
import { closeAuthModal, setAuthModalStep } from '../../../state/navigation';
import { IState } from '../../../state/reducers';
import { AuthModalRegisterContent } from './AuthModalRegisterContent';
import { AuthModalResetPasswordContent } from './AuthModalResetPasswordContent';
import { AuthModalSignInContent } from './AuthModalSignInContent';

export enum AuthFlowStep {
  CONTINUE = 'CONTINUE',
  SIGN_IN = 'SIGN_IN',
  REGISTER = 'REGISTER',
  RESET_PASSWORD = 'RESET_PASSWORD',
}

export interface ContentElementProps {
  setStep: React.Dispatch<React.SetStateAction<AuthFlowStep>>;
}

export function AuthModal() {
  const dispatch = useDispatch();
  const { isSignedIn } = useAuth();

  const { isAuthModalOpen, authModalStep } = useSelector(
    (state: IState) => state.navigation,
  );

  const isOpen = isAuthModalOpen && isSignedIn === false;
  const setStep = (step: AuthFlowStep) => dispatch(setAuthModalStep(step));

  const { isMobile } = useScreenSize();

  // If not signed in, close the modal
  useEffect(() => {
    dispatch(closeAuthModal());
  }, [isSignedIn]);

  if (isSignedIn) {
    return null;
  }

  return (
    <Modal
      show={isOpen}
      fullscreen={isMobile}
      title=" "
      close={() => dispatch(closeAuthModal())}
    >
      <div
        style={{
          width: isMobile ? '100%' : '350px',
          height: isMobile ? '100%' : '510px',
          minHeight: '500px',
        }}
        className="relative flex flex-col justify-between"
      >
        {authModalStep === AuthFlowStep.SIGN_IN && (
          <AuthModalSignInContent setStep={setStep} />
        )}

        {authModalStep === AuthFlowStep.REGISTER && (
          <AuthModalRegisterContent setStep={setStep} />
        )}

        {authModalStep === AuthFlowStep.RESET_PASSWORD && (
          <AuthModalResetPasswordContent setStep={setStep} />
        )}
      </div>
    </Modal>
  );
}
