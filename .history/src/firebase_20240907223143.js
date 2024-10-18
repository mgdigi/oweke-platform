// Import Firebase
import firebase from 'firebase/app';
import 'firebase/auth';  // Import Firebase Authentication

// Firebase configuration
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
firebase.initializeApp(firebaseConfig);

// Export Firebase authentication module
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export default firebase;