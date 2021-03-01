import * as firebaseAdmin from 'firebase-admin';
import { GetServerSidePropsContext } from 'next';
import nookies from 'nookies';
import { CERT } from '../constants/firebase';

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(CERT),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
}

/*
 * Get context from getServerSideProps
 */
export async function verifyUserAuth(ctx: GetServerSidePropsContext) {
  if (typeof window !== undefined) {
    return { userId: null, email: null };
  }

  try {
    const cookies = nookies.get(ctx);
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);

    // User is authenticated!
    return { userId: token.uid, email: token.email };
  } catch (_) {
    return { userId: null, email: null };
  }
}

export default firebaseAdmin;
