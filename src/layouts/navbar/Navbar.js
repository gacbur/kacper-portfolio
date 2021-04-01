import React from 'react'

import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__items-cnt">
                <div className="navbar__logo">
                    <a href="/">
                        <h2>Kacper Kurek</h2>
                    </a>
                </div>
                <ul className="navbar__links">
                    <li>
                        <a href="#about-me">
                            O mnie
                        </a>
                    </li>
                    <li>
                        <a href="#projects">
                            Projekty
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            Kontakt
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
