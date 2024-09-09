// Import Firebase and necessary services from Firebase SDK
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Firebase configuration using your provided credentials
const firebaseConfig = {
  apiKey: "AIzaSyDSfDVE4F7OP7dqB98n7EezHrmat8FBl4w",  // Replace with your API key
  authDomain: "oweke-adac2.firebaseapp.com",          // Your Auth Domain
  projectId: "oweke-adac2",                           // Your Project ID
  storageBucket: "oweke-adac2.appspot.com",           // Your Storage Bucket
  messagingSenderId: "1036018312876",                 // Your Messaging Sender ID
  appId: "1:1036018312876:web:abc123def456",          // Your App ID
  measurementId: "G-XXXXXXX"                          // Your Measurement ID (Optional)
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Google Provider
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;