import React, { useEffect } from 'react';
import $ from 'jquery';

const Header = () => {
    useEffect(() => {
        $(window).scroll(function() {
            if (this.scrollY > 20) {
                $('.navbar').addClass("sticky");
            } else {
                $('.navbar').removeClass("sticky");
            }

            if (this.scrollY > 500) {
                $('.scroll-up-btn').addClass("show");
            } else {
                $('.scroll-up-btn').removeClass("show");
            }
        });

        $('.scroll-up-btn').click(function() {
            $('html').animate({ scrollTop: 0 });
            $('html').css("scrollBehavior", "auto");
        });

        $('.navbar .menu li a').click(function() {
            $('html').css("scrollBehavior", "smooth");
        });

        $('.menu-btn').click(function() {
            $('.navbar .menu').toggleClass("active");
            $('.menu-btn i').toggleClass("active");
        });
    }, []);

    return (
        <header>
            <div className="scroll-up-btn">
                <i className="fas fa-angle-up"></i>
            </div>
            <nav className="navbar">
                <div className="max-width">
                    <div className="logo"><a href="#home">Portfo<span>lio.</span></a></div>
                    <ul className="menu">
                        <li><a href="#home" className="menu-btn">Home</a></li>
                        <li><a href="#about" className="menu-btn">About</a></li>
                        <li><a href="#projects" className="menu-btn">Projects</a></li>
                        
                        <li><a href="#skills" className="menu-btn">Talents</a></li>
                        <li><a href="#services" className="menu-btn">Skills</a></li>
                        <li><a href="#contact" className="menu-btn">Contact</a></li>
                    </ul>
                    <div className="menu-btn">
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
