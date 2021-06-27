import React, { useContext } from 'react'
import { LanguageContext } from '../../App'

import ProjectsList from '../../components/projectsList/ProjectsList'
import ContactShapeLayers from '../../components/contactShapelayers/ContactShapeLayers'

import { scroller, Element } from 'react-scroll'

import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'

import "./Main.css"

const Main = () => {

    const handleScrollToProjects = () => {
        scroller.scrollTo('scroll-to-projects', {
            duration: 800,
            delay: 0,
            offset: -70,
            smooth: 'easeInOutQuart'
        })
    }

    const { language, setLanguage } = useContext(LanguageContext)

    const handleSetLanguage = (e) => {
        localStorage.setItem('language', e.target.name)
        window.location.reload()
        setLanguage(e.target.name)
    }

    return (
        <main className="main">
            <section className="main__section" id="about-me">
                <div className="change-language">
                    <span>
                        <button
                            name="PL"
                            className={language === "PL" && 'active'}
                            onClick={(e) => handleSetLanguage(e)}
                        >
                            PL
                        </button>
                        |
                        <button
                            name="ENG"
                            className={language === "ENG" && 'active'}
                            onClick={(e) => handleSetLanguage(e)}
                        >
                            ENG
                        </button>
                    </span>
                </div>
                <div className="about-me__wrapper">
                    <div className="about-me__text">
                        <h1>
                            {language === 'PL' ? 'Hej, mam na imię Kacper.' : 'Hi, my name is Kacper'}
                        </h1>
                        <h2>
                            {language === 'PL' ? 'Jestem samoukiem z pasją do programowania, interesuję się frontendem i aspiruję do zostania web developerem.' : 'I am a passionate self-tought programmer Interested in frontend and aspiring to become a web developer.'}
                        </h2>
                        <button
                            onClick={() => handleScrollToProjects()}
                        >
                            {language === 'PL' ? 'Moje projekty' : 'My projects'}
                        </button>
                    </div>
                    <div className="about-me__picture">
                        <div className="picture"></div>
                    </div>
                </div>
            </section>
            <Element name="scroll-to-projects" className="main__section" id="projects">
                <div className="projects__wrapper">
                    <h1 className="projects__main-title">
                        {language === 'PL' ? 'Projekty' : 'Projects'}
                    </h1>
                    <ProjectsList />
                </div>
            </Element>
            <section className="main__section" id="contact">
                <div className="contact__wrapper">
                    <h1 className="contact__title">
                        {language === 'PL' ? 'Zapraszam do kontaktu' : 'Contact me'}
                    </h1>
                    <div className="contact__items-cnt">
                        <div className="contact__item-number">
                            <h1>
                                {language === 'PL' ? null : <span>+48</span>}
                                <span>730</span>
                                <span>558</span>
                                <span>182</span>
                            </h1>
                            <span className="icon">
                                <AiOutlinePhone />
                            </span>
                        </div>
                        <div className="contact__item-email">
                            <h1>
                                kacper0775@gmail.com
                            </h1>
                            <span className="icon">
                                <AiOutlineMail />
                            </span>
                        </div>
                    </div>
                </div>
                <ContactShapeLayers />
            </section>
        </main>
    )
}

export default Main
