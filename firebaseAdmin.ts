import * as firebaseAdmin from 'firebase-admin';

const CERT = {
  privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  projectId: process.env.FIREBASE_PROJECT_ID,
};

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(CERT),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
}

export { firebaseAdmin };
