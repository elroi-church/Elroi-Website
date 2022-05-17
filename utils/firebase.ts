// Import the functions you need from the SDKs you need
import firebase, { FirebaseApp, initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

let analytics: Analytics;
let app: FirebaseApp;

// if (!firebase.getApp.length) {
app = initializeApp(firebaseConfig);
// }

// Initialize Firebase
// if (firebase.apps.length === 0) {
// app = initializeApp(firebaseConfig);
// }

if (app.name && typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, analytics };

// import firebase from "firebase/app";
// import 'firebase/analytics';

// const firebaseConfig = {
//   apiKey: '***************',
//   authDomain: '**************',
//   projectId: '**************',
//   storageBucket: '*******************',
//   messagingSenderId: '****************',
//   appId: '*******************',
//   measurementId: '**********',
// };
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }
// const analytics = firebase.analytics;

// export { firebase, analytics };
