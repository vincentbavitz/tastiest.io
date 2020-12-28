import * as firebaseAdmin from 'firebase-admin';
import functions from 'firebase-functions';

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

// Add user to firestore when they create an account
const createUser = functions.auth.user().onCreate(user => {
  const { uid, displayName, email } = user;

  return firebaseAdmin
    .firestore()
    .collection('users')
    .doc(uid)
    .set({ uid, displayName, email });
});

// Remove user from firestore when their account is deleted
export const deleteUser = functions.auth.user().onDelete(user => {
  return firebaseAdmin.firestore().collection('users').doc(user.uid).delete();
});

export { firebaseAdmin, createUser };
