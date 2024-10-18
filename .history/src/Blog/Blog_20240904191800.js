import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog-page">
      <header className="blog-header">
        <h1>Bienvenue sur le Blog d'Oweke</h1>
        <p>Découvrez nos articles, conseils, et histoires autour de l'amour et des relations.</p>
      </header>

      <section className="blog-content">
        <article className="blog-post">
          <h2>Article 1: Comment trouver l'amour en ligne</h2>
          <p>
            L'amour en ligne est une aventure moderne. Découvrez comment tirer le meilleur parti de
            vos rencontres en ligne et trouver l'amour de votre vie grâce à nos conseils.
          </p>
          <button className="read-more-btn">Lire plus</button>
        </article>

        <article className="blog-post">
          <h2>Article 2: Conseils pour un premier rendez-vous réussi</h2>
          <p>
            Le premier rendez-vous est crucial. Voici quelques conseils pour réussir cette étape
            importante dans votre parcours amoureux.
          </p>
          <button className="read-more-btn">Lire plus</button>
        </article>

        <article className="blog-post">
          <h2>Article 3: Comment maintenir une relation saine</h2>
          <p>
            Découvrez les clés pour maintenir une relation heureuse et saine avec votre partenaire,
            même après des années de vie commune.
          </p>
          <button className="read-more-btn">Lire plus</button>
        </article>
      </section>
    </div>
  );
};

export default Blog;