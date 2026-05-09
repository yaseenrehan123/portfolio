import React from 'react'

const IntroBackground = () => {
    return (
        <div className='absolute w-full h-full z-0'>
            <div className='absolute w-150 h-150 bg-[rgb(139,92,246)]/30 rounded-full mix-blend-screen blur-[150px]
            left-[100] top-[-80] filter pointer-events-none  '>

            </div>
            <div className='absolute w-150 h-150 bg-[#3b82f6]/30 rounded-full mix-blend-screen blur-[150px]
            right-[-50] bottom-[-80] filter pointer-events-none'>

            </div></div>
    )
}

export default IntroBackground