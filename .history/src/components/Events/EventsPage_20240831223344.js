import React from 'react';
import { Link } from 'react-router-dom';
import './EventsPage.css';
import FooterImage from '../../assets/footer-image.png';
// Importing images
import OwekeLogo from '../../assets/oweke-logo.png';  
import EventHeroImage from '../../assets/event-hero.png';  
import EventCardImage from '../../assets/event-card.png';  // Image for event cards

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
        <p className="event-description">
          Nos coachs et experts offrent des conseils et des astuces précieux pour vous aider à réussir dans votre vie amoureuse. Ils couvrent des sujets allant de la communication et la confiance en soi à la gestion des relations et la compréhension des différents types de personnalité.
        </p>
        <p className="event-description">
          Rejoignez-nous pour les Community Events de Oweke et laissez-nous vous aider à découvrir de nouvelles possibilités et à trouver la personne qui vous convient. Inscrivez-vous dès maintenant pour rejoindre notre communauté dynamique et interactive.
        </p>
      </section>

      {/* Upcoming Events Section */}
      <section className="upcoming-events">
        <h2>Évènements à venir :</h2>
        <div className="events-list">
          <div className="event-card">
            <img src={EventCardImage} alt="Event 1" />
            <h3>Rencontres : entre hommes et femmes</h3>
            <p>Quand : vendredi 14 avril 2023</p>
            <p>Horaire : de 20:00 à 22:00</p>
            <p>Tranche d'âges : 45 à 54 ans Soirée célibataires encadrée par Oweke</p>
            <button className="cta-button-small">Réserver Votre Ticket</button>
          </div>
          <div className="event-card">
            <img src={EventCardImage} alt="Event 2" />
            <h3>Rencontres : entre hommes et femmes</h3>
            <p>Quand : vendredi 14 avril 2023</p>
            <p>Horaire : de 20:00 à 22:00</p>
            <p>Tranche d'âges : 45 à 54 ans Soirée célibataires encadrée par Oweke</p>
            <button className="cta-button-small">Réserver Votre Ticket</button>
          </div>
          <div className="event-card">
            <img src={EventCardImage} alt="Event 3" />
            <h3>Rencontres : entre hommes et femmes</h3>
            <p>Quand : vendredi 14 avril 2023</p>
            <p>Horaire : de 20:00 à 22:00</p>
            <p>Tranche d'âges : 45 à 54 ans Soirée célibataires encadrée par Oweke</p>
            <button className="cta-button-small">Réserver Votre Ticket</button>
          </div>
        </div>
      </section>

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
        <p>Copyright © 2023 oweke</p>
        <img src={FooterImage} alt="Footer Decoration" className="footer-image" />
      </footer>
    </div>
  );
};

export default EventsPage;