import React from 'react';
import { auth, googleProvider } from './firebase';  // Import Firebase auth and Google Provider

const GoogleLoginButton = () => {
  const signInWithGoogle = async () => {
    try {
      await auth.signInWithPopup(googleProvider);
      console.log('Successfully logged in with Google!');
      // Redirect user after login or show success message
    } catch (error) {
      console.error('Google Sign-In error: ', error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login with Google</h2>
      <button className="google-login-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
};

export default GoogleLoginButton;