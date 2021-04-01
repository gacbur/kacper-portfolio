import React from 'react'

import ProjectsList from '../../components/projectsList/ProjectsList'
import ContactShapeLayers from '../../components/contactShapelayers/ContactShapeLayers'

import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'

import "./Main.css"


const Main = () => {
    return (
        <main className="main">
            <section className="main__section" id="about-me">
                <div className="about-me__wrapper">
                    <div className="about-me__text">
                        <h1>
                            Hej, mam na imię Kacper.
                        </h1>
                        <h2>
                            Jestem aspirującym web developerem, samoukiem z pasją do programowania zainteresowanym technologiami frontendowymi.
                        </h2>
                        <button>
                            Moje Projekty
                        </button>
                    </div>
                    <div className="about-me__picture">
                        <div className="picture"></div>
                    </div>
                </div>
            </section>
            <section className="main__section" id="projects">
                <div className="projects__wrapper">
                    <h1 className="projects__main-title">Projekty</h1>
                    <ProjectsList />
                </div>
            </section>
            <section className="main__section" id="contact">
                <div className="contact__wrapper">
                    <h1 className="contact__title">
                        Zapraszam do kontaktu
                    </h1>
                    <div className="contact__items-cnt">
                        <div className="contact__item-number">
                            <h1>
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
