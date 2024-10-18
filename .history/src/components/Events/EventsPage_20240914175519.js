import React from 'react';
import './EventsPage.css';
import EventHeroImage from '../../assets/event-hero.png'; // Updated path as necessary
import EventCardImage from '../../assets/event-card.png'; // Updated image for event card
import FooterImage from '../../assets/footer-image.png'; // Updated path as necessary

const EventsPage = () => {
  return (
    <div className="events-page">
      {/* Navigation Bar */}
      <nav className="navbar">
        <h1 className="logo-text">OWEKE</h1>
        <ul className="nav-links">
          <li><a href="/">Accueil</a></li>
          <li><a href="/events">Community Events</a></li>
          <li><a href="/counseling">Conseiller Love</a></li>
          <li><a href="/blog">Blog</a></li>
          
        </ul>
        <button className="get-app-button">Get App</button>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-image">
          <img src={EventHeroImage} alt="Events" />
        </div>
      </header>

      {/* Events Description */}
      <section className="events-description">
        <h2>Events</h2>
        <p>
          Les Community Events de Oweke sont des événements en ligne passionnants et instructifs, 
          organisés par des coachs et des experts renommés dans le domaine de la vie amoureuse. 
          Ces événements sont une occasion unique pour les célibataires de se connecter, 
          d'échanger des idées et de discuter de sujets liés à la vie amoureuse.
        </p>
      </section>

      {/* Search Filters */}
      <section className="search-filters">
        <h3>Rajouter des filtres de recherches :</h3>
        <div className="filters">
          <div className="filter-item">
            <label>Région:</label>
            <select>
              <option>Voir liste</option>
              {/* Add options here */}
            </select>
          </div>
          <div className="filter-item">
            <label>Catégorie:</label>
            <select>
              <option>Voir liste</option>
              {/* Add options here */}
            </select>
          </div>
          <div className="filter-item">
            <label>Rencontres:</label>
            <p>Entre Hommes et Femmes</p>
          </div>
          <div className="filter-item">
            <label>Quand:</label>
            <p>Le mercredi, vendredi, samedi</p>
          </div>
          <div className="filter-item">
            <label>Horaires:</label>
            <p>19:00 à 20:00, 21:00 à 22:00, 23:00 à 24:00</p>
          </div>
          <div className="filter-item">
            <label>Tranches d'âges:</label>
            <select>
              <option>Voir liste</option>
              {/* Add options here */}
            </select>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="upcoming-events">
        <h3>Évènements à venir :</h3>
        <div className="events-list">
          <div className="event-card">
            <img src={EventCardImage} alt="Event" />
            <h4>Rencontres : entre hommes et femmes</h4>
            <p>Quand : vendredi 14 avril 2023</p>
            <p>Horraire : de 20:00 à 22:00</p>
            <p>Tranches d'âges : 45 à 54 ans Soirée célibataires encadrée par Oweke</p>
            <button className="btn">Reserver Votre Ticket</button>
            <button className="btn">En savoir plus</button>
            <div className="advertisement">
              <p>Publicité ici</p>
            </div>
          </div>
          <div className="event-card">
            <img src={EventCardImage} alt="Event" />
            <h4>Rencontres : entre hommes et femmes</h4>
            <p>Quand : vendredi 14 avril 2023</p>
            <p>Horraire : de 20:00 à 22:00</p>
            <p>Tranches d'âges : 45 à 54 ans Soirée célibataires encadrée par Oweke</p>
            <button className="btn">Reserver Votre Ticket</button>
            <button className="btn">En savoir plus</button>
            <div className="advertisement">
              <p>Publicité ici</p>
            </div>
          </div>
          <div className="event-card">
            <img src={EventCardImage} alt="Event" />
            <h4>Rencontres : entre hommes et femmes</h4>
            <p>Quand : vendredi 14 avril 2023</p>
            <p>Horraire : de 20:00 à 22:00</p>
            <p>Tranches d'âges : 45 à 54 ans Soirée célibataires encadrée par Oweke</p>
            <button className="btn">Reserver Votre Ticket</button>
            <button className="btn">En savoir plus</button>
            <div className="advertisement">
              <p>Publicité ici</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <ul>
              <li><a href="/about">À propos</a></li>
              <li><a href="/live-dating">Live Dating</a></li>
              <li><a href="/events">Community Events</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
            <ul>
              <li><a href="/signin">Se connecter</a></li>
              <li><a href="/partners">Espace Partenaires</a></li>
              <li><a href="/signup">S’inscrire</a></li>
            </ul>
            <ul>
              <li><a href="/privacy">Politique de confidentialité</a></li>
              <li><a href="/terms">CGV</a></li>
            </ul>
          </div>
          <p>Copyright © 2023 Oweke</p>
          <img src={FooterImage} alt="Footer Decoration" className="footer-image" />
        </div>
      </footer>
    </div>
  );
};

export default EventsPage;