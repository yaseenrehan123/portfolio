import { DemoScreenshotsGridProps, ProjectDetails } from '@/libs/types'
import React from 'react'
import Image from 'next/image'
const DemoScreenshotsGrid = ({
    projectData,
    onScreenshotClicked
}: DemoScreenshotsGridProps) => {
    return (
        <div className='grid items-center grid-cols-5 gap-x-3 gap-y-4 w-full p-2 '>
            {projectData?.screenshotUrls.map((url, index) => (
                <Image src={url} width={300} height={100} alt='Project Screenshot' key={index}
                    className='hover:cursor-pointer hover:scale-98 hover:opacity-70 transition-all duration-150
                                    active:scale-95'
                    onClick={() => onScreenshotClicked(index)} />
            ))}

        </div>

    )
}

export default DemoScreenshotsGrid