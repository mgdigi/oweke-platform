import React from 'react';
import './Blog.css';

// Importing images
import BlogHero from '../../assets/bloghero.png';
import FooterImage from '../../assets/footer-image-left.png'; // Correctly importing footer image

const Blog = () => {
  return (
    <div className="blog-page">
      {/* Blog Hero Section */}
      <header className="blog-hero">
        <div className="hero-content">
          <h1>Explore Our Blog</h1>
          <p>Discover the latest insights, tips, and stories on love, relationships, and dating.</p>
        </div>
        <div className="hero-image">
          <img src={BlogHero} alt="Blog" />
        </div>
      </header>

      {/* Blog Cards Section */}
      <section className="blog-cards">
        <div className="blog-card">
          <h2>Que pensez-vous des rencontres amoureuses sur internet ?</h2>
          <p>5 avril 2023 - Blog, Rencontres amoureuses, Séduction, Véritable amour</p>
          <p>Ma rencontre avec mon âme sœur sur Internet. Je n'ai jamais cru aux rencontres amoureuses sur internet, jusqu'au jour où j'ai moi-même rencontré mon épouse via la toile...</p>
          <button>Continue Reading</button>
        </div>
        <div className="blog-card">
          <h2>Que pensez-vous des rencontres amoureuses sur internet ?</h2>
          <p>5 avril 2023 - Blog, Rencontres amoureuses, Séduction, Véritable amour</p>
          <p>Ma rencontre avec mon âme sœur sur Internet. Je n'ai jamais cru aux rencontres amoureuses sur internet, jusqu'au jour où j'ai moi-même rencontré mon épouse via la toile...</p>
          <button>Continue Reading</button>
        </div>
        <div className="blog-card">
          <h2>Que pensez-vous des rencontres amoureuses sur internet ?</h2>
          <p>5 avril 2023 - Blog, Rencontres amoureuses, Séduction, Véritable amour</p>
          <p>Ma rencontre avec mon âme sœur sur Internet. Je n'ai jamais cru aux rencontres amoureuses sur internet, jusqu'au jour où j'ai moi-même rencontré mon épouse via la toile...</p>
          <button>Continue Reading</button>
        </div>
        <div className="blog-card">
          <h2>Que pensez-vous des rencontres amoureuses sur internet ?</h2>
          <p>5 avril 2023 - Blog, Rencontres amoureuses, Séduction, Véritable amour</p>
          <p>Ma rencontre avec mon âme sœur sur Internet. Je n'ai jamais cru aux rencontres amoureuses sur internet, jusqu'au jour où j'ai moi-même rencontré mon épouse via la toile...</p>
          <button>Continue Reading</button>
        </div>
        <div className="blog-card">
          <h2>Que pensez-vous des rencontres amoureuses sur internet ?</h2>
          <p>5 avril 2023 - Blog, Rencontres amoureuses, Séduction, Véritable amour</p>
          <p>Ma rencontre avec mon âme sœur sur Internet. Je n'ai jamais cru aux rencontres amoureuses sur internet, jusqu'au jour où j'ai moi-même rencontré mon épouse via la toile...</p>
          <button>Continue Reading</button>
        </div>
        <div className="blog-card">
          <h2>Que pensez-vous des rencontres amoureuses sur internet ?</h2>
          <p>5 avril 2023 - Blog, Rencontres amoureuses, Séduction, Véritable amour</p>
          <p>Ma rencontre avec mon âme sœur sur Internet. Je n'ai jamais cru aux rencontres amoureuses sur internet, jusqu'au jour où j'ai moi-même rencontré mon épouse via la toile...</p>
          <button>Continue Reading</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Community</h4>
            <ul>
              <li><a href="/about">À propos</a></li>
              <li><a href="/live-dating">Live Dating</a></li>
              <li><a href="/events">Community Events</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Collaborateurs</h4>
            <ul>
              <li><a href="/signin">Se connecter</a></li>
              <li><a href="/partners">Espace Partenaires</a></li>
              <li><a href="/signup">S’inscrire</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Politique de confidentialité & CGV</h4>
            <ul>
              <li><a href="/privacy">Politique de confidentialité</a></li>
              <li><a href="/terms">CGV</a></li>
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