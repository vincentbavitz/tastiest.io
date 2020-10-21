import React from 'react';
import { Button } from '../components/Button';
import { Contained } from '../components/Contained';
import { Input } from '../components/Input';

export default function Login() {
  return (
    <Contained>
      <div className="flex flex-col space-y-5 w-1/2 mb-24">
        <div>
          Email
          <Input />
        </div>
        <div>
          Name
          <Input />
        </div>
        <div>
          Password
          <Input />
        </div>
        <div>
          <Button size="small">Sign in with Google</Button>
        </div>
        <div>
          <Button size="small">Sign in with Facebook</Button>
        </div>
      </div>
    </Contained>
  );
}
