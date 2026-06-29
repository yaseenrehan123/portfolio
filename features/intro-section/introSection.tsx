import React from 'react'
import IntroBackground from './introBackground'
import IntroBadge from './introBadge'
import IntroDetails from './introDetails'
import IntroLinks from './introLinks'
import { motion } from "framer-motion";
import FadeInScreenProps from '../general/components/animation/fadeInScreen'

const IntroSection = () => {
    return (
        <FadeInScreenProps className='flex items-center flex-col w-full lg:w-[90%] xl:w-[80%]   
        h-screen bg-black relative overflow-hidden z-0'>
            <IntroBackground />
            <div className='flex items-center justify-start gap-4 flex-col 
            pt-36 z-10 '>
                <IntroBadge />
                <IntroDetails />
                <IntroLinks />

            </div>
        </FadeInScreenProps>
    )
}

export default IntroSection