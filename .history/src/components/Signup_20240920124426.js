// src/components/Signup.js
import React, { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider, sendEmailVerification } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // Ensure the correct path

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
    <div className="signup-container">
      <div className="illustration">
        <img sr
      </div>
      <div className="signup-form">
        <h2>Rejoignez oweke</h2>
        <form>
          <label htmlFor="fullName">Nom Complet :</label>
          <input type="text" id="fullName" required />

          <label htmlFor="email">E-mail :</label>
          <input type="email" id="email" required />

          <label htmlFor="password">Mot de passe :</label>
          <input type="password" id="password" required />

          <label htmlFor="confirmPassword">Confirmer le Mot de passe :</label>
          <input type="password" id="confirmPassword" required />

          <div className="terms">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              J'accepte les <button className="link-button" onClick={() => console.log('Handle terms click')}>[Termes et Conditions]</button>
            </label>
          </div>

          <button type="submit" className="signup-btn">S'inscrire</button>
        </form>

        <p>Déjà membre ? <button className="link-button" onClick={() => console.log('Handle login click')}>[Connectez-vous ici]</button></p>

        <div className="social-signup">
          <p>Inscrivez-vous avec :</p>
          <button onClick={handleGoogleSignup} className="google-signup-btn">Google</button>
        </div>

        {verificationSent && (
          <p className="verification-message">
            Un e-mail de vérification a été envoyé. Veuillez vérifier votre boîte de réception.
          </p>
        )}
      </div>
    </div>
  );
};

export default Signup;