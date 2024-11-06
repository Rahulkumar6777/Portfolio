import React from 'react';

const About = () => {
    return (
        <section className="about" id="about">
            <div className="max-width">
                <h2 className="title">About me</h2>
                <div className="about-content">
                    <div className="column left">
                        <img src="man3.png" alt="" />
                    </div>
                    <div className="column right">
                        <div className="text">I'm Rahul and I'm a <span className="typing-2"></span></div>
                        <p>I am Rahul. A programmer, Web Developer, Software Developer and a Game Developer. I learned programming at 19, and now I am a professional programmer.</p>
                        <a href="#services">My Skills</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
