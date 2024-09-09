// src/components/GoogleLoginButton.js
import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from './firebase';  
import { useNavigate } from 'react-router-dom';  

const GoogleLoginButton = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log('User logged in:', result.user);
      navigate('/');
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