import React from 'react'
import Techtag from '../techtag';
import Button from '@/components/ui/general/button'
import { SlSocialGithub } from "react-icons/sl";
import { GrShare } from "react-icons/gr";
import { ProjectCardProps } from '@/libs/types';

const ProjectCard = ({ title, description, techTags, githubSrc, demoSrc }: ProjectCardProps) => {
    return (
        <div className='bg-[rgba(20,20,20,0.6)] flex flex-col gap-4 w-90 min-h-10 outline-2 outline-neutral-900
            rounded-[8px] py-8 px-4 text-white grow'>
            <div className='text-2xl font-inter font-bold'>
                {title}
            </div>
            <div className='text-gray-500 text-[1.2rem]'>
                {description}
            </div>
            <div className='flex items-center gap-2 flex-wrap'>
                {techTags.map((title, index) => (
                    <Techtag title={title} key={index} />
                ))}
            </div>

            <div className='flex items-center gap-4'>
                <a href={githubSrc} target="_blank"
                    className='flex items-center justify-center bg-black rounded-3xl outline-1 outline-neutral-800 text-white
                    font-inter gap-2 w-26 h-12'
                >
                    <SlSocialGithub className='text-[1.3rem]' />
                    <div>Code</div>

                </a>

                <a href={demoSrc} target="_blank"
                    className='rounded-3xl flex items-center justify-center gap-2 font-inter w-34 
                    h-12 font-semibold bg-white text-black'>
                    <GrShare />
                    <div>Live Demo</div>

                </a>

            </div>
        </div>
    )
}

export default ProjectCard