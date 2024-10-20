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

      <section className="banner-section set-bg" data-setbg="img/banner-bg.jpg">
                <div className="container">
                    <div cla
                    ssName="row">
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
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  {/* Pricing Section End */}

      <GallerySection />

      <ExpertSection />

      <Footer />

    </div>
  );
};

export default HomePage;