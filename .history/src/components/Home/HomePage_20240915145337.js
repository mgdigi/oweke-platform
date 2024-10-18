import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css';

// Importing Firebase methods
import { auth, onAuthStateChange } from '../firebase';  
import { signOut, reload } from 'firebase/auth';  // Import Firebase methods

// Importing images and icons
import HeroImage from '../../assets/heroimage.png';  // Correct image import
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
          <button className="cta-button" onClick={() => navigate('/events')}>En Profiter</button>
          
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
          <img src={HeroImage} alt="Hero" className="img-same-size" />  {/* Corrected HeroImage usage */}
        </div>
      </header>

      {/* Envolée Section */}
      <section className="envolee-section">
        <h2>Envolez-vous à la rencontre de <br /><span className="underline">Votre âme sœur</span></h2>
        
        <p>
          L'amour est une aventure qui mérite d'être vécue, peu importe où on la trouve.
        </p>
        <p>
          Quel que soit le chemin que vous choisissez pour trouver l'amour, c'est une décision personnelle qui peut vous apporter beaucoup de joie et de bonheur.
        </p>
        <p>
          C'est une aventure qui peut vous amener dans des endroits inattendus et vous permettre de vivre des moments magiques.
        </p>
        <p>
          N'ayez pas peur de prendre le risque de trouver l'amour et de suivre votre cœur - vous pourriez bien trouver quelque chose de merveilleux.
        </p>
        <p>
          Alors, qu'attendez-vous ? Entrez dans l'aventure de la recherche de l'amour et vivez les plus beaux moments de votre vie avec Oweke.
        </p>

        <button className="cta-button" onClick={() => navigate('/events')}>Participer À Un Événement</button>
      </section>

      {/* Community Events Section */}
      <section className="community-events">
        <div className="content">
          <h2>Faites partie de notre prochain <br /><span className="underline">Community Events.</span></h2>
          <p>
            Participez à nos prochains événements communautaires et rencontrez d’autres personnes comme vous. 
            <br /><strong>Partagez, discutez et trouvez peut-être votre partenaire de vie !</strong>
          </p>
          <button className="cta-button" onClick={() => navigate('/events')}>Découvrez nos Community Events</button>
        </div>
        <img src={EventImage} alt="Community Events" className="section-image img-same-size" />
      </section>

      {/* Simple to Use Section */}
      <section className="simple-use">
        <div className="content">
          <h3>Et c’est Simple <span className="underline">à Utiliser!</span></h3>
          <p>Grâce à Oweke ! <br />Vitalizez votre vie amoureuse.</p>
          <button className="cta-button" onClick={() => navigate('/events')}>Accéder à Oweke Online</button>
        </div>
        <div className="image">
          <img src={UsageImage} alt="Simple to Use" className="section-image img-same-size" />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer1">
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
  <p>Copyright © 2023 Vizmeet</p>
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