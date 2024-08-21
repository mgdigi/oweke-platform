// src/components/Home/HomePage.js
import React from 'react';
import './HomePage.css'; // Ensure this CSS file is correctly linked

// Example: Replace with the path to your actual logo file
import Logo from '../../assets/oweke-logo.png'; 

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <img src={Logo} alt="Oweke Logo" style={{ height: '40px' }} />
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

      {/* Hero Section */}
      <header className="hero-section">
        <h1>Une Rencontre <br />Depuis Ta Webcam</h1>
        <p>Oweke : Votre Destination Pour L'Amour Et La Romance. <br />
          Connectez-Vous Avec Votre Partenaire Idéal Sur Oweke.</p>
        <button className="cta-button">En Profiter</button>
      </header>

      {/* Sections */}
      <section className="community-events">
        <h2>Envolez-vous à la rencontre de <br />Votre âme sœur</h2>
        <p>Participez à nos prochains événements communautaires et rencontrez d'autres personnes comme vous.</p>
        <button className="cta-button">Participer À Un Événement</button>
      </section>

      <section className="community-store">
        <h3>Visitez le Community Store!</h3>
        <button className="cta-button">Visitez Community Shop</button>
      </section>

      <section className="simple-use">
        <h3>Et c’est Simple à Utiliser!</h3>
        <p>Grâce à Oweke ! <br />Vitalizez votre vie amoureuse.</p>
        <button className="cta-button">Accéder à Oweke Online</button>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <h4>Votre Partenaire de vie.</h4>
          <p>Nous faisons du Dating Plus Humain & Plus Simple</p>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="/about">A propos</a></li>
            <li><a href="/events">Community Events</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;