// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import firebase from 'firebase/compat/app';
// import firestore from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB1DCBDg4nlbkmBBuDaM0tJW3SYeI-YET8',
  authDomain: 'hdrclogin.firebaseapp.com',
  projectId: 'hdrclogin',
  storageBucket: 'hdrclogin.appspot.com',
  messagingSenderId: '24862394208',
  appId: '1:24862394208:web:26264c026903deef21c005',
  measurementId: 'G-6V92T4W020',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const dbService = getFirestore(app);

export { app, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, dbService };
