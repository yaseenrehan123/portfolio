import React from 'react'
import { FaRegFolder } from "react-icons/fa";
const ProjectsHeading = () => {
    return (
        <div>
            <div className='flex items-center justify-center gap-2 text-[clamp(2rem,3vw,3rem)] font-bold text-white font-outfit'>
                <FaRegFolder className='text-blue-500' />
                <div>
                    Featured Projects
                </div>
            </div>
            <div className='text-gray-500 text-center text-[1.2rem]'>
                Showcasing complex full-stack architectures and modern frontend implementations.
            </div>
        </div>
    )
}

export default ProjectsHeading