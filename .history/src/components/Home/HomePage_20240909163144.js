import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css';

// Importing images
import HeroImage from '../../assets/hero-image.png';
import EventImage from '../../assets/event-image.png';
import UsageImage from '../../assets/usage-image.png';
import FooterImage from '../../assets/footer-image.png';  // Importing footer image

// Importing social media icons
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope, FaLinkedin } from 'react-icons/fa';

// Firebase imports
import { auth, onAuthStateChange } from '../firebase';  // Firebase auth and listener
import { signOut } from 'firebase/auth';

const HomePage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();  // Hook to navigate programmatically

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChange((authUser) => {
      if (authUser) {
        setUser(authUser);  // User is logged in
      } else {
        setUser(null);  // No user is logged in
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');  // Redirect to login after logout
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

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
          {user ? (
            <>
              <li>{user.displayName}</li> {/* Display logged-in user's name */}
              <li><button onClick={handleLogout} className="logout-btn">Logout</button></li> {/* Logout button */}
            </>
          ) : (
            <>
              <li><Link to="/signup">Inscription</Link></li>
              <li><Link to="/login">Login</Link></li>
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

      {/* Other sections like "Envolée Section", "Community Events Section", etc. */}
      {/* Add your other sections here... */}

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
          <div className="footer-section">
            <h4>Politique de confidentialité & CGV</h4>
            <ul>
              <li><Link to="/privacy">Politique de confidentialité</Link></li>
              <li><Link to="/terms">CGV</Link></li>
            </ul>
          </div>
        </div>
        <p>Copyright © 2023 Oweke</p>
        <img src={FooterImage} alt="Footer Decoration" className="footer-image" />
      </footer>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-container">
          <h3>S'inscrire au Newsletter</h3>
          <form className="newsletter-form">
            <input type="email" placeholder="Votre adresse email" />
            <button type="submit">S'inscrire</button>
          </form>
        </div>
        <div className="newsletter-social">
          <h3>Rejoindre notre Communauté</h3>
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
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;