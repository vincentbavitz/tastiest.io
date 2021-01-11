export interface IFirestore {
  data: any;
}

const CERT = {
  privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  projectId: process.env.FIREBASE_PROJECT_ID,
};

const FIREBASE = {
  CLIENT_CONFIG: {
    apiKey: 'AIzaSyDA4BF1Q3us1swo2FYfZWOWCZqyugIgjyk',
    authDomain: 'tastiest-dishes.firebaseapp.com',
    databaseURL: 'https://tastiest-dishes.firebaseio.com',
    projectId: 'tastiest-dishes',
    storageBucket: 'tastiest-dishes.appspot.com',
    messagingSenderId: '931027565280',
    appId: '1:931027565280:web:17d8c46ffbb3e25a5cae85',
    measurementId: 'G-V4J43XNT77',
  },
  // ADMIN_CONFIG: {
  //   credential: firebaseAdmin.credential.cert(CERT),
  //   databaseURL: process.env.FIREBASE_DATABASE_URL,
  // },
  // react-redux-firebase config
  RRF_CONFIG: {
    userProfile: 'users',
  },
};

export default FIREBASE;
