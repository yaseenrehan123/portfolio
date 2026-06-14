import React from 'react'
import SkillsHeading from './skillsHeading'
import { FiLayout } from "react-icons/fi";
import RowDivider from '@/components/ui/general/columnDivider';
import SkillCard from '@/features/general/components/skill-cards/skillCard';
import SkillListElement from '../general/components/skill-cards/skillListElement';
import SkillsContainer from './skillsContainer';

const SkillsSection = () => {
    return (
        <div className='flex items-center flex-col w-full gap-20'>
            <SkillsHeading />
            <SkillsContainer />
        </div>
    )
}

export default SkillsSection