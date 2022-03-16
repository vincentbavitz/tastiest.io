import {
  FirestoreCollection,
  GenericAsyncReturnType,
} from '@tastiest-io/tastiest-utils';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { useFirestore, useFirestoreConnect } from 'react-redux-firebase';
import { IState } from '../state/reducers';

export function useUserData(user: firebase.User) {
  const firestore = useFirestore();

  useFirestoreConnect([
    {
      collection: FirestoreCollection.USERS,
      doc: user?.uid,
    },
  ]);

  const userData: Partial<any> = useSelector(
    ({ firestore: { data } }: IState) => data.users && data.users[user?.uid],
  );

  const setUserData = async <T extends string>(
    field: T,
    value: Partial<any>,
    onInvalidUser?: () => void,
  ): Promise<GenericAsyncReturnType> => {
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
      await firestore
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
