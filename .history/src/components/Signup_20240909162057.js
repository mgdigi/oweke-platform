// src/components/Signup.js
import React from 'react';
import GoogleLoginButton from './GoogleLoginButton';  // Import GoogleLoginButton

const Signup = () => {
  return (
    <div className="signup-container">
      <h2>Sign Up with Google</h2>
      <GoogleLoginButton />  {/* Google Sign-Up Button */}
    </div>
  );
};

export default Signup;