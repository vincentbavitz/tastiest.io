import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/functions';
import Link from 'next/link';
import Router from 'next/router';
import React, { useEffect } from 'react';
import { Title } from '../components/Title';
import initFirebase from '../utils/auth/initFirebase';
import logout from '../utils/auth/logout';
import withAuthUser from '../utils/pageWrappers/withAuthUser';
import withAuthUserInfo from '../utils/pageWrappers/withAuthUserInfo';

initFirebase();

const Account = (props: any) => {
  const { AuthUserInfo, environment } = props;
  const authUser = AuthUserInfo.AuthUser;

  useEffect(() => {
    console.log('Auth user', authUser);

    if (!authUser) {
      alert('authUser not defined');
      console.log('Auth', authUser);

      Router.push('/');
    }
  }, []);

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
                  await logout();
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

Account.getInitialProps = async function () {
  const getEnvironment = firebase.functions().httpsCallable('getEnvironment');
  const result = await getEnvironment({});
  return {
    environment: result.data.environment,
  };
};

export default withAuthUser(withAuthUserInfo(Account));
