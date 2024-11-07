import React from 'react';
import OwlCarousel from 'react-owl-carousel';

const Teams = () => {
    const handleClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <section className="teams" id="teams">
            <div className="max-width">
                <h2 className="title">My Projects</h2>
                <OwlCarousel className="carousel" loop margin={20} autoplay autoplayTimeout={2000} autoplayHoverPause responsive={{
                    0: { items: 1, nav: false },
                    600: { items: 2, nav: false },
                    1000: { items: 3, nav: false }
                }}>
                    <div className="card">
                        <div className="box" onClick={() => handleClick('https://4kimage.netlify.app/')}>
                            <img src={`${process.env.PUBLIC_URL}/image-website.png`} alt="images-website" />
                            <div className="text">Images Website</div>
                            <p>Discover and share stunning images! Easily upload your own photos and download from a collection of beautiful images contributed by others.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box" >
                            <img src={`${process.env.PUBLIC_URL}/project-image.png`} alt="" />
                            <div className="text"></div>
                            <p></p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box" >
                            <img src={`${process.env.PUBLIC_URL}/project-image.png`} alt="" />
                            <div className="text"></div>
                            <p></p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box" >
                            <img src={`${process.env.PUBLIC_URL}/project-image.png`} alt="" />
                            <div className="text"></div>
                            <p></p>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </section>
    );
};

export default Teams;
