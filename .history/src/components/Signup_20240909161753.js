// src/components/Signup.js
import React from 'react';
import GoogleLoginButton from './GoogleLoginButton';  // Import Google Login Button

const Signup = () => {
  return (
    <div className="signup-container">
      <h2>Sign Up with Google</h2>
      <GoogleLoginButton />
    </div>
  );
};

export default Signup;