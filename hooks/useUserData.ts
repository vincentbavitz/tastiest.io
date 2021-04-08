import {
  FirestoreCollection,
  IUserData,
  TUserData,
  UserData,
} from '@tastiest-io/tastiest-utils';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { useFirestore, useFirestoreConnect } from 'react-redux-firebase';
import { IState } from '../state/reducers';

export interface IGenericReturnSuccess {
  success: boolean;
  error: Error | null;
}

export function useUserData(user: firebase.User) {
  const firestore = useFirestore();

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

      return {
        success: false,
        error: new Error('setUserData Error: Invalid user'),
      };
    }

    try {
      firestore
        .collection(FirestoreCollection.USERS)
        .doc(user.uid)
        .set(
          {
            [field]: value,
          },
          { merge: true },
        );

      return { success: true, error: null };
    } catch (e) {
      return { success: false, error: new Error(`setUserData Error: ${e}`) };
    }
  };

  return { userData, setUserData };
}
