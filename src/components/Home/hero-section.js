import React, { useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

const HeroSection = () => {


    useEffect(() => {
        // Initialiser Owl Carousel après que le composant soit monté
        if (window.jQuery) {
            window.jQuery(".hs-slider").owlCarousel({
                items: 1,
                loop: true,
                nav: true,
                dots: true,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                smartSpeed: 1200,
                autoHeight: false,
                autoplay: false
            });
        } else {
            console.log("jQuery ou Owl Carousel ne sont pas chargés");
        }
    }, []);

    return (
        <div>
            <section className="hero-section">
                <div className="hs-slider owl-carousel">
                    <div className="hs-item">
                        <video className="hero-video" autoPlay loop muted playsInline>
                            <source src="video/hero-video.mp4" type="video/mp4" />
                            Votre navigateur ne supporte pas la vidéo.
                        </video>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 offset-lg-12">
                                    <div className="hi-text">
                                        <span>Participez à des rencontres inoubliables</span>
                                        <h1>Trouvez votre <strong>partenaire idéal</strong></h1>
                                        <a href="#" className="primary-btn">Découvrir</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;
