import React from 'react';
import './Blog.css'; // Optional CSS file

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Que pensez-vous des rencontres amoureuses sur internet ?',
      date: '5 Avril 2023',
      categories: 'Blog, Rencontres amoureuses, Séduction, Vivre l\'amour',
      description: `Ma rencontre avec mon âme sœur sur Internet. Je ne l'ai jamais cru, 
      aux rencontres amoureuses sur Internet jusqu'à ce jour-là.`,
      buttonText: 'Continue Reading'
    },
    // Add more blog posts here
  ];

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <header className="blog-hero">
        <div className="hero-content">
          <h1>Blog</h1>
          <p>Découvrez nos articles et conseils sur l'amour, les rencontres, et plus encore.</p>
        </div>
        <div className="hero-image">
          <img src="/path-to-your-image" alt="Blog Hero" />
        </div>
      </header>

      {/* Blog Posts Section */}
      <section className="blog-posts">
        {blogPosts.map(post => (
          <div className="blog-card" key={post.id}>
            <img src="/path-to-your-image" alt={post.title} />
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
          {/* Add your footer content here */}
        </div>
      </footer>
    </div>
  );
};

export default Blog;