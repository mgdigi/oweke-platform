// GoogleLoginButton.js
import React from 'react';
import { auth, googleProvider } from './firebase';

const GoogleLoginButton = () => {
  const handleGoogleLogin = async () => {
    try {
      const result = await auth.signInWithPopup(googleProvider);
      console.log("User logged in:", result.user);
    } catch (error) {
      console.error("Error during Google login:", error.message);
    }
  };

  return (
    <div>
      <h2>Login with Google</h2>
      <button onClick={handleGoogleLogin} style={{ padding: "10px 20px", backgroundColor: "#4285F4", color: "#fff", border: "none", borderRadius: "5px", fontSize: "16px" }}>
        Sign in with Google
      </button>
    </div>
  );
};

export default GoogleLoginButton;