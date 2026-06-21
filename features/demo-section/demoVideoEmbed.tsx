import React from 'react'

const DemoVideoEmbed = ({ videoUrl }: { videoUrl: string }) => {
    return (
        <iframe className='w-full h-[70%] bg-white shrink-0'
            src={videoUrl}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen={true} loading="eager" />
    )
}

export default DemoVideoEmbed