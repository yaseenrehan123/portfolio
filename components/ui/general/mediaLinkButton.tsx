import { MediaLinkButtonProps } from '@/libs/types'
import Link from "next/link";
import React from 'react'

const MediaLinkButton = ({ children, href = "", target = "_blank", ...props }: MediaLinkButtonProps) => {
    return (
        <a className='w-10 h-10 rounded-full bg-neutral-950 outline-1 outline-gray-800 
        text-white flex items-center justify-center text-[1.4rem]'
            href={href}
            target={target}
            {...props}>
            <div >
                {children}
            </div>
        </a>
    )
}

export default MediaLinkButton