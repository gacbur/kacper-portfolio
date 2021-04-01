import React from 'react'

import { AiFillGithub } from 'react-icons/ai'

import './ProjectItem.css'

const ProjectItem = ({ item }) => {

    const { name, description, githubLink, liveServerLink, image, icons } = item


    return (
        <div className="project-item">
            <a href={liveServerLink} className="project-item__image-card-link">
                <div className="project-item__image-card">
                    <img src={image} alt={name} />
                </div>
            </a>
            <div className="project-item__text-card">
                <h1 className="title">
                    {name}
                </h1>
                <p>
                    {description}
                </p>
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
                            Podgląd
                        </button>
                    </a>
                </div>
                <div className="project-item-icons-cnt">
                    {icons.map(item => {
                        return <img src={item} alt="icon" />
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProjectItem
