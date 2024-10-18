import React from 'react';

const ExpertSection = () => {
    return (
        <div>

        {/* Team Section Begin */}
  <section className="trainers-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <span>Nos Experts en relations</span>
                            <h2>Formez-vous avec nos experts</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="ts-item set-bg" data-setbg="img/team/expert-1.jpg">
                            <div className="ts_text">
                                <h4>Emma Dubois</h4>
                                <span>Coach en relations</span>
                                <p>Avec plus de 10 ans d'expérience, Emma vous aide à naviguer dans le monde des rencontres avec des conseils avisés.</p>
                                <div className="ts-social">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="ts-item set-bg" data-setbg="img/team/expert-2.jpg">
                            <div className="ts_text">
                                <h4>Paul Lefevre</h4>
                                <span>Consultant en relations</span>
                                <p>Spécialiste en compatibilité amoureuse, Paul vous offre un accompagnement personnalisé pour des rencontres réussies.</p>
                                <div className="ts-social">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="ts-item set-bg" data-setbg="img/team/expert-3.jpg">
                            <div className="ts_text">
                                <h4>Sophie Martin</h4>
                                <span>Psychologue des relations</span>
                                <p>Grâce à son expertise en psychologie, Sophie vous aide à mieux comprendre vos besoins et à maximiser vos chances de succès.</p>
                                <div className="ts-social">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  {/* Team Section End */}

        </div>
    )
};

export default ExpertSection;