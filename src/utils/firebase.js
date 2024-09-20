// src/utils/firebase.js

import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider, sendEmailVerification } from "firebase/auth";

const firebaseConfig = {
  // Your Firebase configuration here
};

// Check if Firebase has already been initialized
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];  // Use the existing initialized app
}

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, sendEmailVerification };