import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCgC_LV63s9A4BQoVe0-4qIg9l891AbyM",
  authDomain: "whatsapp-clone-ef4a0.firebaseapp.com",
  projectId: "whatsapp-clone-ef4a0",
  storageBucket: "whatsapp-clone-ef4a0.appspot.com",
  messagingSenderId: "377981373793",
  appId: "1:377981373793:web:067acde6d53ae586410920",
  measurementId: "G-0WD1583YFW"
};

// Initialize Firebase
const app = !firebase.apps.length 
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

    const db = app.firestore();
    const auth = app.auth();
    const provider = new firebase.auth.GoogleAuthProvider();

    export { db, auth, provider};