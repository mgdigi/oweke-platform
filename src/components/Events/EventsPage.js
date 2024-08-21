import React from 'react';
import './EventsPage.css';

// Import images
import EventImage1 from '../../assets/event-image1.png';  // Replace with actual image paths
import EventImage2 from '../../assets/event-image2.png';
import EventImage3 from '../../assets/event-image3.png';

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
        </ul>
        <button className="get-app-button">Get App</button>
      </nav>

      {/* Header Section */}
      <header className="header-section">
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
            <button className="cta-button-small">Reserver Votre Ticket</button>
          </div>
          <div className="event-card">
            <img src={EventImage2} alt="Event 2" />
            <p><strong>Rencontres : entre hommes et femmes</strong></p>
            <p>Quand : vendredi 14 avril 2023</p>
            <p>Horaires : de 20:00 à 22:00</p>
            <p>Tranches d'âges : 45 à 54 ans</p>
            <button className="cta-button-small">Reserver Votre Ticket</button>
          </div>
          <div className="event-card">
            <img src={EventImage3} alt="Event 3" />
            <p><strong>Rencontres : entre hommes et femmes</strong></p>
            <p>Quand : vendredi 14 avril 2023</p>
            <p>Horaires : de 20:00 à 22:00</p>
            <p>Tranches d'âges : 45 à 54 ans</p>
            <button className="cta-button-small">Reserver Votre Ticket</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <ul>
            <li><a href="/about">À propos</a></li>
            <li><a href="/events">Community Events</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default EventsPage;