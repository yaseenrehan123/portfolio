import React from 'react'
import IntroBackground from './introBackground'
import IntroBadge from './introBadge'
import Button from '@/components/ui/general/button'
import MediaLinkButton from '@/components/ui/general/mediaLinkButton'
import { LuGithub } from "react-icons/lu";
import { SiGmail } from "react-icons/si";
import { RxCross1 } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa";

const IntroSection = () => {
    return (
        <div className='flex items-center flex-col w-full  
        h-screen bg-black relative overflow-hidden z-0'>
            <IntroBackground />
            <div className='flex items-center justify-start gap-4 flex-col border-2 border-red-500
            pt-36 z-10 '>
                <IntroBadge />
                <div className='flex items-center flex-col gap-2'>

                    <div className='flex items-center flex-col gap-2 font-inter font-extrabold text-[clamp(1.5rem,5vw,3.75rem)]
                    text-white'>
                        <div className='flex items-center justify-center gap-3'>
                            <div>Hi, I'm</div>
                            <div className='text-purple-500'>Yaseen</div>
                        </div>
                        <div >
                            Fullstack Developer
                        </div>
                    </div>
                    <div className='flex items-start flex-col gap-2 text-gray-500 text-[clamp(1rem,2vw,1.2rem)] w-full border-green-500
                    border-2 max-w-1/2'>
                        I build scaleable, performant applications with modern stack including React, Next.js, Node.js and Postgres.
                        I turn complex problems into elegant, user centric solutions.
                    </div>
                </div>
                <div className='flex items-center justify-center gap-2'>
                    <Button className='text-[1.2rem] w-48 h-14 font-bold rounded-4xl flex items-center justify-center gap-3'>
                        <div> View My Work </div>
                        <FaArrowRight />
                    </Button>
                    <MediaLinkButton href={""}>
                        <LuGithub />
                    </MediaLinkButton>
                    <MediaLinkButton href={""}>
                        <SiGmail />
                    </MediaLinkButton>
                    <MediaLinkButton href={""}>
                        <RxCross1 />
                    </MediaLinkButton>
                </div>


            </div>
        </div>
    )
}

export default IntroSection