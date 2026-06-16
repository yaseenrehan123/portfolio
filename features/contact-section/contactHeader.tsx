import React from 'react'
import { MdOutlineEmail } from "react-icons/md";

const ContactHeader = () => {
    return (
        <div className='flex flex-col gap-2 items-center w-full lg:w-[45%]'>
            <div className='text-[clamp(1.8rem,3vw,3rem)] font-inter font-bold text-white'>
                Let's build something <span className='text-purple-500'>amazing</span>
            </div>
            <div className='text-gray-500 text-[1.2rem]'>
                Whether you have a question, a project idea, or just want to connect, my inbox is always open.
                I'll try my best to get back to you!
            </div>
            <div className='flex items-center w-full h-20 bg-[rgba(20,20,20,0.6)] outline-2 outline-neutral-900
                rounded-2xl'>
                <div className='h-full w-[10%] text-blue-500 flex items-center justify-center
                    text-2xl'>
                    <MdOutlineEmail />
                </div>
                <div className='h-full w-[90%] flex flex-col gap-2 text-[1.2rem]'>
                    <div className='text-gray-500'>Email</div>
                    <div className='text-white'>hello@example.com</div>
                </div>
            </div>
        </div>
    )
}

export default ContactHeader