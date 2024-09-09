// src/components/Home/HomePage.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css';
import { auth, onAuthStateChange, signOut } from '../firebase';  // Import Firebase auth methods

// Importing images and icons
import HeroImage from '../../assets/hero-image.png';
import FooterImage from '../../assets/footer-image.png';
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const HomePage = () => {
  const [user, setUser] = useState(null);
  const [emailVerified, setEmailVerified] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChange((authUser) => {
      if (authUser) {
        setUser(authUser);
        setEmailVerified(authUser.emailVerified);  // Track email verification status
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="home-container">
      {/* Display a warning if the email is not verified */}
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
          <li><Link to="/contact">Contact</Link></li>
          {!user && (
            <>
              <li><Link to="/signup">Inscription</Link></li>
              <li><Link to="/login">Login</Link></li>
            </>
          )}
          {user && (
            <>
              <li>{user.displayName}</li>  {/* Display the user's name */}
              <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
            </>
          )}
        </ul>
        <button className="get-app-button">Telecharger</button>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Une Rencontre <br /><span className="underline">Depuis Ta Webcam</span></h1>
          <p>Oweke : Votre Destination Pour L'Amour Et La Romance. <br />Connectez-Vous Avec Votre Partenaire Idéal Sur Oweke.</p>
          <button className="cta-button">En Profiter</button>
        </div>
        <div className="hero-image">
          <img src={HeroImage} alt="Hero" />
        </div>
      </header>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Community</h4>
            <ul>
              <li><Link to="/about">À propos</Link></li>
              <li><Link to="/live-dating">Live Dating</Link></li>
              <li><Link to="/events">Community Events</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Collaborateurs</h4>
            <ul>
              <li><Link to="/signin">Se connecter</Link></li>
              <li><Link to="/partners">Espace Partenaires</Link></li>
              <li><Link to="/signup">S’inscrire</Link></li>
            </ul>
          </div>
        </div>
        <p>Copyright © 2023 oweke</p>
        <img src={FooterImage} alt="Footer Decoration" className="footer-image" />
      </footer>
    </div>
  );
};

export default HomePage;