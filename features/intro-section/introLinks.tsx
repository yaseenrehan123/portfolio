import React from 'react'
import Button from '@/components/ui/general/button'
import MediaLinkButton from '@/components/ui/general/mediaLinkButton'
import { LuGithub } from "react-icons/lu";
import { SiGmail } from "react-icons/si";
import { RxCross1 } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa";

const IntroLinks = () => {
    return (
        <div className='flex items-center  flex-col sm:flex-row sm:justify-center gap-4'>
            <a className='text-[1.2rem] w-[60vw] sm:w-48 h-12.5 font-bold rounded-4xl flex items-center justify-center gap-3
            bg-white hover:cursor-pointer hover:text-gray-400 hover:scale-99 active:scale-98 transition-all duration-150'
                href='#projects'>
                <div> View My Work </div>
                <FaArrowRight />
            </a>
            <div className='flex items-center justify-center gap-4'>
                <MediaLinkButton href={"https://github.com/yaseenrehan123"}>
                    <LuGithub />
                </MediaLinkButton>
                <MediaLinkButton href={"mailto:yr6190457@gmail.com"}>
                    <SiGmail />
                </MediaLinkButton>
                <MediaLinkButton href={"https://x.com/MagstarD39339"}>
                    <RxCross1 />
                </MediaLinkButton>
            </div>

        </div>
    )
}

export default IntroLinks