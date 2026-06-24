import React from 'react'
import ProjectsHeading from './projectsHeading'
import ProjectsCardContainer from './projectsCardContainer'


const ProjectsSection = () => {
    return (
        <div className='flex items-center flex-col gap-20 w-full' id='projects'>
            <ProjectsHeading />
            <ProjectsCardContainer />
        </div>
    )
}

export default ProjectsSection