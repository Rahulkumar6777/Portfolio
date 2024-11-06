import React from 'react';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="max-width">
                <h2 className="title">Contact me</h2>
                <div className="contact-content">
                    <div className="column left">
                        <div className="text">Get in Touch</div>
                        <p>If you want advice, Contact me</p>
                        <div className="icons">
                            <div className="row">
                                <i className="fas fa-user"></i>
                                <div className="info">
                                    <div className="head">Name</div>
                                    <div className="sub-title">Rahul Kumar</div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="info">
                                    <div className="head">Address</div>
                                    <div className="sub-title">Katauli, Bihar</div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fas fa-envelope"></i>
                                <div className="info">
                                    <div className="head">Email</div>
                                    <div className="sub-title">Rahulk48546@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column right">
                        <div className="text">Message me</div>
                        <form action="#">
                            <div className="button-area">
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSc5CbC62gZduevphvaDPYrX_pyg6B3Kd2P1cheKOwyhpa_Agw/viewform?usp=sf_link"><button type="button">Contact</button></a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
