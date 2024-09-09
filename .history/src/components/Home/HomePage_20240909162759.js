// src/components/Home/HomePage.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, onAuthStateChange } from '../firebase';  // Import Firebase auth
import './HomePage.css';

// Importing images
import HeroImage from '../../assets/hero-image.png';
import FooterImage from '../../assets/footer-image.png';  // Footer image

// Importing social media icons
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const HomePage = () => {
  const [user, setUser] = useState(null);  // State to track the logged-in user

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChange((authUser) => {
      if (authUser) {
        setUser(authUser);  // User is logged in
      } else {
        setUser(null);  // User is logged out
      }
    });

    // Cleanup the listener on unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo-text">
          Oweke
        </div>
        <ul className="nav-links">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/events">Community Events</Link></li>
          <li><Link to="/counseling">Conseiller Love</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          {!user && <li><Link to="/signup">Inscription</Link></li>}  {/* Show only if user is not logged in */}
          {user && (
            <>
              <li>{user.displayName}</li>  {/* Show user's name */}
              <li><Link to="/dashboard">Dashboard</Link></li>  {/* Show dashboard when logged in */}
            </>
          )}
        </ul>
        <button className="get-app-button">Telecharger</button>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
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
        <p>Copyright © 2023 Oweke</p>
        <img src={FooterImage} alt="Footer Decoration" className="footer-image" />
      </footer>
    </div>
  );
};

export default HomePage;