import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => { 

  useEffect(() => {
    // Vérifie si jQuery est bien chargé
    if (window.jQuery) {
        // Logique du menu mobile
        window.jQuery('.canvas-open').on('click', function () {
            window.jQuery('.offcanvas-menu-wrapper').addClass('show-offcanvas-menu-wrapper');
            window.jQuery('.offcanvas-menu-overlay').addClass('active');
            window.jQuery('.mobile-menu').css('display', 'block');
        });

        window.jQuery('.canvas-close, .offcanvas-menu-overlay').on('click', function () {
            window.jQuery('.offcanvas-menu-wrapper').removeClass('show-offcanvas-menu-wrapper');
            window.jQuery('.offcanvas-menu-overlay').removeClass('active');
            window.jQuery('.mobile-menu').css('display', 'none');
        });
    }
}, []);

    return (
        <div>

    <div class="offcanvas-menu-overlay"></div>
    <div class="offcanvas-menu-wrapper">
        <div class="canvas-close">
            <i class="fa fa-close"></i>
        </div>
        <div class="canvas-search search-switch">
            <i class="fa fa-search"></i>
        </div>
        <nav class="canvas-menu mobile-menu">
        <ul>
            <li><Link to="/">Accueil</Link></li>
              <li><Link to="/about">À propos</Link></li>
              <li><Link to="/events">Community Events</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/counseling">Rencontre</Link></li>
              
              <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
        <div id="mobile-menu-wrap"></div>
        <div class="canvas-social">
            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="#"><i class="fa fa-youtube-play"></i></a>
            <a href="#"><i class="fa fa-instagram"></i></a>
        </div>
    </div>


  <header className="header-section">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3">
          <div className="logo">
            <a href=""><Link to="/"></Link>
              <img src="img/oweke-logo.png" alt="logo image"/>
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <nav className="nav-menu">
            <ul>
            <li><Link to="/">Accueil</Link></li>
              <li><Link to="/about">À propos</Link></li>
              <li><Link to="/events">Community Events</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/counseling">Rencontre</Link></li>
              
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
        <div className="col-lg-3">
          <div className="top-option">
            <div className="to-search search-switch">
              <i className="fa fa-search" />
            </div>
            <div className="to-social">
              <a href="#"><i className="fa fa-facebook" /></a>
              <a href="#"><i className="fa fa-twitter" /></a>
              <a href="#"><i className="fa fa-youtube-play" /></a>
              <a href="#"><i className="fa fa-instagram" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="canvas-open">
        <i className="fa fa-bars" />
      </div>
    </div>
  </header>
</div>

    )
}

export default Header
