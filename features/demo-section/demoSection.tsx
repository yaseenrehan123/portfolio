"use client";
import Image from 'next/image'
import { useParams, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { projectsData } from '@/libs/projectData';
import ImageZoom from '@/features/general/components/image-zoom/imageZoom';
import DemoVideoEmbed from './demoVideoEmbed';
import DemoScreenshotsGrid from './demoScreenshotsGrid';
const DemoSection = () => {
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

    const onScreenshotClicked = (index: number) => {
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
                <DemoVideoEmbed videoUrl={selectedProjectData.videoUrl} />
                <DemoScreenshotsGrid projectData={selectedProjectData} onScreenshotClicked={onScreenshotClicked} />
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

export default DemoSection