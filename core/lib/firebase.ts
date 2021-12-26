import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmkRDqR7l_70hPNbf3gK1WlDGYp97sZlA",
  authDomain: "elroichurch-349a9.firebaseapp.com",
  projectId: "elroichurch-349a9",
  storageBucket: "elroichurch-349a9.appspot.com",
  messagingSenderId: "672844582935",
  appId: "1:672844582935:web:e6d94000b548304c488c52",
  measurementId: "G-62V3RNF86Q",
};

const firebaseApp = initializeApp(firebaseConfig);

const firebaseAuth = getAuth(firebaseApp);

export { firebaseApp, firebaseAuth };
