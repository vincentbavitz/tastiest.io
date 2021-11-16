import { Modal } from '@tastiest-io/tastiest-ui';
import { useScreenSize } from 'hooks/useScreenSize';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '../../../hooks/auth/useAuth';
import { closeAuthModal } from '../../../state/navigation';
import { IState } from '../../../state/reducers';
import { AuthModalRegisterContent } from './AuthModalRegisterContent';
import { AuthModalResetPasswordContent } from './AuthModalResetPasswordContent';
import { AuthModalSignInContent } from './AuthModalSignInContent';

export enum LoginFlowStep {
  CONTINUE = 'CONTINUE',
  SIGN_IN = 'SIGN_IN',
  REGISTER = 'REGISTER',
  RESET_PASSWORD = 'RESET_PASSWORD',
}

export interface ContentElementProps {
  setStep: React.Dispatch<React.SetStateAction<LoginFlowStep>>;
}

export function AuthModal() {
  const { isSignedIn } = useAuth();
  const [step, setStep] = useState<LoginFlowStep>(LoginFlowStep.SIGN_IN);

  const { isAuthModalOpen } = useSelector((state: IState) => state.navigation);
  const isOpen = isAuthModalOpen && isSignedIn === false;

  const dispatch = useDispatch();
  const { isMobile } = useScreenSize();

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
        className="relative flex flex-col -mt-8 justify-between"
      >
        {step === LoginFlowStep.SIGN_IN && (
          <AuthModalSignInContent setStep={setStep} />
        )}

        {step === LoginFlowStep.REGISTER && (
          <AuthModalRegisterContent setStep={setStep} />
        )}

        {step === LoginFlowStep.RESET_PASSWORD && (
          <AuthModalResetPasswordContent setStep={setStep} />
        )}
      </div>
    </Modal>
  );
}
