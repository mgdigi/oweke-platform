import React from 'react';
import './Blog.css'; // Import the CSS file
import BlogHeroImage from '../../assets/bloghero.png'; // Import the blog hero image

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
          <img src={BlogHeroImage} alt="Blog Hero" />
        </div>
      </header>

      {/* Blog Content Section */}
      <section className="blog-content">
        <div className="blog-post">
          <h2>What Do You Think About Online Dating?</h2>
          <p>April 5, 2023 - Blog, Online Dating, Love, Relationships</p>
          <p>My story with online dating started with hope... <a href="/post/1">Continue Reading</a></p>
        </div>
        <div className="blog-post">
          <h2>Tips for Successful Relationships</h2>
          <p>March 10, 2023 - Blog, Relationships, Communication</p>
          <p>Success in relationships requires effort and patience... <a href="/post/2">Continue Reading</a></p>
        </div>
        {/* Repeat this block for additional blog posts */}
      </section>

      {/* Footer Section */}
      <footer className="blog-footer">
        <p>© 2023 Oweke. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Blog;