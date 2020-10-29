import { LoadingOutlined } from '@ant-design/icons';
import 'firebase/auth';
import Link from 'next/link';
import { string } from 'prop-types';
import React, { useState } from 'react';
import { useKey } from 'react-use';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Title } from '../components/Title';
import initFirebase from '../utils/auth/initFirebase';
import { signInWithEmailAndPassword } from '../utils/login';
import withAuthUser from '../utils/pageWrappers/withAuthUser';
import withAuthUserInfo from '../utils/pageWrappers/withAuthUserInfo';

initFirebase();

enum AuthErrorCode {
  WRONG_PASSWORD = 'auth/wrong-password',
  USER_NOT_FOUND = 'auth/user-not-found',
}

interface FirebaseAuthError {
  a: null;
  code: string;
  message: string;
}

interface Props {
  withAuthUserInfo: any;
}

function Login(props: Props) {
  const [email, setEmail] = useState(undefined as string | undefined);
  const [password, setPassword] = useState(undefined as string | undefined);

  const [error, setError] = useState(
    undefined as FirebaseAuthError | undefined,
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    // if (isLoading) {
    //   return;
    // }

    setIsLoading(true);

    if (!(email && password)) {
      return;
    }

    // TODO - Verify

    try {
      signInWithEmailAndPassword({
        email: string,
        password: string,
        redirectTo: string | undefined,
      });
    } catch (error) {
      setError(error);
      console.log('error', error);
    }

    setIsLoading(false);
  };

  // Submit on enter
  useKey('Enter', handleSubmit);

  return (
    <>
      <div className="flex ">
        <div className="flex-1">
          <form>
            <div className="flex flex-col space-y-6">
              <div>
                <label htmlFor="email" className="text-twoxl">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  size="large"
                  placeholder="jerry@tastiest.io"
                  onValueChange={value => setEmail(value)}
                />
              </div>

              <div>
                <label htmlFor="password" className="text-twoxl">
                  Password
                </label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  size="large"
                  placeholder="Password"
                  onValueChange={value => setPassword(value)}
                />
              </div>

              <div className="flex justify-center space-x-4">
                <div className="flex-1">
                  <Button
                    type="solid"
                    size="small"
                    onClick={handleSubmit}
                    suffix={isLoading ? <LoadingOutlined /> : <></>}
                  >
                    Sign in
                  </Button>
                </div>
                <div className="flex-1">
                  <Link href="/signup">
                    <Button type="ghost" size="small">
                      Create account
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="flex-1">
          <Title level={2}>
            <>
              {error?.code === AuthErrorCode.USER_NOT_FOUND && (
                <>
                  We couldn't find an account with this email. <br />
                  <Link href="/signup">Sign up here</Link>.
                </>
              )}
              {error?.code === AuthErrorCode.WRONG_PASSWORD && (
                <>Wrong password</>
              )}
            </>
          </Title>
        </div>
      </div>
    </>
  );
}

export default withAuthUser(withAuthUserInfo(Login));
