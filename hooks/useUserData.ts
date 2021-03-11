import firebase from 'firebase';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useFirestore, useFirestoreConnect } from 'react-redux-firebase';
import { IState } from '../state/reducers';
import { IUserData, TUserData, UserData } from '../types/firebase';

interface IUseUserData {
  userData: Partial<IUserData>;
  setUserData: <T extends UserData>(
    field: T,
    value: TUserData<T>,
    onInvalidUser?: () => void,
  ) => void;
  error?: Error;
}

export function useUserData(user: firebase.User): IUseUserData {
  const firestore = useFirestore();
  const [error, setError] = useState(undefined as Error | undefined);

  useFirestoreConnect([
    {
      collection: 'users',
      doc: user?.uid,
    },
  ]);

  const userData: Partial<IUserData> = useSelector(
    ({ firestore: { data } }: IState) => data.users && data.users[user?.uid],
  );

  const setUserData = <T extends UserData>(
    field: T,
    value: TUserData<T>,
    onInvalidUser?: () => void,
  ) => {
    if (!user?.uid) {
      // No user signed in
      if (onInvalidUser) {
        onInvalidUser();
      }

      return;
    }

    try {
      firestore
        .collection('users')
        .doc(user.uid)
        .set(
          {
            [field]: value,
          },
          { merge: true },
        );
    } catch (e) {
      setError(new Error(`setUserData Error: ${e}`));
    }
  };

  return { userData, setUserData, error };
}
