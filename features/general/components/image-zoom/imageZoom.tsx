"use client";
import { ImageZoomProps } from '@/libs/types'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion"
const ImageZoom = ({
    imgSrc = "",
    enabled = false,
    onClose,
    onPrev,
    onNext,
    hasPrev = false,
    hasNext = false }: ImageZoomProps) => {
    const [imageLoaded, setImageLoaded] = useState<boolean>(false);

    useEffect(() => {
        setImageLoaded(false);
    }, [imgSrc])

    return (
        <AnimatePresence>
            {enabled && <motion.div className='flex items-center justify-center w-screen h-screen fixed bg-black/75 gap-5 top-0 left-0 z-10'
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "100%" }}
                transition={{ type: "spring", duration: 0.6 }}
                key={"zoomWrapper"}>
                <div className={`flex items-center justify-center text-white text-7xl 
            ${hasPrev ? "hover:cursor-pointer hover:text-gray-400 hover:scale-99 active:scale-98 transition-all duration-150 " : "invisible"}`}
                    onClick={onPrev}>
                    <MdKeyboardArrowLeft />
                </div>
                <motion.div className='flex items-center justify-center w-[70%] shrink-0 relative aspect-video'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", duration: 1 }}
                    key={"zoomImage"}>

                    {!imageLoaded && <div className='w-full h-full flex items-center justify-center text-yellow-500 bg-white'>
                        <div>Loading...</div>
                    </div>}

                    {imgSrc && <Image fill={true} src={imgSrc} alt='zoomed image' loading="eager"
                        onLoad={() => setImageLoaded(true)}
                        className={`${imageLoaded ? "opacity-100" : "opacity-0"} transition-all duration-75`} />}
                </motion.div>
                <div className={`flex items-center justify-center text-white text-7xl
            ${hasNext ? "hover:cursor-pointer hover:text-gray-400 hover:scale-99 active:scale-98 transition-all duration-150" : "invisible"}`}
                    onClick={onNext}>
                    <MdKeyboardArrowRight />
                </div>
                <div className='flex items-center justify-center absolute text-6xl text-white right-0 top-0 
            hover:cursor-pointer hover:text-gray-500 hover:scale-99 active:scale-97 transition-all duration-150'
                    onClick={onClose}>
                    <RxCross2 />
                </div>
            </motion.div>}
        </AnimatePresence >
    )
}

export default ImageZoom