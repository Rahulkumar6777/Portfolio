import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';

const Teams = () => {
    return (
        <section className="teams" id="teams">
            <div className="max-width">
                <h2 className="title">My team</h2>
                <OwlCarousel className="carousel" loop margin={20} autoplay autoplayTimeout={2000} autoplayHoverPause responsive={{
                    0: { items: 1, nav: false },
                    600: { items: 2, nav: false },
                    1000: { items: 3, nav: false }
                }}>
                    <div className="card">
                        <div className="box">
                            <img src="" alt="" />
                            <div className="text">none</div>
                            <p>none</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <img src="" alt="" />
                            <div className="text">none</div>
                            <p>none</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <img src="" alt="" />
                            <div className="text">none</div>
                            <p>none</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <img src="" alt="" />
                            <div className="text">none</div>
                            <p>none</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <img src="" alt="" />
                            <div className="text">none</div>
                            <p>none</p>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </section>
    );
};

export default Teams;
