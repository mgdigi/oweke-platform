// src/utils/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, sendEmailVerification } from "firebase/auth";

const firebaseConfig = {
  // Your Firebase configuration here
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, sendEmailVerification };