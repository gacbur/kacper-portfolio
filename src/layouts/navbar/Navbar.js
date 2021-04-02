import React, { useState } from 'react'

import { AiFillGithub } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { VscChromeClose } from 'react-icons/vsc'

import "./Navbar.css"

const Navbar = () => {

    const [showTopDrawer, setShowTopDrawer] = useState(false)

    return (
        <>
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
                        <li>
                            <a href="https://github.com/gacbur" className="github-link">
                                <AiFillGithub className="icon" />
                            </a>
                        </li>
                    </ul>
                    <div className="navbar__action-icon">
                        <button
                            onClick={() => setShowTopDrawer(prevState => !prevState)}
                        >
                            {showTopDrawer ? <VscChromeClose /> : <GiHamburgerMenu />}
                        </button>
                    </div>
                </div>
            </nav>
            <div className={`top-drawer ${showTopDrawer ? 'hide' : ''}`}>
                <ul className="top-drawer__links">
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
                    <li>
                        <a href="https://github.com/gacbur" className="github-link">
                            <AiFillGithub className="icon" />
                        </a>
                    </li>
                </ul>
            </div>
            {showTopDrawer &&
                <div
                    onClick={() => setShowTopDrawer(false)}
                    className="backdrop">

                </div>}
        </>
    )
}

export default Navbar
