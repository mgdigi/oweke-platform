import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

// Importing social media icons
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';

const HomePage = () => {
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
        </ul>
        <button className="get-app-button">Get App</button>
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
          {/* If you had an image, you would include it here */}
          {/* <img src={HeroImage} alt="Hero Image" /> */}
        </div>
      </header>

      {/* Community Events Section */}
      <section className="community-events">
        <h2>Envolez-vous à la rencontre de <br />Votre âme sœur</h2>
        <p>Participez à nos prochains événements communautaires et rencontrez d'autres personnes comme vous.</p>
        {/* Replace src with the correct image path if using an image */}
        <Link to="/events">
          <button className="cta-button">Participer À Un Événement</button>
        </Link>
      </section>

      {/* Simple to Use Section */}
      <section className="simple-use">
        <h3>Et c’est Simple à Utiliser!</h3>
        <p>Grâce à Oweke ! <br />Vitalizez votre vie amoureuse.</p>
        {/* Replace src with the correct image path if using an image */}
        <button className="cta-button">Accéder à Oweke Online</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <h4>Votre Partenaire de vie.</h4>
          <p>Nous faisons du Dating Plus Humain & Plus Simple</p>
        </div>
        <div className="footer-links">
          <ul>
            <li><Link to="/about">A propos</Link></li>
            <li><Link to="/events">Community Events</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;