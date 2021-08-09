import React, { useContext, useState } from 'react'

import { LanguageContext } from '../../App'

import { Wrapper } from './ProjectItemElements'

import { AiFillGithub } from 'react-icons/ai'

import Carousel from '../carousel/Carousel'

import './ProjectItem.css'

const ProjectItem = ({ item }) => {

    const { name, descriptionPL, descriptionENG, githubLink, liveServerLink, images, icons } = item

    const { language } = useContext(LanguageContext)

    const [index, setIndex] = useState(0);
    const [width, setWidth] = useState(0);
    const [xPosition, setXPosition] = useState(0);

    const handleClickPrev = () => {
        if (index === 0) return;
        setIndex(index - 1);
        setXPosition(xPosition + width);
    };
    const handleClicknext = () => {
        if (index === images.length - 1) {
            setIndex(0);
            setXPosition(0);
        } else {
            setIndex(index + 1);
            setXPosition(xPosition - width);
        }
    };

    return (
        <div className="project-item">
            <Wrapper >
                <Carousel
                    images={images}
                    setIndex={setIndex}
                    setWidth={setWidth}
                    xPosition={xPosition}
                    setXPosition={setXPosition}
                    handleClickPrev={handleClickPrev}
                    handleClicknext={handleClicknext}
                />
            </Wrapper>
            <div className="project-item__text-card">
                <h1 className="title">{name}</h1>
                <p>{language === "PL" ? descriptionPL : descriptionENG}</p>
                <div className="project-item__btns-cnt">
                    <a href={githubLink}>
                        <button className="github-btn">
                            <span>
                                <AiFillGithub />
                            </span>
                            Github
                        </button>
                    </a>
                    <a href={liveServerLink}>
                        <button className="preview-btn">
                            {language === "PL" ? 'Podgląd' : 'Live Preview'}
                        </button>
                    </a>
                </div>
                <div className="project-item-icons-cnt">
                    {icons.map((item, index) => {
                        return <img src={item} key={index} alt="icon" />
                    })}
                </div>
            </div>
            {name !== "Movies viewer" && <div className="project-item_divider"></div>}
        </div>
    )
}

export default ProjectItem
