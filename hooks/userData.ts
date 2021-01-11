import { useDocumentData } from 'react-firebase-hooks/firestore';
import { db } from '../firebaseClient';
import { useAuth } from './auth';

export function useUserData() {
  const { user } = useAuth();

  const [userData, loading, error] = useDocumentData(
    db.collection('users').doc(user.uid),
    {},
  );

  const setUserData = (
    field: string,
    value: string | number | boolean | Array<string | number | boolean>,
  ) => {
    db.collection('users')
      .doc(user.uid)
      .set({
        [field]: value,
      });
  };

  return { userData, setUserData, loading, error };
}
