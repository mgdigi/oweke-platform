import React from 'react';


const HeroSection = () => {
 // Le tableau vide assure que l'effet ne s'exécute qu'une fois

    return (
        <div>
            <section className="hero-section">
                <div className="hs-slider owl-carousel">
                    <div className="hs-item">
                    <video className="hero-video" autoPlay loop muted>
                      <source src="video/hero-video.mp4" type="video/mp4" />
                        Votre navigateur ne supporte pas la vidéo.
                    </video>
                        <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 offset-lg-12">
                                         <div className="hi-text">
                                            <span>Participez à des rencontres inoubliables  </span>
                                            <h1>Trouvez  votre <strong> partenaire idéal</strong></h1>
                                         <a href="#" className="primary-btn">Découvrir</a>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                                    {/* Répéter pour d'autres éléments de diapositive si nécessaire */}
                    </div>
                </section>
        </div>
    );
};

export default HeroSection;
