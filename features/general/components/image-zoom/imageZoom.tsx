import { ImageZoomProps } from '@/libs/types'
import Image from 'next/image'
import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
const ImageZoom = ({
    imgSrc = "",
    enabled = false,
    onClose,
    onPrev,
    onNext,
    hasPrev = false,
    hasNext = false }: ImageZoomProps) => {
    if (!enabled) return <div></div>
    return (
        <div className='flex items-center justify-center w-screen h-screen fixed bg-black/75 gap-5'>
            {hasPrev && <div className='flex items-center justify-center text-white text-7xl 
            hover:cursor-pointer hover:text-gray-400 hover:scale-99 active:scale-98 transition-all duration-150'
                onClick={onPrev}>
                <MdKeyboardArrowLeft />
            </div>}
            <div className='flex items-center justify-center w-[70%] shrink-0 relative aspect-video' >
                {imgSrc && <Image fill={true} src={imgSrc} alt='zoomed image' loading="eager" />}
            </div>
            {hasNext && <div className='flex items-center justify-center text-white text-7xl
            hover:cursor-pointer hover:text-gray-400 hover:scale-99 active:scale-98 transition-all duration-150'
                onClick={onNext}>
                <MdKeyboardArrowRight />
            </div>}
            <div className='flex items-center justify-center absolute text-6xl text-white right-0 -top-7 
            hover:cursor-pointer hover:text-gray-500 hover:scale-99 active:scale-97 transition-all duration-150'
                onClick={onClose}>
                <RxCross2 />
            </div>
        </div>
    )
}

export default ImageZoom