import React from 'react'
import IntroBackground from './introBackground'
import IntroBadge from './introBadge'

const IntroSection = () => {
    return (
        <div className='flex items-center flex-col w-full lg:w-[90%] xl:w-[80%] 
        h-screen bg-black relative overflow-hidden z-0'>
            <IntroBackground />
            <div className='flex items-center justify-start gap-4 flex-col border-2 border-red-500
            pt-36 z-10 '>
                <IntroBadge />
                <div className='flex items-center flex-col gap-2 font-inter font-extrabold text-[clamp(1.5rem,5vw,3.75rem)]'>
                    <div className='flex items-center justify-center gap-3'>
                        <div>Hi, I'm</div>
                        <div className='text-purple-500'>Yaseen</div>
                    </div>
                    <div >
                        Fullstack Developer
                    </div>
                </div>

            </div>
        </div>
    )
}

export default IntroSection