import React from 'react'

import { projects } from './ProjectsListElements'

import ProjectItem from '../projectItem/ProjectItem'

import './ProjectsList.css'

const ProjectsList = () => {

    return (
        <div className="projects-list">
            {projects.map(item => {
                return <ProjectItem key={item.id} item={item} />
            })}
        </div>
    )
}

export default ProjectsList
