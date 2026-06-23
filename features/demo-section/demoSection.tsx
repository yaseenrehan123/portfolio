"use client";
import { useParams } from 'next/navigation'
import { projectsData } from '@/libs/projectData';
import DemoVideoEmbed from './demoVideoEmbed';
import DemoScreenshotsGrid from './demoScreenshotsGrid';
import { DemoGalleryContextProvider } from '@/contexts/demoGalleryContext';
import DemoZoomContainer from './demoZoomContainer';
const DemoSection = () => {
    const params = useParams();
    const id: string = (params.id as string) || "";
    const selectedProjectData = projectsData.find((data) => id == data.id);
    if (!selectedProjectData) { throw new Error(`Error Occured in Retrieving Project Data: ${id}`) }

    const urls: string[] = selectedProjectData.screenshotUrls;

    return (
        <div className='bg-black w-screen h-screen overflow-x-hidden'>
            <div className='flex items-center flex-col gap-6 w-full h-full pt-10 px-2'>
                <DemoVideoEmbed videoUrl={selectedProjectData.videoUrl} />
                <DemoGalleryContextProvider urls={urls}>
                    <DemoScreenshotsGrid />
                    <DemoZoomContainer />
                </DemoGalleryContextProvider>
            </div>

        </div>
    )
}

export default DemoSection