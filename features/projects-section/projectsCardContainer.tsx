import React from 'react'
import ProjectCard from '../general/components/project-cards/projectCard';

const ProjectsCardContainer = () => {
    return (
        <div className='flex items-center justify-center w-full'>
            <div className='flex w-[80%] gap-10 flex-wrap'>
                {/*Authentication*/}
                <ProjectCard
                    title='Auth From Scratch'
                    description='A full robust custom auth system made with scratch without using any external auth libraries.
                    '
                    techTags={[
                        "React",
                        "Express.js",
                        "Node",
                        "Typescript",
                        "Prisma",
                        "PostgreSQL",
                        "JWT",
                        "Web"
                    ]}
                    githubSrc='https://github.com/yaseenrehan123/Authentication'
                    demoSrc=''
                />
                <ProjectCard
                    title='Watchverse'
                    description='
                    A media review site made with TMDB API, Where you can search for movies, TV shows, Observe their rating etc.
                '
                    techTags={[
                        "React",
                        "Shadcn",
                        "Zustand",
                        "Frontend",
                        "Web"
                    ]}
                    githubSrc='https://github.com/yaseenrehan123/Watchverse'
                    demoSrc=''
                />
                <ProjectCard
                    title='Piton Engine'
                    description='
               A custom game engine written in Typescript, Which allows you to draw sprites on a canvas and make 2D games.'
                    techTags={[
                        "Node.js",
                        "Game"
                    ]}
                    githubSrc='https://github.com/yaseenrehan123/Piton-Engine'
                    demoSrc=''
                />
                <ProjectCard
                    title='Nova Fire'
                    description='
              A basic space shooter game made with using Piton-Engine, A custom engine written in Typescript.'
                    techTags={[
                        "Node.js",
                        "React",
                        "ECS",
                        "Game",
                    ]}
                    githubSrc='https://github.com/yaseenrehan123/Nova-Fire'
                    demoSrc=''
                />
                <ProjectCard
                    title='Ecosystem-Simulation'
                    description='
              A ecosystem simulation with rabbits as "Prey" and Foxes as "Predators", Made with Piton-Engine'
                    techTags={[
                        "React",
                        "ECS",
                        "Simulation",
                    ]}
                    githubSrc='https://github.com/yaseenrehan123/Ecosystem-Simulation'
                    demoSrc=''
                />
            </div>
        </div>
    )
}

export default ProjectsCardContainer