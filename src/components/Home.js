import React, { useEffect } from 'react';
import Typed from 'typed.js';

const Home = () => {
    useEffect(() => {
        new Typed(".typing", {
            strings: ["Programmer", "Web Developer", "Software Developer", "Game Developer"],
            typeSpeed: 100,
            backSpeed: 80,
            loop: true
        });

        new Typed(".typing-2", {
            strings: ["Programmer", "Web Developer", "Software Developer", "Game Developer"],
            typeSpeed: 100,
            backSpeed: 80,
            loop: true
        });
    }, []);

    return (
        <section className="home" id="home">
            <div className="max-width">
                <div className="home-content">
                    <div className="text-1">Hello, my name is</div>
                    <div className="text-2">Rahul Kumar</div>
                    <div className="text-3">And I'm a <span className="typing"></span></div>
                    <a href="#about">About Me</a>
                </div>
            </div>
        </section>
    );
};

export default Home;
