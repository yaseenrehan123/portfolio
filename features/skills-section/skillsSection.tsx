import React from 'react'
import SkillsHeading from './skillsHeading'
import SkillsContainer from './skillsContainer';
import FadeInScreen from '../general/components/animation/fadeInScreen';

const SkillsSection = () => {
    return (
        <FadeInScreen className='flex items-center flex-col w-full gap-20'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 1 }}>
            <SkillsHeading />
            <SkillsContainer />
        </FadeInScreen>
    )
}

export default SkillsSection