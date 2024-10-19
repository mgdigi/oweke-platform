import React from 'react'

const choseusSection = () => {
    return (
    <div>
        {/* Pourquoi nous choisir ? */}
        <section className="choseus-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>Pourquoi nous choisir ?</span>
                                <h2>Vivez des rencontres uniques</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="cs-item">
                                <span className="flaticon-034-stationary-bike" />
                                <h4>Événements en direct</h4>
                                <p>Participez à des événements de speed dating exclusifs, en ligne ou en présentiel.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="cs-item">
                                <span className="flaticon-033-juice" />
                                <h4>Compatibilité améliorée</h4>
                                <p>Notre algorithme vous aide à trouver les personnes qui partagent vos intérêts et valeurs.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="cs-item">
                                <span className="flaticon-002-dumbell" />
                                <h4>Encadrement professionnel</h4>
                                <p>Nos experts en relations sont là pour vous conseiller et vous aider à réussir vos rencontres.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="cs-item">
                                <span className="flaticon-014-heart-beat" />
                                <h4>Expérience personnalisée</h4>
                                <p>Nous nous adaptons à vos besoins pour rendre chaque rencontre mémorable et unique.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
    )

};

export default choseusSection;
