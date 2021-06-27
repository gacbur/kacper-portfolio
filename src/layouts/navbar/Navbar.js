import React, { useState, useContext } from 'react'
import { LanguageContext } from '../../App'

import { Link } from 'react-scroll'

import { AiFillGithub } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { VscChromeClose } from 'react-icons/vsc'


import "./Navbar.css"

const Navbar = () => {

    const { language } = useContext(LanguageContext)

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
                            <Link
                                className="link"
                                activeClass="active"
                                to="about-me"
                                smooth={true}
                                offset={-70}
                                duration={800}
                            >
                                {language === "PL" ? 'O mnie' : 'About me'}
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="link"
                                activeClass="active"
                                to="projects"
                                smooth={true}
                                offset={-70}
                                duration={800}
                            >
                                {language === "PL" ? 'Projekty' : 'Projects'}
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="link"
                                activeClass="active"
                                to="contact"
                                smooth={true}
                                offset={-70}
                                duration={800}
                            >
                                {language === "PL" ? 'Kontakt' : 'Contact'}
                            </Link>
                        </li>
                        <li>
                            <a href="https://github.com/gacbur" className="link">
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
            <div className={`top-drawer ${showTopDrawer ? 'show' : ''}`}>
                <ul className="top-drawer__links">
                    <li>
                        <Link
                            className="link"
                            onClick={() => setShowTopDrawer(false)}
                            activeClass="active"
                            to="about-me"
                            smooth={true}
                            offset={-70}
                            duration={800}
                        >
                            O mnie
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="link"
                            onClick={() => setShowTopDrawer(false)}
                            activeClass="active"
                            to="projects"
                            smooth={true}
                            offset={-70}
                            duration={800}
                        >
                            Projekty
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="link"
                            onClick={() => setShowTopDrawer(false)}
                            activeClass="active"
                            to="contact"
                            smooth={true}
                            offset={-70}
                            duration={800}
                        >
                            Kontakt
                        </Link>
                    </li>
                    <li>
                        <a href="https://github.com/gacbur" className="link">
                            <AiFillGithub className="icon" />
                        </a>
                    </li>
                </ul>
            </div>
            {
                showTopDrawer &&
                <div
                    onClick={() => setShowTopDrawer(false)}
                    className="backdrop">

                </div>
            }
        </>
    )
}

export default Navbar
