import React from 'react'

import { AiFillGithub } from 'react-icons/ai'

import './ProjectItem.css'

const ProjectItem = ({ item, descriptionn }) => {

    const { name, description, githubLink, liveServerLink, image, icons } = item

    console.log(item.id)

    return (
        <div className="project-item">
            <a href={liveServerLink} className="project-item__image-card-link">
                <div className="project-item__image-card">
                    <img src={image} alt={name} />
                </div>
            </a>
            <div className="project-item__text-card">
                <h1 className="title">{name}</h1>
                <p>{description}</p>
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
