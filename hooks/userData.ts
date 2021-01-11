import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useFirestore, useFirestoreConnect } from 'react-redux-firebase';
import { IState } from '../state/reducers';
import { IUserData, TUserData, USER_DATA } from '../types/firebase';
import { useAuth } from './auth';

interface IUseUserData {
  userData: Partial<IUserData>;
  setUserData: <T extends USER_DATA>(
    field: T,
    value: TUserData<T>,
    onInvalidUser?: () => void,
  ) => void;
  error?: Error;
}

export function useUserData(): IUseUserData {
  const firestore = useFirestore();
  const { user } = useAuth();
  const [error, setError] = useState(undefined as Error | undefined);

  useFirestoreConnect([
    {
      collection: 'users',
      doc: user?.uid,
    },
  ]);

  const userData: IUserData = useSelector(
    ({ firestore: { data } }: IState) => data.users && data.users[user?.uid],
  );

  const setUserData = <T extends USER_DATA>(
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
        .set({
          ...userData,
          [field]: value,
        });
    } catch (e) {
      setError(new Error(`setUserData Error: ${e}`));
    }
  };

  return { userData, setUserData, error };
}
