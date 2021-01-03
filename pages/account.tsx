import 'firebase/auth';
import 'firebase/functions';
import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import { Title } from '../components/Title';

const Account = (props: any) => {
  // const authUser = AuthUserInfo.AuthUser;

  // useEffect(() => {
  //   console.log('Auth user', authUser);

  //   if (!authUser) {
  //     alert('authUser not defined');
  //     console.log('Auth', authUser);

  //     Router.push('/');
  //   }
  // }, []);

  const authUser = {
    displayName: 'Vince',
  };

  const environment = 'development';

  return (
    <>
      {!authUser ? (
        <></>
      ) : (
        <>
          <div>
            <label htmlFor="displayName">display name</label>
            <Link href="/account/update-name">
              <a>[ update ]</a>
            </Link>
            <p>{authUser.displayName}</p>
          </div>
          <p>{`env: ${environment}`}</p>
          <p>
            <button
              onClick={async () => {
                try {
                  // await logout();
                  Router.push('/login');
                } catch (e) {
                  console.error(e);
                }
              }}
            >
              [ log out ]
            </button>
          </p>

          <Title level={3}>Favourites</Title>
        </>
      )}
    </>
  );
};

export default Account;
