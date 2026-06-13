import React from 'react'
import SkillsHeading from './skillsHeading'


const SkillsSection = () => {
    return (
        <div className='flex items-center flex-col w-full'>
            <SkillsHeading />
            <div className='flex flex-col bg-neutral-900 outline-1 outline-gray-500 w-80 min-h-10 rounded-[8px]
            py-2 px-4'>
                <div className='text-white text-2xl font-bold'>
                    Frontend
                </div>
            </div>
        </div>
    )
}

export default SkillsSection