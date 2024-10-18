import React from 'react';
import './Blog.css';  // Import the CSS file
import BlogHeroImage from '../../assets/bloghero.png';  // Importing the blog hero image

const Blog = () => {
  return (
    <div className="blog-page">
      {/* Blog Hero Section */}
      <div className="blog-hero-section">
        <img src={BlogHeroImage} alt="Blog" className="blog-hero-image" />
        <div className="blog-hero-text">
          <h1>Explore Our Blog</h1>
          <p>Discover the latest insights, tips, and stories on love, relationships, and dating.</p>
        </div>
      </div>

      {/* Blog Content Section */}
      <section className="blog-content">
        {/* Blog Post Repeated */}
        {Array(6).fill(null).map((_, idx) => (
          <div className="blog-post" key={idx}>
            <h2>Que pensez-vous des rencontres amoureuses sur internet ?</h2>
            <p>5 avril 2023 - Blog, Rencontres amoureuses, Séduction, Véritable Amour</p>
            <p>
              Ma rencontre avec mon âme sœur sur Internet. Je ne l'ai jamais cru aux rencontres amoureuses sur Internet,
              jusqu'au jour où j'ai moi-même rencontré mon époux sur la toile. Dans ce témoignage, je vais vous raconter
              notre histoire, comment nous avons réussi à construire une relation à distance.
            </p>
            <button className="cta-button">Continue Reading</button>
          </div>
        ))}
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Community</h4>
            <ul>
              <li>À propos</li>
              <li>Live Dating</li>
              <li>Community Events</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Collaborateurs</h4>
            <ul>
              <li>Se connecter</li>
              <li>Espace Partenaires</li>
              <li>S’inscrire</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Politique de confidentialité & CGV</h4>
            <ul>
              <li>Politique de confidentialité</li>
              <li>CGV</li>
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