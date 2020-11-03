import { LoadingOutlined } from '@ant-design/icons';
import firebase from 'firebase/app';
import 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useKey } from 'react-use';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import initFirebase from '../utils/auth/initFirebase';
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
  const router = useRouter();

  const [email, setEmail] = useState(undefined as string | undefined);
  const [password, setPassword] = useState(undefined as string | undefined);
  const [error, setError] = useState(undefined as '' | undefined);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);

    if (!(email && password)) {
      return;
    }

    // TODO - Verify

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      setIsLoading(false);
      router.push('/account');
    } catch (error) {
      setError(error);
      setIsLoading(false);
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
        <div className="flex-1">{error}</div>
      </div>
    </>
  );
}

export default withAuthUser(withAuthUserInfo(Login));
