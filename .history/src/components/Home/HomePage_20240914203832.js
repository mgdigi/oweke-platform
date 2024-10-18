import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css';

// Importing Firebase methods
import { auth, onAuthStateChange } from '../firebase';  
import { signOut, reload } from 'firebase/auth';  // Import Firebase methods

// Importing images and icons
import HeroImage from '../../assets/heroimage.png';  // Ensure the image is correctly imported
import EventImage from '../../assets/event-image.png';
import UsageImage from '../../assets/usage-image.png';

import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const HomePage = () => {
  const [user, setUser] = useState(null);  // Track logged-in user state
  const [emailVerified, setEmailVerified] = useState(false);  // Track email verification state
  const navigate = useNavigate();  // Hook to navigate programmatically

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChange((authUser) => {
      if (authUser) {
        setUser(authUser);
        setEmailVerified(authUser.emailVerified);  // Check email verification status
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // Polling to check for email verification every 5 seconds
    const checkEmailVerification = () => {
      if (user && !emailVerified) {
        reload(user)  // Reload the user's data from Firebase
          .then(() => {
            if (user.emailVerified) {
              setEmailVerified(true);
              navigate('/');  // Redirect to home page after email is verified
            }
          })
          .catch((error) => console.error('Error reloading user:', error));
      }
    };

    const interval = setInterval(checkEmailVerification, 5000);  // Check every 5 seconds

    return () => clearInterval(interval);  // Clean up interval on unmount
  }, [user, emailVerified, navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);  // Sign the user out
      navigate('/login');  // Redirect to login page after logout
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="home-container">
      {/* Email Verification Warning */}
      {!emailVerified && user && (
        <div className="email-verification-warning">
          <p>Please verify your email address to access all features of the site.</p>
        </div>
      )}

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo-text">Oweke</div>
        <ul className="nav-links">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/events">Community Events</Link></li>
          <li><Link to="/counseling">Conseiller Love</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          
          {!user ? (
            <>
              <li><Link to="/signup">Inscription</Link></li>
              <li><Link to="/login">Login</Link></li>
            </>
          ) : (
            <>
              <li>{user.displayName}</li>  {/* Show logged-in user's name */}
              <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>  {/* Logout button */}
            </>
          )}
        </ul>
        <button className="get-app-button">Telecharger</button>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Une Rencontre <br /><span className="underline">Depuis Ta Webcam</span></h1>
          <p>Oweke : Votre Destination Pour L'Amour Et La Romance. <br />
            Connectez-Vous Avec Votre Partenaire Idéal Sur Oweke.</p>
          <button className="cta-button">En Profiter</button>
          
          {/* Social Media Links */}
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="mailto:info@oweke.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="heroimage">
          <img src={HeroImage} alt="Hero" className="img-same-size" />  {/* Use HeroImage correctly */}
        </div>
      </header>

      {/* Other Sections */}
      {/* ... */}
    </div>
  );
};

export default HomePage;