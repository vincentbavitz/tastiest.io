import firebase from 'firebase/app';
import 'firebase/auth';
import Link from 'next/link';
import Router from 'next/router';
import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import initFirebase from '../utils/auth/initFirebase';

initFirebase();

function Login() {
  const [email, setEmail] = useState(undefined as string | undefined);
  const [password, setPassword] = useState(undefined as string | undefined);

  const handleSubmit = async () => {
    if (!(email && password)) {
      return;
    }

    // TODO - Verify

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      Router.push('/account');
    } catch (error) {
      alert(error);
    }
  };

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
            </div>
          </form>
        </div>
        <div className="flex-1"></div>
      </div>
    </>
  );
}

export default Login;
