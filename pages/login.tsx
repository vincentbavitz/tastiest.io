import { LoadingOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useKey } from 'react-use';
import { Button } from '../components/Button';
import { Contained } from '../components/Contained';
import { Input } from '../components/Input';
import { useAuth } from '../hooks/useAuth';

// enum AuthErrorCode {
//   WRONG_PASSWORD = 'auth/wrong-password',
//   USER_NOT_FOUND = 'auth/user-not-found',
// }

// interface FirebaseAuthError {
//   a: null;
//   code: string;
//   message: string;
// }

function Login() {
  const { signIn } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState(undefined as string | undefined);
  const [password, setPassword] = useState(undefined as string | undefined);
  const [error, setError] = useState(undefined as '' | undefined);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    // if (isLoading) {
    // return;
    // }

    setIsLoading(true);

    if (!(email && password)) {
      return;
    }

    try {
      await signIn(email, password);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }

    setIsLoading(false);
  };

  // Submit on enter
  useKey('Enter', handleSubmit);

  return (
    <Contained>
      <div
        style={{
          minHeight: '500px',
          height: '60vh',
          maxHeight: '800px',
        }}
        className="flex justify-center items-center"
      >
        <div
          style={{
            width: '100%',
            maxWidth: '400px',
          }}
          className="p-10 tablet:p-6 border-2 border-secondary rounded-xl"
        >
          <form>
            <div className="flex flex-col space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="text-xl font-somatic text-primary"
                >
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
                <label
                  htmlFor="password"
                  className="text-xl font-somatic text-primary"
                >
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
                    <Button
                      onClick={() => router.push('/signup')}
                      type="ghost"
                      size="small"
                    >
                      Create account
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Contained>
  );
}

export default Login;
