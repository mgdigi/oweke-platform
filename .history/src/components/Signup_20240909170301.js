// src/components/Signup.js
import React, { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider, sendEmailVerification } from './firebase';

const Signup = () => {
  const [verificationSent, setVerificationSent] = useState(false);

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log('User signed up:', result.user);

      // Send email verification
      if (result.user) {
        await sendEmailVerification(result.user);
        setVerificationSent(true);  // Indicate that the verification email was sent
      }
    } catch (error) {
      console.error('Google sign-up error:', error);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up with Google</h2>
      <button onClick={handleGoogleSignup} className="google-signup-btn">
        Sign up with Google
      </button>

      {/* Show verification message */}
      {verificationSent && (
        <p className="verification-message">A verification email has been sent. Please check your inbox to verify your email address.</p>
      )}
    </div>
  );
};

export default Signup;