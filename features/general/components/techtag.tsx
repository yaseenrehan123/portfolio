import React from 'react'

const Techtag = ({ title }: { title: string }) => {
    return (
        <div className='bg-[rgba(59,130,246,0.1)] h-9 flex items-center justify-center font-inter text-blue-500 rounded-2xl
        py-2 px-4 text-center font-bold outline-[0.1px] outline-blue-500/50 text-[0.8rem]'>
            <div>{title}</div>
        </div>
    )
}

export default Techtag