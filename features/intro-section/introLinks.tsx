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
            <Button className='text-[1.2rem] w-[60vw] sm:w-48 h-[50px] font-bold rounded-4xl flex items-center justify-center gap-3'>
                <div> View My Work </div>
                <FaArrowRight />
            </Button>
            <div className='flex items-center justify-center gap-4'>
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
    )
}

export default IntroLinks