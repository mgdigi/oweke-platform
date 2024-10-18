import React from 'react';
import { Link } from 'react-router-dom';
import './Counseling.css';  // Assuming you will create this CSS file

import CounselingImage from '../../assets/counseling-image.png';  // Replace with the actual path to your image
import OfferImage from '../../assets/offer-image.png';  // Replace with the actual path to your image
e

const Counseling = () => {
  return (
    <div className="counseling-container">
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
        <div className="hero-image">
          <img src={CounselingImage} alt="Conseiller Love" />
        </div>
      </header>

      {/* Main Section */}
      <section className="main-section">
        <h2>Bénéficier D’un Rendez-Vous Gratuit De 10 Minutes:</h2>
        <p>
          Profitez d'une consultation gratuite de 10 minutes pour discuter de vos préoccupations amoureuses. 
          Cette offre exclusive est une opportunité unique d'obtenir des conseils personnalisés sans frais. 
          Réservez votre créneau dès maintenant!
        </p>
        <button className="cta-button">Réservez Votre Créneau Gratuit</button>

        <div className="offer-section">
          <img src={OfferImage} alt="Offer" />
          <div className="offer-content">
            <h3>Offre du Moment:</h3>
            <p>
              Au-delà des 10 minutes gratuites, notre offre spéciale vous propose un coaching prolongé de 45 minutes 
              pour seulement 50 euros. Obtenez des conseils approfondis et des recommandations personnalisées pour 
              nourrir votre vie amoureuse.
            </p>
            <button className="cta-button">Réservez Votre Créneau De 45 Min Pour 50€</button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h3>Pourquoi Choisir Nos Conseillers Love:</h3>
        <ul>
          <li><strong>Expertise Professionnelle:</strong> Nos conseillers sont des professionnels expérimentés dans le domaine des relations et de l'amour.</li>
          <li><strong>Confidentialité Assurée:</strong> Votre vie privée est notre priorité. Toutes les sessions sont confidentielles et sécurisées.</li>
          <li><strong>Approche Personnalisée:</strong> Chaque séance est adaptée à vos besoins spécifiques, vous offrant des conseils pertinents.</li>
        </ul>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h3>Comment Ça Marche:</h3>
        <ol>
          <li>Réservez Votre Créneau Gratuit: Choisissez un horaire qui vous convient pour une consultation de 10 minutes gratuite.</li>
          <li>Rencontrez Votre Conseiller Love: Connectez-vous en toute confidentialité et commencez votre voyage vers des relations épanouissantes.</li>
          <li>Profitez de l'Offre Spéciale: Envisagez un coaching prolongé de 45 minutes pour un accompagnement approfondi.</li>
        </ol>
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
        <p>Copyright © 2023 Oweke</p>

      </footer>
    </div>
  );
};

export default Counseling;