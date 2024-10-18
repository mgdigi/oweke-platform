// src/components/Signup.js
import React, { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider, sendEmailVerification } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // Ensure the correct path
import SignUpBg from '../assets/signup_bg.jpg';
import OwekeLogo from '../assets/logo.png';
import GoogleLogo from '../assets/Google.svg';

const Signup = () => {
  const navigate = useNavigate();  // Use navigate to redirect
  const [verificationSent, setVerificationSent] = useState(false);

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log('User signed up:', result.user);

      // Send email verification
      if (result.user) {
        await sendEmailVerification(result.user);
        setVerificationSent(true);
        navigate('/verify-email');  // Redirect to a verification info page if needed
      }
    } catch (error) {
      console.error('Google sign-up error:', error);
    }
  };

  return (
    <div className='container_signUp row align-items-center'>
      <div className='left' style={{backgroundImage: `url(${SignUpBg})`}}>
        <h2>Welcome back</h2>
        <p>To keep connected with us provide us with your information</p>
        <button onClick={() => console.log('Handle login click')}>Sign in</button>
      </div>
      <div className='right'>
        <div className='title row align-items-center'>
          <img src={OwekeLogo} alt="logo" />
          <h1>OWEKE</h1>
        </div>
        <form>
          <label htmlFor="fullName">Your name</label>
          <input type="text" id="fullName" placeholder='Enter your name' required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder='Enter your password' required />

          <label htmlFor="confirmPassword">Confirm password</label>
          <input type="password" id="confirmPassword" placeholder='Enter your password' required />

          <div className="terms">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              J'accepte les <button className="link-button" onClick={() => console.log('Handle terms click')}>Termes et Conditions</button>
            </label>
          </div>

          <div className='column align-items-center'>
            <button type="submit" className="signup-btn">Sign up</button>
            <p>Or</p>
            <button onClick={handleGoogleSignup} className="google-signup-btn"><img src={GoogleLogo} alt="google" />Sign up with Google</button>
          </div>
        </form>
      </div>
      {verificationSent && (
          <p className="verification-message">
            Un e-mail de vérification a été envoyé. Veuillez vérifier votre boîte de réception.
          </p>
        )}
    </div>
  );
};

export default Signup;