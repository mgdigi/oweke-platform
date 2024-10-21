import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Counseling.css';  // Assuming you will create this CSS file

import $ from 'jquery';

import CounselingImage from '../../assets/counseling-image.png';  // Replace with the actual path to your image
import OfferImage from '../../assets/offer-image.jpg';  // Replace with the actual path to your image

import Header from '../header';
import Footer from '../footer'


const Counseling = () => {
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
  return (
    <div>
      {/* Navigation Bar */}
     <Header />

     <section className="breadcrumb-section set-bg" data-setbg="img/conseiller-love.jpg">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <div className="breadcrumb-text">
                      <h2>Conseiller Love</h2>
                    </div>
                  </div>
                </div>
              </div>
            </section>

      {/* Main Section */}
     
      <section className="main-section">
        <h2>Bénéficier D’un Rendez-Vous Gratuit De 10 Minutes:</h2>
        <div className='container'>
        <p>
          Profitez d'une consultation gratuite de 10 minutes pour discuter de vos préoccupations amoureuses. 
          Cette offre exclusive est une opportunité unique d'obtenir des conseils personnalisés sans frais. 
          Réservez votre créneau dès maintenant!
        </p>
        </div>
        <button className="cta-button">Réservez Votre Créneau Gratuit</button>

        <div className="offer-section">
          <img src={OfferImage} alt="Offer" />
          <div className="offer-content">
            <h3>Offre du Moment:</h3>
            <p>
              Au-delà des 10 minutes gratuites, notre offre spéciale vous propose un coaching prolongé de 45 minutes 
              pour seulement 50 euros. Obtenez des conseils approfondis et des recommandations personnalisées pour 
              nourrir votre vie amoureuse.
            </p>
            <button className="cta-button">Réservez Votre Créneau De 45 Min Pour 50€</button>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      
      <section className="why-choose-us">
      <div className='container'>
        <h3>Pourquoi Choisir Nos Conseillers Love:</h3>
        <ul>
          <li><strong>Expertise Professionnelle:</strong> Nos conseillers sont des professionnels expérimentés dans le domaine des relations et de l'amour.</li>
          <li><strong>Confidentialité Assurée:</strong> Votre vie privée est notre priorité. Toutes les sessions sont confidentielles et sécurisées.</li>
          <li><strong>Approche Personnalisée:</strong> Chaque séance est adaptée à vos besoins spécifiques, vous offrant des conseils pertinents.</li>
        </ul>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
      <div className='container'>
        <h3>Comment Ça Marche:</h3>
        <ol>
          <li>Réservez Votre Créneau Gratuit: Choisissez un horaire qui vous convient pour une consultation de 10 minutes gratuite.</li>
          <li>Rencontrez Votre Conseiller Love: Connectez-vous en toute confidentialité et commencez votre voyage vers des relations épanouissantes.</li>
          <li>Profitez de l'Offre Spéciale: Envisagez un coaching prolongé de 45 minutes pour un accompagnement approfondi.</li>
        </ol>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Counseling;