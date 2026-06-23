import React, { useEffect, useState } from 'react'
import ImageZoom from '../general/components/image-zoom/imageZoom';
import { ProjectDetails } from '@/libs/types';
import { useDemoGalleryContext } from '@/contexts/demoGalleryContext';

const DemoZoomContainer = () => {
    const {
        zoomedImageUrl,
        zoomScreenEnabled,
        hasPrevImg,
        hasNextImg,
        onZoomClosed,
        onPrevClicked,
        onNextClicked

    } = useDemoGalleryContext();

    return (
        <ImageZoom
            imgSrc={zoomedImageUrl}
            enabled={zoomScreenEnabled}
            onClose={onZoomClosed}
            hasPrev={hasPrevImg}
            hasNext={hasNextImg}
            onPrev={onPrevClicked}
            onNext={onNextClicked} />
    )
}

export default DemoZoomContainer