import { AuthError } from 'contexts/auth';
import { useState } from 'react';

export const useResetPassword = () => {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<AuthError | null>(null);

  const resetPassword = async (email: string) => {
    //  Email must be given as a parameter because user might not be logged in.
    if (!email?.length) {
      return;
    }

    try {
      setError(null);
      setSubmitting(true);
      await window.firebase.auth().sendPasswordResetEmail(email);
      setSuccess(true);
    } catch (error) {
      setError(error);
      setSuccess(false);
    }

    setSubmitting(false);
  };

  return { resetPassword, error, success, submitting };
};
