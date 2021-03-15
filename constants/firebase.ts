import { FirebaseAuthError } from '../types/firebase';

export interface IFirestore {
  data: any;
}

const ERROR_MESSAGES = {
  [FirebaseAuthError.INVALID_EMAIL]: 'Please enter a valid email address.',
  [FirebaseAuthError.INVALID_PASSWORD]:
    'Please include at least six characters in your password.',
  [FirebaseAuthError.EMAIL_ALREADY_EXISTS]:
    'An account already exists wiith this email.',
  [FirebaseAuthError.USER_NOT_FOUND]:
    "We couldn't find your account. Why not sign up now?",
  [FirebaseAuthError.OTHER]: 'There was an unknown error.',
};

const FIREBASE = {
  CLIENT_CONFIG: {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FNEXT_PUBLIC_IREBASE_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  },
  RRF_CONFIG: {},
  ERROR_MESSAGES,
  MAX_LOGIN_ATTEMPTS: 3,
  ORDER_REQUEST_MAX_AGE_MS: 86400000, // 1 day,
};

export default FIREBASE;
