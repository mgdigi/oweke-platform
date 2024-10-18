import React from 'react';
import { signInWithPopup } from 'firebase/auth';  // Import Firebase sign-in method
import { auth, googleProvider } from '../firebase';  // Import Firebase auth and provider

const GoogleLoginButton = () => {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log('User logged in:', result.user);
    } catch (error) {
      console.error('Google sign-in error:', error);
    }
  };

  return (
    <button onClick={handleGoogleLogin} className="google-login-btn">
      Sign in with Google
    </button>
  );
};

export default GoogleLoginButton;