import React from 'react';



const Services = () => {
    return (
        <section className="services" id="services">
            <div className="max-width">
                <h2 className="title">My Skills</h2>
                <div className="serv-content">
                    <div className="card">
                        <div className="box">
                            <i className="fas fa-paint-brush"></i>
                            <div className="text">Web Design</div>
                            <p>HTML, CSS, and JavaScript</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <i className="fas fa-chart-line"></i>
                            <div className="text">Software Developing</div>
                            <p>Python, C++, C#, React, and Node JS</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <i className="fas fa-code"></i>
                            <div className="text">Game Developing</div>
                            <p>Python, React, Web-Based Games</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
