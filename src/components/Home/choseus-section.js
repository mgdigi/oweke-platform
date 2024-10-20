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
                            <img src="/img/chooseus/chooseus1.jpg" alt="Love Icon" style={{ width: '50px', height: '50px' }} />
                                <h4>Événements en direct</h4>
                                <p>Participez à des événements de speed dating exclusifs, en ligne ou en présentiel.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="cs-item">
                            <img src="/img/chooseus/chooseus2.jpg" alt="Love Icon" style={{ width: '50px', height: '50px' }} />
                                <h4>Compatibilité améliorée</h4>
                                <p>Notre algorithme vous aide à trouver les personnes qui partagent vos intérêts et valeurs.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="cs-item">
                            <img src="/img/chooseus/chooseus3.jpg" alt="Love Icon" style={{ width: '50px', height: '50px' }} />
                                <h4>Encadrement professionnel</h4>
                                <p>Nos experts en relations sont là pour vous conseiller et vous aider à réussir vos rencontres.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="cs-item">
                            <img src="/img/chooseus/chooseus4.jpg" alt="Love Icon" style={{ width: '50px', height: '50px' }} />
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
