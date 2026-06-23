import { createContext, useContext, useEffect, useState } from "react";
import type { DemoGalleryContextFields } from "@/libs/types";
const DemoGalleryContext = createContext<DemoGalleryContextFields>({
    zoomScreenEnabled: false,
    activeImgIndex: null,
    hasPrevImg: false,
    hasNextImg: false,
    zoomedImageUrl: "",
    urls: [],
    onZoom: () => { },
    onZoomClosed: () => { },
    onPrevClicked: () => { },
    onNextClicked: () => { },
});

export const DemoGalleryContextProvider = ({ children, urls }: { children: React.ReactNode, urls: string[] }) => {
    const [zoomScreenEnabled, setZoomScreenEnabled] = useState<boolean>(false);
    const [activeImgIndex, setActiveImgIndex] = useState<number | null>(null);
    const [hasPrevImg, setHasPrevImg] = useState<boolean>(false)
    const [hasNextImg, setHasNextImg] = useState<boolean>(false);

    //const urls: string[] = projectData.screenshotUrls;

    useEffect(() => {
        setHasPrevImg(activeImgIndex !== null && activeImgIndex > 0);
        setHasNextImg(activeImgIndex !== null && activeImgIndex < urls.length - 1)
    }, [activeImgIndex])

    const onZoom = (index: number) => {
        setZoomScreenEnabled(true)
        //setZoomedImageUrl(url)
        setActiveImgIndex(index)
    }
    const onZoomClosed = () => {
        setZoomScreenEnabled(false)
    }
    const onPrevClicked = () => {
        if (activeImgIndex == null) return
        setActiveImgIndex((prev) => (prev as number) - 1)
        //setZoomedImageUrl(urls[activeImageIndex + 1])

    }
    const onNextClicked = () => {
        if (activeImgIndex == null) return
        setActiveImgIndex((prev) => (prev as number) + 1)
        //setZoomedImageUrl(urls[activeImageIndex + 1])
    }

    const zoomedImageUrl = activeImgIndex !== null ? urls[activeImgIndex] : "";
    return (
        <DemoGalleryContext.Provider value={{
            zoomScreenEnabled, activeImgIndex, hasPrevImg, hasNextImg, zoomedImageUrl, urls,
            onZoom, onZoomClosed, onPrevClicked, onNextClicked

        }}>
            {children}
        </DemoGalleryContext.Provider>)
}

export const useDemoGalleryContext = (): DemoGalleryContextFields => {
    const context = useContext(DemoGalleryContext);
    if (!context) throw new Error("DEMO GALLERY CONTEXT IS NULL!");
    return context;
}