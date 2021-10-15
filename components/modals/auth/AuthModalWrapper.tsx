import { TastiestBrand } from '@tastiest-io/tastiest-components';
import { SignInTosInfo } from 'components/SignInTosInfo';
import { useAuth } from 'hooks/auth/useAuth';
import { useRouter } from 'next/router';
import React, { ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeAuthModal } from 'state/navigation';
import { IState } from 'state/reducers';

interface AuthModalWrapperProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export const AuthModalWrapper = (props: AuthModalWrapperProps) => {
  const { title, subtitle, children } = props;

  const { isAuthModalOpen } = useSelector((state: IState) => state.navigation);
  const { isSignedIn } = useAuth();

  const router = useRouter();
  const dispatch = useDispatch();

  const handleLocationChange = () => {
    dispatch(closeAuthModal());
  };

  // Close modal on location change
  useEffect(() => {
    router.events.on('routeChangeComplete', handleLocationChange);
    return () => router.events.off('routeChangeComplete', handleLocationChange);
  }, []);

  // Close if the user is signed in
  useEffect(() => {
    if (isSignedIn) {
      dispatch(closeAuthModal());
    }
  }, []);

  return (
    <>
      <div className="flex flex-col items-center flex-grow space-y-5">
        <TastiestBrand type="full" />
        <div className="w-full text-center">
          <h1 className="text-3xl font-primary">{title}</h1>
          {subtitle && (
            <h3 className="font-secondary font-semiobld">{subtitle}</h3>
          )}
        </div>

        <div className="flex flex-col w-full pt-2 space-y-4">{children}</div>
      </div>

      <SignInTosInfo center />
    </>
  );
};
