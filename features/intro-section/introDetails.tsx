import React from 'react'

const IntroDetails = () => {
    return (
        <div className='flex items-center flex-col gap-2'>

            <div className='flex items-center flex-col gap-2 font-outfit font-extrabold text-[clamp(1.5rem,5vw,3.75rem)]
                    text-white'>
                <div className='flex items-center justify-center gap-3'>
                    <div>Hi, I'm</div>
                    <div className='text-purple-500'>Yaseen</div>
                </div>
                <div >
                    Fullstack Developer
                </div>
            </div>
            <div className='flex items-start flex-col gap-2 text-gray-500 text-[clamp(1rem,2vw,1.2rem)] w-full
                max-w-[80%] sm:max-w-[70%] md:max-w-[50%]'>
                I build scaleable, performant applications with modern stack including React, Next.js, Node.js and Postgres.
                I turn complex problems into elegant, user centric solutions.
            </div>
        </div>
    )
}

export default IntroDetails