import React from 'react';
import Typed from 'react-typed';

export default function Header() {
    return (
        <div className="header-wrapper" id="home">
            <div className="main-info">
                <h1>Welcome to my Portfolio!</h1>
                    <Typed 
                    className="typed-text"
                    strings={["Web Design", "Full Stack Developer", "Student"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                    />
                    <a href="#contact" className="btn-main">Contact Me</a>
            </div>
        </div>
    )
}


