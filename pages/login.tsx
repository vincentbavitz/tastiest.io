import firebase from 'firebase/app';
import 'firebase/auth';
import Link from 'next/link';
import Router from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import initFirebase from '../utils/auth/initFirebase';

function Login() {
  const submitInputRef = useRef(null);

  const [email, setEmail] = useState(undefined as string | undefined);
  const [password, setPassword] = useState(undefined as string | undefined);

  const handleSubmit = async () => {
    try {
      if (!(email && password)) {
        return;
      }

      await firebase.auth().signInWithEmailAndPassword(email, password);
      Router.push('/');
    } catch (error) {
      alert(error);
    }
  };

  const handleEmailInputChanged = (value: string) => {
    setEmail(value);

    console.log('email', value);

    // TODO - Verify
  };

  const handlePasswordInputChanged = (value: string) => {
    setPassword(value);

    console.log('password', value);
    // TODO - Verify
  };

  useEffect(() => {
    initFirebase();
  }, []);

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
                  onValueChange={handleEmailInputChanged}
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
                  onValueChange={handlePasswordInputChanged}
                />
              </div>

              <div className="flex justify-center space-x-4">
                <div className="flex-1">
                  <Button type="solid" size="small" onClick={handleSubmit}>
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

              <p>
                <button type="submit">[ log in ]</button>
              </p>
              <input className="hidden" ref={submitInputRef} type="submit" />
            </div>
          </form>
        </div>
        <div className="flex-1"></div>
      </div>

      <p>
        {'or '}
        <Link href="/signup">
          <a>[ create account ]</a>
        </Link>
      </p>
    </>
  );
}

export default Login;
