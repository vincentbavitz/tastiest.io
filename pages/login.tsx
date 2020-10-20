import React from 'react';
import { Contained } from '../components/Contained';
import { Input } from '../components/Input';
import { getUsers } from '../utils/login';

export default function Login() {
  getUsers();

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
          Sign in with Google
          <Input />
        </div>
        <div>
          Sign in with Facebook
          <Input />
        </div>
      </div>
    </Contained>
  );
}
