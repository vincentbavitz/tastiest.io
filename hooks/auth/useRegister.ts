import { AuthContext, AuthError } from 'contexts/auth';
import { LocalStorageItem } from 'contexts/tracking';
import usePostFetch from 'hooks/usePostFetch';
import { RegisterParams, RegisterReturn } from 'pages/api/register';
import { useContext } from 'react';
import { useFirebase } from 'react-redux-firebase';
import { LocalEndpoint } from 'types/api';

export const useRegister = () => {
  // Registration (sign up) request
  const { error, execute, success, submitting } = usePostFetch<
    RegisterParams,
    RegisterReturn,
    AuthError
  >(LocalEndpoint.REGISTER, { retries: 1 });

  const firebase = useFirebase();
  const { user } = useContext(AuthContext);

  const register = async (
    email: string,
    password: string,
    firstName: string,
  ) => {
    const {
      success,
      data: { token },
      error,
    } = await execute({
      email,
      password,
      firstName,
      userAgent: navigator?.userAgent ?? null,
      anonymousId: window?.analytics?.user()?.anonymousId(),
    });

    if (!success || !token || error) {
      return { user: null };
    }

    // User has accepted cookies implicitly
    localStorage.setItem(LocalStorageItem.HAS_ACCEPTED_COOKIES, '1');

    // Sign user in.
    await firebase.auth().signInWithCustomToken(token);

    return { user };
  };

  return { register, error, success, submitting };
};
