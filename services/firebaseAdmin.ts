import * as firebaseAdmin from 'firebase-admin';
import { CERT } from '../constants/firebase';

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(CERT),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
}

export default firebaseAdmin;
