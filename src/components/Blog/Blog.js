import React, { useState } from 'react';
import './Blog.css';
import { FacebookShareButton, TwitterShareButton } from 'react-share';

import StarRatingComponent from 'react-star-rating-component';

import ReactStars from 'react-rating-stars-component';  // Mise à jour

const Blog = () => {

  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  
  const blogUrl = "https://example.com/blog"; // Replace with dynamic blog URL
  const blogTitle = "Example Blog Post Title"; // Replace with dynamic title

  const onStarClick = (nextValue) => {
    setRating(nextValue);

    console.log('Rated:', nextValue);
    // Logic to send rating to backend
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, comment]);
    setComment('');
  };

  return (
    <div className="blog-container">
      {/* Blog Hero Section */}
      <section className="blog-hero-section">
        <div className="blog-hero-content">
          <h1>Explore Our Blog</h1>
          <p>Discover the latest insights, tips, and stories on love, relationships, and dating.</p>
        </div>
        <div className="blog-hero-image">
          <img src={require('../../assets/bloghero.png').default} alt="Blog Hero" />
        </div>
      </section>

      {/* Blog Cards */}
      <section className="blog-cards-section">
        <h2>Latest Blog Posts</h2>
        <div className="blog-cards">
          {[...Array(6)].map((_, index) => (
            <div className="blog-card" key={index}>
              <img src={require('../../assets/blog-image.png').default} alt="Blog Post" />
              <h3>Que pensez-vous des rencontres amoureuses sur internet ?</h3>
              <p>5 avril 2023 - Blog, Rencontres amoureuses, Séduction, Véritable amour</p>
              <p>Ma rencontre avec mon âme sœur sur Internet...</p>
              <button>Continue Reading</button>

              {/* Blog Rating */}

              <StarRatingComponent
                name={`rateBlog${index}`}
                starCount={5}
                value={rating}
                onStarClick={onStarClick}
                count={5}
                onChange={onStarClick}
                size={24}
                activeColor="#ffd700"

              />

              {/* Share Buttons */}
              <div className="share-buttons">
                <FacebookShareButton url={blogUrl} quote={blogTitle}>
                  Share on Facebook
                </FacebookShareButton>
                <TwitterShareButton url={blogUrl} title={blogTitle}>
                  Share on Twitter
                </TwitterShareButton>
              </div>

              {/* Comments */}
              <div className="blog-comments">
                <h4>Comments</h4>
                <form onSubmit={handleCommentSubmit}>
                  <input
                    type="text"
                    placeholder="Write a comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                  />
                  <button type="submit">Submit</button>
                </form>
                <ul>
                  {comments.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
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
      </footer>
    </div>
  );
};

export default Blog;

