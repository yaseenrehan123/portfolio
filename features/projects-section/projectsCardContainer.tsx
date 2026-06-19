import React from 'react'
import ProjectCard from '../general/components/project-cards/projectCard';
import { projectsData } from '@/libs/projectData';
const ProjectsCardContainer = () => {
    return (
        <div className='flex items-center justify-center w-full'>
            <div className='flex w-[80%] gap-10 flex-wrap'>
                {projectsData.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        githubSrc={project.githubSrc}
                        id={project.id}
                        techTags={project.techTags}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProjectsCardContainer