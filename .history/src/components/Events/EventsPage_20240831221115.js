import React from 'react';
import './EventsPage.css';

// Import images
import EventImage1 from '../../assets/event-image1.png';  // Replace with actual image paths
import EventImage2 from '../../assets/event-image2.png';
import EventImage3 from '../../assets/event-image3.png';

// Importing social media icons (if needed for other sections)
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';

const EventsPage = () => {
  return (
    <div className="events-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <img src="../../assets/oweke-logo.png" alt="Oweke Logo" style={{ height: '50px' }} />
        </div>
        <ul className="nav-links">
          <li><a href="/">Accueil</a></li>
          <li><a href="/events">Community Events</a></li>
          <li><a href="/counseling">Conseiller Love</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/signup">Inscription</a></li>
          <li><a href="/partners">Devenir Partenaire</a></li>
          <li><a href="/shop">Shop</a></li>
        </ul>
        <button className="get-app-button">Get App</button>
      </nav>

      {/* Header Section */}
      <header className="header-section">
        <div className="header-image">
          <img src="../../assets/event-hero.png" alt="Events" />
        </div>
        <h1>Events</h1>
        <p>
          Les Community Events de Oweke sont des événements en ligne passionnants et instructifs, organisés par des coachs et des experts renommés dans le domaine de la vie amoureuse.
          Ces événements sont une occasion unique pour les célibataires de se connecter, d’échanger des idées et de discuter de sujets liés à la vie amoureuse.
        </p>
      </header>

      {/* Upcoming Events Section */}
      <section className="upcoming-events">
        <h2>Évènements à venir :</h2>
        <div className="events-grid">
          <div className="event-card">
            <img src={EventImage1} alt="Event 1" />
            <p><strong>Rencontres : entre hommes et femmes</strong></p>
            <p>Quand : vendredi 14 avril 2023</p>
            <p>Horaires : de 20:00 à 22:00</p>
            <p>Tranches d'âges : 45 à 54 ans</p>
            <button className="event-button">Participer</button>
          </div>
          <div className="event-card">
            <img src={EventImage2} alt="Event 2" />
            <p><strong>Conseils pour un premier rendez-vous réussi</strong></p>
            <p>Quand : samedi 15 avril 2023</p>
            <p>Horaires : de 18:00 à 20:00</p>
            <p>Tranches d'âges : 30 à 40 ans</p>
            <button className="event-button">Participer</button>
          </div>
          <div className="event-card">
            <img src={EventImage3} alt="Event 3" />
            <p><strong>Éviter les erreurs courantes dans les rencontres en ligne</strong></p>
            <p>Quand : dimanche 16 avril 2023</p>
            <p>Horaires : de 19:00 à 21:00</p>
            <p>Tranches d'âges : 35 à 45 ans</p>
            <button className="event-button">Participer</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;