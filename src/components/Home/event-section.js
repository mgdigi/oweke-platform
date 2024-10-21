import React, { useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';


const EventSection = () => {

    useEffect(() => {
        if (window.jQuery) {
            // Remplace l'attribut data-setbg par l'image de fond
            window.jQuery(".set-bg").each(function () {
                var bg = window.jQuery(this).attr("data-setbg");
                window.jQuery(this).css("background-image", "url(" + bg + ")");
            });
        }
    }, []);
 // Le tableau vide assure que l'effet ne s'exécute qu'une fois

    return (
        <div>
            <section className="classes-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>Nos événements</span>
                                <h2>CE QUE NOUS PROPOSONS</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="class-item">
                                <div className="ci-pic">
                                    <img src="img/classes/event-1.jpeg" alt="Rencontre thématique" />
                                </div>
                                <div className="ci-text">
                                    <span>Thématique</span>
                                    <h5>Rencontres autour du voyage</h5>
                                    <a href="#"><i className="fa fa-angle-right" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="class-item">
                                <div className="ci-pic">
                                    <img src="img/classes/event-2.jpg" alt="Rencontres virtuelles" />
                                </div>
                                <div className="ci-text">
                                    <span>Virtuel</span>
                                    <h5>Speed dating en ligne</h5>
                                    <a href="#"><i className="fa fa-angle-right" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="class-item">
                                <div className="ci-pic">
                                    <img src="img/classes/event-3.jpg" alt="Rencontres VIP" />
                                </div>
                                <div className="ci-text">
                                    <span>VIP</span>
                                    <h5>Rencontres exclusives</h5>
                                    <a href="#"><i className="fa fa-angle-right" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EventSection;
