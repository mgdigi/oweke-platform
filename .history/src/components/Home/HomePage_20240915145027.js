import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css';

// Importing Firebase methods
import { auth, onAuthStateChange } from '../firebase';  
import { signOut, reload } from 'firebase/auth';  

// Importing images and icons
import HeroImage from '../../assets/heroimage.png';  
import EventImage from '../../assets/event-image.png';
import UsageImage from '../../assets/usage-image.png';

import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const HomePage = () => {
  const [user, setUser] = useState(null);
  const [emailVerified, setEmailVerified] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChange((authUser) => {
      if (authUser) {
        setUser(authUser);
        setEmailVerified(authUser.emailVerified);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const checkEmailVerification = () => {
      if (user && !emailVerified) {
        reload(user)
          .then(() => {
            if (user.emailVerified) {
              setEmailVerified(true);
              navigate('/');
            }
          })
          .catch((error) => console.error('Error reloading user:', error));
      }
    };

    const interval = setInterval(checkEmailVerification, 5000);
    return () => clearInterval(interval);
  }, [user, emailVerified, navigate]);

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
      {!emailVerified && user && (
        <div className="email-verification-warning">
          <p>Please verify your email address to access all features of the site.</p>
        </div>
      )}

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
              <li>{user.displayName}</li>
              <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
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
          <img src={HeroImage} alt="Hero" className="img-same-size" />
        </div>
      </header>

      {/* Envolée Section */}
      <section className="envolee-section">
        <h2>Envolez-vous à la rencontre de <br /><span className="underline">Votre âme sœur</span></h2>
        <p>
          L'amour est une aventure qui mérite d'être vécue, peu importe où on la trouve.
        </p>
        <p>
          N'ayez pas peur de prendre le risque de trouver l'amour et de suivre votre cœur - vous pourriez bien trouver quelque chose de merveilleux.
        </p>

        <button className="cta-button" onClick={() => navigate('/events')}>Participer À Un Événement</button>
      </section>

      {/* Community Events Section */}
      <section className="community-events">
        <div className="content">
          <h2>Faites partie de notre prochain <br /><span className="underline">Community Events.</span></h2>
          <p>
            Participez à nos prochains événements communautaires et rencontrez d’autres personnes comme vous. 
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
    </div>
  );
};

export default HomePage;