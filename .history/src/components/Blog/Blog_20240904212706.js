import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

// Importing images
import BlogHeroImage from '../../assets/bloghero.png';
import FooterImage from '../../assets/footer-image-left.png'; // Adjusted image path

const Blog = () => {
  return (
    <div className="blog-page">
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
          <li><Link to="/signup">Inscription</Link></li>
          <li><Link to="/partners">Devenir Partenaire</Link></li>
          <li><Link to="/shop">Shop</Link></li>
        </ul>
        <button className="get-app-button">Telecharger</button>
      </nav>

      {/* Blog Hero Section */}
      <header className="blog-hero">
        <div className="hero-content">
          <h1>Explore Our Blog</h1>
          <p>Discover the latest insights, tips, and stories on love, relationships, and dating.</p>
        </div>
        <div className="hero-image">
          <img src={BlogHeroImage} alt="Blog" />
        </div>
      </header>

      {/* Blog Cards Section */}
      <section className="blog-cards">
        <div className="blog-card">
          <h2>Que pensez-vous des rencontres amoureuses sur internet ?</h2>
          <p>
            5 Avril 2023 - Blog, Rencontres amoureuses, Séduction, Véritable Amour. <br />
            Découvrez notre avis sur les rencontres amoureuses en ligne et les meilleures pratiques pour réussir.
          </p>
          <button>Continue Reading</button>
        </div>
        <div className="blog-card">
          <h2>Que pensez-vous des rencontres amoureuses sur internet ?</h2>
          <p>
            5 Avril 2023 - Blog, Rencontres amoureuses, Séduction, Véritable Amour. <br />
            Découvrez notre avis sur les rencontres amoureuses en ligne et les meilleures pratiques pour réussir.
          </p>
          <button>Continue Reading</button>
        </div>
        <div className="blog-card">
          <h2>Que pensez-vous des rencontres amoureuses sur internet ?</h2>
          <p>
            5 Avril 2023 - Blog, Rencontres amoureuses, Séduction, Véritable Amour. <br />
            Découvrez notre avis sur les rencontres amoureuses en ligne et les meilleures pratiques pour réussir.
          </p>
          <button>Continue Reading</button>
        </div>
        <div className="blog-card">
          <h2>Que pensez-vous des rencontres amoureuses sur internet ?</h2>
          <p>
            5 Avril 2023 - Blog, Rencontres amoureuses, Séduction, Véritable Amour. <br />
            Découvrez notre avis sur les rencontres amoureuses en ligne et les meilleures pratiques pour réussir.
          </p>
          <button>Continue Reading</button>
        </div>
        <div className="blog-card">
          <h2>Que pensez-vous des rencontres amoureuses sur internet ?</h2>
          <p>
            5 Avril 2023 - Blog, Rencontres amoureuses, Séduction, Véritable Amour. <br />
            Découvrez notre avis sur les rencontres amoureuses en ligne et les meilleures pratiques pour réussir.
          </p>
          <button>Continue Reading</button>
        </div>
        <div className="blog-card">
          <h2>Que pensez-vous des rencontres amoureuses sur internet ?</h2>
          <p>
            5 Avril 2023 - Blog, Rencontres amoureuses, Séduction, Véritable Amour. <br />
            Découvrez notre avis sur les rencontres amoureuses en ligne et les meilleures pratiques pour réussir.
          </p>
          <button>Continue Reading</button>
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
        <p>Copyright © 2023 Oweke</p>
        <img src={FooterImage} alt="Footer Decoration" className="footer-image" />
      </footer>
    </div>
  );
};

export default Blog;