import React from 'react'
import ProjectsHeading from './projectsHeading'
import ProjectsCardContainer from './projectsCardContainer'
import FadeInScreenProps from '../general/components/animation/fadeInScreen'
const ProjectsSection = () => {
    return (
        <FadeInScreenProps className='flex items-center flex-col gap-20 w-full' id='projects'>
            <ProjectsHeading />
            <ProjectsCardContainer />
        </FadeInScreenProps>
    )
}

export default ProjectsSection