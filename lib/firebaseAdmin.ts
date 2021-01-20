import * as firebaseAdmin from 'firebase-admin';
import { CERT } from '../constants/firebase';

const isServer = typeof window === undefined;

if (!firebaseAdmin.apps.length && isServer) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(CERT),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
}

export default firebaseAdmin;
