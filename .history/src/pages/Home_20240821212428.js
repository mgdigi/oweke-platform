// src/components/Home/HomePage.js
import React from 'react';
import './HomePage.css'; // You'll create this CSS file for styles
import Header from  '../components/header';

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <Header />

      {/* Hero Section */}
      <header className="hero-section">
        <h1>Une Rencontre <br />Depuis Ta Webcam</h1>
        <p>Vizmect : Votre Destination Pour L'Amour Et La Romance. <br />
          Connectez-Vous Avec Votre Partenaire Idéal Sur Vizmect.</p>
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
        <p>Grâce à Vizmect ! <br />Vitalizez votre vie amoureuse.</p>
        <button className="cta-button">Accéder à Vizmect Online</button>
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