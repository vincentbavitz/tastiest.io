import firebaseClient from 'firebase/app';
import 'firebase/auth';

const CLIENT_CONFIG = {
  apiKey: 'AIzaSyDA4BF1Q3us1swo2FYfZWOWCZqyugIgjyk',
  authDomain: 'tastiest-dishes.firebaseapp.com',
  databaseURL: 'https://tastiest-dishes.firebaseio.com',
  projectId: 'tastiest-dishes',
  storageBucket: 'tastiest-dishes.appspot.com',
  messagingSenderId: '931027565280',
  appId: '1:931027565280:web:17d8c46ffbb3e25a5cae85',
  measurementId: 'G-V4J43XNT77',
};

// Setup guide from here:
// https://colinhacks.com/essays/nextjs-firebase-authentication
if (typeof window !== 'undefined' && !firebaseClient.apps.length) {
  firebaseClient.initializeApp(CLIENT_CONFIG);
  firebaseClient
    .auth()
    .setPersistence(firebaseClient.auth.Auth.Persistence.SESSION);
  (window as any).firebase = firebaseClient;
}

const db = firebaseClient.firestore();

export { firebaseClient, db };
