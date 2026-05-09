import React from 'react'
import IntroBackground from './introBackground'

const IntroSection = () => {
    return (
        <div className='flex items-center flex-col w-full lg:w-[90%] xl:w-[80%] 
        h-screen bg-black relative overflow-hidden z-0'>
            <IntroBackground />
            <div className='w-full h-full flex items-center justify-start flex-col border-2 border-red-500
            pt-50 z-10'>
                <div className='w-70 h-10 bg-neutral-900 rounded-2xl border border-neutral-800
                text-center flex items-center justify-center text-gray-600 gap-2'>
                    <div className='w-2 h-2 relative flex'>
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75">
                        </span>
                        <span className='relative inline-flex rounded-full h-2 w-2 bg-green-600'></span>
                    </div>
                    <div className='text-gray-600'>
                        Available for new opportunities
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroSection