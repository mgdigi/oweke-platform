import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import $ from 'jquery';


// Importing Firebase methods
import { auth, onAuthStateChange } from '../firebase';  
import { signOut, reload } from 'firebase/auth';  

// Importation sections 

import ChoseusSection from '../Home/choseus-section'
import Header from '../header';
import Footer from '../footer';


const AboutPage = () => {
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
    if (window.jQuery) {
        window.jQuery(".ts_slider").owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            dots: false,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            smartSpeed: 1200,
            autoHeight: false,
            autoplay: true
        });
    }
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
      <section class="breadcrumb-section set-bg" data-setbg="img/breadcrumb-bg.jpg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="breadcrumb-text">
                        <h2>About us</h2>
                        <div class="bt-option">
                            <a href="./index.html"><Link to="/">Home</Link></a>
                            <span>About</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

      <ChoseusSection />

    
    <section class="aboutus-section">
        <div class="container-fluid">
            <div class="row">
            <div className="col-lg-6 p-0">
              <div className="about-video set-bg" style={{background: 'none', position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden'}}>
                <video controls style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
                  <source src="/video/about-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div class="col-lg-6 p-0">
    <div class="about-text">
        <div class="section-title">
            <span>À propos de nous</span>
            <h2>Nos histoires de succès</h2>
        </div>
        <div class="at-desc">
            <p>Nous sommes fiers d'avoir réuni de nombreuses personnes qui ont trouvé des connexions significatives grâce à notre plateforme. Notre mission est d'aider chacun à rencontrer son partenaire idéal en créant un environnement propice à l'épanouissement des relations.</p>
        </div>
        <div class="about-bar">
            <div class="ab-item">
                <p>Rencontres réussies</p>
                <div id="bar1" class="barfiller">
                    <span class="fill" data-percentage="95"></span>
                    <div class="tipWrap">
                        <span class="tip"></span>
                    </div>
                </div>
            </div>
            <div class="ab-item">
                <p>Engagement des utilisateurs</p>
                <div id="bar2" class="barfiller">
                    <span class="fill" data-percentage="88"></span>
                    <div class="tipWrap">
                        <span class="tip"></span>
                    </div>
                </div>
            </div>
            <div class="ab-item">
                <p>Taux de succès</p>
                <div id="bar3" class="barfiller">
                    <span class="fill" data-percentage="85"></span>
                    <div class="tipWrap">
                        <span class="tip"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

            </div>
        </div>
    </section>

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

            
    <section className="testimonial-section spad">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="section-title">
          <span>Temoignages</span>
          <h2>Nos Clients on dit</h2>
        </div>
      </div>
    </div>
    <div className="ts_slider owl-carousel">
      <div className="ts_item">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="ti_pic">
              <img src="img/testimonial/testimonial-1.jpg" alt />
            </div>
            <div className="ti_text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt<br /> ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                gravida. Risus commodo<br /> viverra maecenas accumsan lacus vel facilisis.</p>
              <h5>Marshmello Gomez</h5>
              <div className="tt-rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ts_item">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="ti_pic">
              <img src="img/testimonial/testimonial-2.jpg" alt />
            </div>
            <div className="ti_text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt<br /> ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                gravida. Risus commodo<br /> viverra maecenas accumsan lacus vel facilisis.</p>
              <h5>Marcellina mendy</h5>
              <div className="tt-rating">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    

      <Footer />

    </div>
  );
};

export default AboutPage;