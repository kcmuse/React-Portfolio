import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

export default function NavBar() {
    return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                    <a className="navbar-brand title" href="#">Kaleb's Portfolio</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} style={{color: "#ffffff"}}/>
                    </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Me!</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">My Work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact Me!</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> 
    </div>
)
}
