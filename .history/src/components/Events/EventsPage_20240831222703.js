import React from 'react';
import { Link } from 'react-router-dom';
import './EventsPage.css';

// Importing images
import OwekeLogo from '../../assets/oweke-logo.png';  // Updated logo
import EventHeroImage from '../../assets/event-hero.png';  // Importing the event hero image

// Importing social media icons
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';

const EventsPage = () => {
  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo-text">
          <img src={OwekeLogo} alt="Oweke Logo" />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/events">Community Events</Link></li>
          <li><Link to="/counseling">Conseiller Love</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/signup">Inscription</Link></li>
          <li><Link to="/partners">Devenir Partenaire</Link></li>
          <li><Link to="/shop">Shop</Link></li>
        </ul>
        <button className="get-app-button">Get App</button>
      </nav>

      {/* Event Hero Section */}
      <header className="event-hero">
        <img src={EventHeroImage} alt="Event Hero" />
      </header>

      {/* Event Content */}
      <section className="event-content">
        <h1 className="event-title">Events</h1>
        <p className="event-description">
          Les Community Events de Oweke sont des événements en ligne passionnants et instructifs, organisés par des coachs et des experts renommés dans le domaine de la vie amoureuse. Ces événements sont une occasion unique pour les célibataires de se connecter, d’échanger des idées et de discuter de sujets liés à la vie amoureuse.
        </p>
      </section>

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
  );
};

export default EventsPage;