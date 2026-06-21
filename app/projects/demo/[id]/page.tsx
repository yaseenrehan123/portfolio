"use client";
import Image from 'next/image'
import { useParams, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { projectsData } from '@/libs/projectData';
import ImageZoom from '@/features/general/components/image-zoom/imageZoom';
const DemoPage = () => {
    const params = useParams();
    const id: string = (params.id as string) || "";
    const selectedProjectData = projectsData.find((data) => id == data.id);
    if (!selectedProjectData) { throw new Error(`Error Occured in Retrieving Project Data: ${id}`) }
    //const [zoomedImageUrl, setZoomedImageUrl] = useState<string>("")
    const [zoomScreenEnabled, setZoomScreenEnabled] = useState<boolean>(false);
    const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
    const [hasPrev, setHasPrev] = useState<boolean>(false)
    const [hasNext, setHasNext] = useState<boolean>(false);

    const urls: string[] = selectedProjectData.screenshotUrls;
    /*useEffect(() => {
        console.log(id);
    }, [id])*/

    useEffect(() => {
        setHasPrev(activeImageIndex !== null && activeImageIndex > 0);
        setHasNext(activeImageIndex !== null && activeImageIndex < urls.length - 1)
    }, [activeImageIndex])

    const onScreenshotClicked = (url: string, index: number) => {
        setZoomScreenEnabled(true)
        //setZoomedImageUrl(url)
        setActiveImageIndex(index)
    }
    const onZoomScreenClosed = () => {
        setZoomScreenEnabled(false)
    }
    const onZoomScreenPrevClicked = () => {
        if (activeImageIndex == null) return
        setActiveImageIndex((prev) => (prev as number) - 1)
        //setZoomedImageUrl(urls[activeImageIndex + 1])

    }
    const onZoomScreenNextClicked = () => {
        if (activeImageIndex == null) return
        setActiveImageIndex((prev) => (prev as number) + 1)
        //setZoomedImageUrl(urls[activeImageIndex + 1])
    }

    const zoomedImageUrl = activeImageIndex !== null ? urls[activeImageIndex] : "";

    return (
        <div className='bg-black w-screen h-screen overflow-x-hidden'>
            <div className='flex items-center flex-col gap-6 w-full h-full pt-10 px-2'>
                <iframe className='w-full h-[70%] bg-white shrink-0'
                    src={selectedProjectData?.videoUrl}
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen={true} loading="eager" />
                <div className='grid items-center grid-cols-5 gap-x-3 gap-y-4 w-full p-2 '>
                    {selectedProjectData?.screenshotUrls.map((url, index) => (
                        <Image src={url} width={300} height={100} alt='Project Screenshot' key={index}
                            className='hover:cursor-pointer hover:scale-98 hover:opacity-70 transition-all duration-150
                            active:scale-95'
                            onClick={() => onScreenshotClicked(url, index)} />
                    ))}

                </div>
                <ImageZoom
                    imgSrc={zoomedImageUrl}
                    enabled={zoomScreenEnabled}
                    onClose={onZoomScreenClosed}
                    hasPrev={hasPrev}
                    hasNext={hasNext}
                    onPrev={onZoomScreenPrevClicked}
                    onNext={onZoomScreenNextClicked} />
            </div>

        </div>
    )
}

export default DemoPage