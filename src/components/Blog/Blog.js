import React, { useEffect, useState } from 'react';
import './Blog.css';
import { FacebookShareButton, TwitterShareButton } from 'react-share';

import $ from 'jquery';

import StarRatingComponent from 'react-star-rating-component';

import Header from '../header';
import Footer from '../footer';

import ReactStars from 'react-rating-stars-component';  // Mise à jour

const Blog = () => {

  useEffect(() => {
    // Fonction pour définir les images de fond
    function setBackgroundImages() {
      $('.set-bg').each(function() {
        var bg = $(this).data('setbg');
        if (bg) {
          $(this).css('background-image', 'url(' + bg + ')');
        }
      });
    }

    // Appeler cette fonction après le rendu de la page
    setBackgroundImages();
  }, []);

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
    <div>

      <Header />

      <section class="breadcrumb-section set-bg" data-setbg="img/blog-bg.jpg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="breadcrumb-text">
                        <h2>Latest Blog Posts </h2>
                  
                    </div>
                </div>
            </div>
        </div>
    </section>

    

      {/* Blog Cards */}
      <section className="blog-cards-section">
        <h2>Latest Blog Posts</h2>
        <div className="blog-cards">
          {[...Array(6)].map((_, index) => (
            <div className="blog-card" key={index}>
              <img src="img/blog-image.jpg" alt="Blog Post" />
              <h3>Que pensez-vous des rencontres amoureuses sur internet ?</h3>
              <p>5 avril 2023 - Blog, Rencontres amoureuses, Séduction, Véritable amour</p>
              <p>Ma rencontre avec mon âme sœur sur Internet...</p>
              <button>Continue Reading</button>

              {/* Blog Rating */}

              <StarRatingComponent
                name={`rateBlog${index}`}
                starCount={5}
                value={rating}
               
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
      <Footer />
    </div>
  );
};

export default Blog;

