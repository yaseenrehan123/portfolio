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
    const [zoomedImageUrl, setZoomedImageUrl] = useState<string>("")
    const [zoomScreenEnabled, setZoomScreenEnabled] = useState<boolean>(false);
    useEffect(() => {
        console.log(id);
    }, [id])

    const onScreenshotClicked = (url: string) => {
        setZoomScreenEnabled(true)
        setZoomedImageUrl(url)
    }

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
                            onClick={() => onScreenshotClicked(url)} />
                    ))}

                </div>
                <ImageZoom imgSrc={zoomedImageUrl} enabled={zoomScreenEnabled} />
            </div>

        </div>
    )
}

export default DemoPage