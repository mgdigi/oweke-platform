import React from 'react';
import './Blog.css'; // Add your CSS

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Que pensez-vous des rencontres amoureuses sur internet ?',
      date: '5 Avril 2023',
      categories: 'Blog, Rencontres amoureuses, Séduction, Vivre l\'amour',
      description: `Ma rencontre avec mon âme sœur sur Internet. Je ne l'ai jamais cru, 
      aux rencontres amoureuses sur Internet jusqu'à ce jour-là. De mon expérience, 
      je peux vous raconter notre histoire...`,
      buttonText: 'Continue Reading'
    },
    // Add more blog posts here
  ];

  return (
    <div className="blog-page">
      {/* Blog Hero Section */}
      <header className="blog-hero">
        <div className="hero-content">
          <h1>Blog</h1>
        </div>
        <div className="hero-image">
          <img src="/path-to-your-blog-hero-image" alt="Blog Hero" />
        </div>
      </header>

      {/* Blog Posts Section */}
      <section className="blog-posts">
        {blogPosts.map(post => (
          <div className="blog-card" key={post.id}>
            <img src="/path-to-your-blog-post-image" alt={post.title} />
            <div className="blog-content">
              <h2>{post.title}</h2>
              <p className="blog-date">{post.date} - {post.categories}</p>
              <p>{post.description}</p>
              <button>{post.buttonText}</button>
            </div>
          </div>
        ))}
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
        <p>Copyright © 2023 Vizmeet</p>
        <img src="/path-to-your-footer-image" alt="Footer Decoration" className="footer-image" />
      </footer>
    </div>
  );
};

export default Blog;