import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';



// Importing Firebase methods
import { auth, onAuthStateChange } from '../firebase';  
import { signOut, reload } from 'firebase/auth';  

// Importation sections 
import HeroSection from './hero-section';
import ChoseusSection from './choseus-section'
import Header from '../header';
import EventSection from './event-section';
import GallerySection from './gallery-section';
import ExpertSection from './expert-section';
import Footer from '../footer';


// Importing images and icons
import HeroImage from '../../assets/heroimage.png';  
import EventImage from '../../assets/event-image.png';
import UsageImage from '../../assets/usage-image.png';

import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const HomePage = () => {
  const [user, setUser] = useState(null);  
  const [emailVerified, setEmailVerified] = useState(false);  
  const navigate = useNavigate();  

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChange((authUser) => {
      if (authUser) {
        setUser(authUser);
        setEmailVerified(authUser.emailVerified);  
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // Polling to check for email verification every 5 seconds
    const checkEmailVerification = () => {
      if (user && !emailVerified) {
        reload(user)  
          .then(() => {
            if (user.emailVerified) {
              setEmailVerified(true);
              navigate('/');  
            }
          })
          .catch((error) => console.error('Error reloading user:', error));
      }
    };

    const interval = setInterval(checkEmailVerification, 5000);  

    return () => clearInterval(interval);  
  }, [user, emailVerified, navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);  
      navigate('/login');  
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div>
      {!emailVerified && user && (
        <div className="email-verification-warning">
          <p>Please verify your email address to access all features of the site.</p>
        </div>
      )}

      <Header />

      <HeroSection />

      <ChoseusSection />

      <EventSection />

      <section className="banner-section set-bg" data-setbg="img/banner-bg.jpeg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="bs-text">
                                <h2>Inscrivez-vous maintenant pour plus d'événements</h2>
                                <div className="bt-tips">Où amour et aventure se rencontrent.</div>
                                <button className="primary-btn btn-normal" onClick={() => navigate('/events')}>Participer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tarifs */}
            <section className="pricing-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>Nos formules</span>
                                <h2>Choisissez votre plan</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-8">
                            <div className="ps-item">
                                <h3>Speed dating unique</h3>
                                <div className="pi-price">
                                    <h2>5 €</h2>
                                    <span>PAR SESSION</span>
                                </div>
                                <ul>
                                    <li>Accès à un événement</li>
                                    <li>Rencontres personnalisées</li>
                                    <li>Profils compatibles</li>
                                    <li>Assistance expert</li>
                                </ul>
                                <a href="#" className="primary-btn pricing-btn">S'inscrire</a>
                                <a href="#" className="thumb-icon"><i className="fa fa-picture-o" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8">
                            <div className="ps-item">
                                <h3>12 mois illimité</h3>
                                <div className="pi-price">
                                    <h2>10 €</h2>
                                    <span>ACCÈS COMPLET</span>
                                </div>
                                <ul>
                                    <li>Accès illimité aux événements</li>
                                    <li>Rencontres personnalisées</li>
                                    <li>Profils compatibles</li>
                                    <li>Assistance expert</li>
                                </ul>
                                <a href="#" className="primary-btn pricing-btn">S'inscrire</a>
                                <a href="#" className="thumb-icon"><i className="fa fa-picture-o" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8">
                            <div className="ps-item">
                                <h3>6 mois illimité</h3>
                                <div className="pi-price">
                                    <h2>20 €</h2>
                                    <span>ACCÈS COMPLET</span>
                                </div>
                                <ul>
                                    <li>Accès illimité aux événements</li>
                                    <li>Rencontres personnalisées</li>
                                    <li>Profils compatibles</li>
                                    <li>Assistance expert</li>
                                </ul>
                                <a href="#" className="primary-btn pricing-btn">S'inscrire</a>
                                <a href="#" className="thumb-icon"><i className="fa fa-picture-o" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  {/* Pricing Section End */}

      <GallerySection />

      <ExpertSection />

      <Footer />

      <header className="hero">
        <div className="hero-content">
          <h1>Une Rencontre <br /><span className="underline">Depuis Ta Webcam</span></h1>
          <p>Oweke : Votre Destination Pour L'Amour Et La Romance. <br />
            Connectez-Vous Avec Votre Partenaire Idéal Sur Oweke.</p>
          <button className="cta-button" onClick={() => navigate('/events')}>En Profiter</button>
          
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"> 
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="instagramme">
              <FaInstagram />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="twitter">
              <FaTwitter />
            </a>
            <a href="mailto:info@oweke.com" target="_blank" rel="noopener noreferrer" aria-label="mail">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="heroimage">
          <img src={HeroImage} alt="Hero" className="img-same-size" />
        </div>
      </header>

      <section className="envolee-section">
        <h2>Envolez-vous à la rencontre de <br /><span className="underline">Votre âme sœur</span></h2>
        
        <p>L'amour est une aventure qui mérite d'être vécue, peu importe où on la trouve.</p>
        <p>Quel que soit le chemin que vous choisissez pour trouver l'amour, c'est une décision personnelle qui peut vous apporter beaucoup de joie et de bonheur.</p>
        <p>C'est une aventure qui peut vous amener dans des endroits inattendus et vous permettre de vivre des moments magiques.</p>
        <p>N'ayez pas peur de prendre le risque de trouver l'amour et de suivre votre cœur - vous pourriez bien trouver quelque chose de merveilleux.</p>
        <p>Alors, qu'attendez-vous ? Entrez dans l'aventure de la recherche de l'amour et vivez les plus beaux moments de votre vie avec Oweke.</p>

        <button className="cta-button" onClick={() => navigate('/events')}>Participer À Un Événement</button>
      </section>

      <section className="community-events">
        <div className="content">
          <h2>Faites partie de notre prochain <br /><span className="underline">Community Events.</span></h2>
          <p>Participez à nos prochains événements communautaires et rencontrez d’autres personnes comme vous. 
            <br /><strong>Partagez, discutez et trouvez peut-être votre partenaire de vie !</strong>
          </p>
          <button className="cta-button" onClick={() => navigate('/events')}>Découvrez nos Community Events</button>
        </div>
        <img src={EventImage} alt="Community Events" className="section-image img-same-size" />
      </section>

      <section className="simple-use">
        <div className="content">
          <h3>Et c’est Simple <span className="underline">à Utiliser!</span></h3>
          <p>Grâce à Oweke ! <br />Vitalizez votre vie amoureuse.</p>
          <button className="cta-button" onClick={() => navigate('/events')}>Accéder à Oweke Online</button>
        </div>
        <div className="image">
          <img src={UsageImage} alt="Simple to Use" className="section-image img-same-size" />
        </div>
      </section>

      <section className="newsletter-section">
        <h3>S'inscrire au Newsletter</h3>
        <form className="newsletter-form">
            <input type="email" placeholder="Votre adresse email" />
            <button type="submit">S'inscrire</button>
        </form>
        <div className="newsletter-social">
            <h3>Rejoindre notre Communauté</h3>
            <div className="social-icons">
                <a href="https://www.facebook.com"><FaFacebookF /></a>
                <a href="https://www.instagramme.com"><FaInstagram /></a>
                <a href="https://www.twitter.com"><FaTwitter /></a>
                <a href="https://www.linkedin.com"><FaLinkedin /></a>
            </div>
        </div>
      </section>

      <footer className="footer1">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Community</h4>
            <ul>
              <li><Link to="/about">À propos</Link></li>
              <li><Link to="/live-dating">Live Dating</Link></li>
              <li><Link to="/events">Community Events</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Collaborateurs</h4>
            <ul>
              <li><Link to="/signin">Se connecter</Link></li>
              <li><Link to="/partners">Espace Partenaires</Link></li>
              <li><Link to="/signup">S’inscrire</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Politique de confidentialité & CGV</h4>
            <ul>
              <li><Link to="/privacy">Politique de confidentialité</Link></li>
              <li><Link to="/terms">CGV</Link></li>
            </ul>
          </div>
        </div>
        <p className="footer-copyright">Copyright © 2024 Oweke</p>
      </footer>
    </div>
  );
};

export default HomePage;