import { AuthError } from 'contexts/auth';
import { useState } from 'react';
import { useFirebase } from 'react-redux-firebase';

export const useResetPassword = () => {
  const firebase = useFirebase();

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
      await firebase.auth().sendPasswordResetEmail(email);
      setSuccess(true);
    } catch (error) {
      setError(error);
      setSuccess(false);
    }

    setSubmitting(false);
  };

  return { resetPassword, error, success, submitting };
};
