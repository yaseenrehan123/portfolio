import { DemoScreenshotsGridProps, ProjectDetails } from '@/libs/types'
import React from 'react'
import Image from 'next/image'
import { useDemoGalleryContext } from '@/contexts/demoGalleryContext'
const DemoScreenshotsGrid = () => {
    const { urls, onZoom } = useDemoGalleryContext();
    return (
        <div className='grid items-center grid-cols-5 gap-x-3 gap-y-4 w-full p-2 '>
            {urls.map((url, index) => (
                <Image src={url} width={300} height={169} alt='Project Screenshot' key={index}
                    className='hover:cursor-pointer hover:scale-98 hover:opacity-70 transition-all duration-150
                                    active:scale-95 object-cover'
                    onClick={() => onZoom(index)} />
            ))}

        </div>

    )
}

export default DemoScreenshotsGrid