import { AuthError, AuthErrorMessageMap } from 'contexts/auth';
import router from 'next/router';
import { useState } from 'react';
import { useFirebase } from 'react-redux-firebase';

export const useSignOut = () => {
  const firebase = useFirebase();

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<AuthError | null>(null);

  // If redirectTo is given, will redirect there after sign out.
  // Else, the page will simply reload.
  const signOut = async (redirectTo?: string) => {
    try {
      setSubmitting(true);
      await firebase.auth().signOut();
      setSubmitting(false);
    } catch (error) {
      setError(AuthErrorMessageMap[(error as AuthError).code]);
      setSubmitting(false);
      setSuccess(false);
      return;
    }

    setSuccess(true);

    if (redirectTo) {
      router.push(redirectTo);
    } else {
      router.reload();
    }
  };

  return { signOut, error, success, submitting };
};
