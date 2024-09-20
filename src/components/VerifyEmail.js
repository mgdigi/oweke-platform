// src/components/VerifyEmail.js
import React from 'react';
import './VerifyEmail.css'; // Optional: Create this CSS file for styling

const VerifyEmail = () => {
  return (
    <div className="verify-email-container">
      <h2>Vérifiez votre e-mail</h2>
      <p>
        Un e-mail de vérification a été envoyé à votre adresse e-mail. 
        Veuillez vérifier votre boîte de réception pour confirmer votre inscription.
      </p>
      <p>
        Si vous n'avez pas reçu l'e-mail, vérifiez votre dossier de spam ou 
        <a href="/signup" className="resend-link"> renvoyez le message</a>.
      </p>
    </div>
  );
};

export default VerifyEmail;