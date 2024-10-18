// src/components/Login.js
import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from './firebase';  // Import Firebase auth and Google provider
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log('User logged in:', result.user);
      
      // Redirect to the home page after login
      navigate('/');
    } catch (error) {
      console.error('Google login error:', error);
    }
  };

  return (
    <div className="login-page">
      <h2>Login with Google</h2>
      <button onClick={handleGoogleLogin} className="google-login-btn">
        Login with Google
      </button>
    </div>
  );
};

export default Login;