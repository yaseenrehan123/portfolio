import { ImageZoomProps } from '@/libs/types'
import Image from 'next/image'
import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
const ImageZoom = ({
    imgSrc = "",
    enabled = false }: ImageZoomProps) => {
    if (!enabled) return <div></div>
    return (
        <div className='flex items-center justify-center w-screen h-screen fixed bg-black/75 gap-5'>
            <div className='flex items-center justify-center text-white text-7xl'>
                <MdKeyboardArrowLeft />
            </div>
            <div className='flex items-center justify-center w-[70%] shrink-0 relative aspect-video'>
                {imgSrc && <Image fill={true} src={imgSrc} alt='zoomed image' loading="eager" />}
            </div>
            <div className='flex items-center justify-center text-white text-7xl'>
                <MdKeyboardArrowRight />
            </div>
        </div>
    )
}

export default ImageZoom