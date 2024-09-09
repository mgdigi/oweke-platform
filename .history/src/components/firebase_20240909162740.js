// src/components/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDSfDVE4F7OP7dqB98n7EezHrmat8FBl4w",
  authDomain: "oweke-adac2.firebaseapp.com",
  projectId: "oweke-adac2",
  storageBucket: "oweke-adac2.appspot.com",
  messagingSenderId: "1036018312876",
  appId: "1:1036018312876:web:abc123def456",
  measurementId: "G-XXXXXXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Google Provider
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Listen for authentication state changes
export const onAuthStateChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};

export default app;