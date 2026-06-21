import React, { useEffect, useState } from 'react'
import ImageZoom from '../general/components/image-zoom/imageZoom';
import { ProjectDetails } from '@/libs/types';

const DemoZoomContainer = ({ projectData }: { projectData: ProjectDetails }) => {
    const [zoomScreenEnabled, setZoomScreenEnabled] = useState<boolean>(false);
    const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
    const [hasPrev, setHasPrev] = useState<boolean>(false)
    const [hasNext, setHasNext] = useState<boolean>(false);

    const urls: string[] = projectData.screenshotUrls;

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
        <ImageZoom
            imgSrc={zoomedImageUrl}
            enabled={zoomScreenEnabled}
            onClose={onZoomScreenClosed}
            hasPrev={hasPrev}
            hasNext={hasNext}
            onPrev={onZoomScreenPrevClicked}
            onNext={onZoomScreenNextClicked} />
    )
}

export default DemoZoomContainer