import firebase from 'firebase/app';
import 'firebase/auth';
import Link from 'next/link';
import Router from 'next/router';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Button } from '../components/Button';
import { Contained } from '../components/Contained';
import { Input } from '../components/Input';
import initFirebase from '../utils/auth/initFirebase';

initFirebase();

type Inputs = {
  email: string;
  password: string;
};

function Login() {
  const initial: Inputs = {
    email: '',
    password: '',
  };

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const submitInputRef = useRef(null);

  const [email, setEmail] = useState(undefined as string | undefined);
  const [password, setPassword] = useState(undefined as string | undefined);
  const [password, setPassword] = useState(undefined as string | undefined);

  const handleSubmit = async () => {
    try {
      const email = emailInputRef?.current?.value;
      const password = passwordInputRef?.current?.value;

      if (!(email && password)) {
        return;
      }

      await firebase.auth().signInWithEmailAndPassword(email, password);
      Router.push('/');
    } catch (error) {
      alert(error);
    }
  };

  const handleEmailInputChanged = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('value', event.target);

    setEmail(event?.target?.value);

    // TODO - Verify
  };

  const handlePasswordInputChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event?.target?.value);

    // TODO - Verify
  };

  useEffect(() => {
    setTimeout(() => {
      emailInputRef?.current?.focus();
    }, 30);
  }, []); // [] = run once

  return (
    <Contained>
      <div className="flex">
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
                  ref={emailInputRef}
                  onChange={handleEmailInputChanged}
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
                  ref={passwordInputRef}
                  onChange={handlePasswordInputChanged}
                />
              </div>

              <div className="flex justify-center space-x-4">
                <div className="flex-1">
                  <Button type="solid" size="small" onClick={handleSubmit}>
                    Sign in
                  </Button>
                </div>
                <div className="flex-1">
                  <Button type="ghost" size="small">
                    Create account
                  </Button>
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
    </Contained>
  );
}

export default Login;
