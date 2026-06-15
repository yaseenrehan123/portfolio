import React from 'react'
import ProjectCard from '../general/components/project-cards/projectCard';

const ProjectsCardContainer = () => {
    return (
        <div className='flex items-center justify-center w-full'>
            <div className='flex w-[80%] gap-10 flex-wrap'>
                <ProjectCard
                    title='Eccomerce App'
                    description='
                A robust fullstack e-commerce platform featuring a customized admin dashboard,
                real-time inventory tracking, and seamless checkout flow.'
                    techTags={[
                        "Next.js",
                        "React",
                        "Prisma",
                        "PostgreSQL"
                    ]}
                    githubSrc=''
                    demoSrc=''
                />
                <ProjectCard
                    title='Eccomerce App'
                    description='
                A robust fullstack e-commerce platform featuring a customized admin dashboard,
                real-time inventory tracking, and seamless checkout flow.'
                    techTags={[
                        "Next.js",
                        "React",
                        "Prisma",
                        "PostgreSQL"
                    ]}
                    githubSrc=''
                    demoSrc=''
                />
                <ProjectCard
                    title='Eccomerce App'
                    description='
                A robust fullstack e-commerce platform featuring a customized admin dashboard,
                real-time inventory tracking, and seamless checkout flow.'
                    techTags={[
                        "Next.js",
                        "React",
                        "Prisma",
                        "PostgreSQL"
                    ]}
                    githubSrc=''
                    demoSrc=''
                />
            </div>
        </div>
    )
}

export default ProjectsCardContainer