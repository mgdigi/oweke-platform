import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const footer = () => { 
    return (
        <div>
  <section className="footer-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="fs-about">
            <div className="fa-logo">
              <a href="#"><img src="img/oweke-logo.png" alt="logo" /></a>
            </div>
            <p>L'amour est une aventure qui mérite d'être vécue, peu importe où on la trouve.</p>
        <p>Quel que soit le chemin que vous choisissez pour trouver l'amour, c'est une décision personnelle qui peut vous apporter beaucoup de joie et de bonheur.</p>
       

            <div className="fa-social">
              <a href="#"><i className="fa fa-facebook" /></a>
              <a href="#"><i className="fa fa-twitter" /></a>
              <a href="#"><i className="fa fa-youtube-play" /></a>
              <a href="#"><i className="fa fa-instagram" /></a>
              <a href="#"><i className="fa  fa-envelope-o" /></a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6">
          <div className="fs-widget">
            <h4>Communautes</h4>
            <ul>
            <li><Link to="/about">À propos</Link></li>
            <li><Link to="/live-dating">Live Dating</Link></li>
            <li><Link to="/events">Community Events</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6">
          <div className="fs-widget">
            <h4>Collaborateurs</h4>
            <ul>
            <li><Link to="/signin">Se connecter</Link></li>
              <li><Link to="/partners">Espace Partenaires</Link></li>
              <li><Link to="/signup">S’inscrire</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
  <div className="fs-widget">
    <h4>Conseils &amp; Astuces</h4>
    <div className="fw-recent">
      <h6><a href="#">Comment réussir votre première impression en 5 minutes</a></h6>
      <ul>
        <li>2 min de lecture</li>
        <li>15 Commentaires</li>
      </ul>
    </div>
    <div className="fw-recent">
      <h6><a href="#">Les sujets de conversation qui fonctionnent à chaque fois</a></h6>
      <ul>
        <li>3 min de lecture</li>
        <li>18 Commentaires</li>
      </ul>
    </div>
  </div>
</div>

      </div>
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="copyright-text">
            <p>
              Copyright © All rights reserved | MGDIGI<i className="fa fa-heart" aria-hidden="true" /> by <a href="https://mgdigi.github.io/mgdigi/" target="_blank">MGDIGI</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    )
}

export default footer
