import { AuthError, AuthErrorMessageMap } from 'contexts/auth';
import { useRouter } from 'next/router';
import { useState } from 'react';

export const useSignOut = () => {
  const router = useRouter();

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<AuthError | null>(null);

  // If redirectTo is given, will redirect there after sign out.
  // Else, the page will simply reload.
  const signOut = async (redirectTo?: string) => {
    try {
      setSubmitting(true);
      window.firebase.auth().signOut();
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
