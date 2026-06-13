import React from 'react'
import { PiBracketsAngleBold } from "react-icons/pi";

const SkillsHeading = () => {
    return (
        <div>
            <div className='flex items-center justify-center gap-2 text-[clamp(2rem,3vw,3rem)] font-bold text-white font-outfit'>
                <PiBracketsAngleBold className='text-blue-500' />
                <div>
                    Expertise & Skills
                </div>
            </div>
            <div className='text-gray-500 text-center text-2xl'>
                A comprehensive toolkit for building modern, full-stack applications from the ground up.
            </div>
        </div>
    )
}

export default SkillsHeading