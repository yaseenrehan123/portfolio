import React from 'react'
import { FiLayout } from "react-icons/fi";
import RowDivider from '@/components/ui/general/columnDivider';
import { SkillCardProps } from '@/libs/types';
import SkillListElement from './skillListElement';

const SkillCard = ({ title = "", icon = null, skills = [] }: SkillCardProps) => {
    return (
        <div className='flex flex-col bg-[rgba(20,20,20,0.6)] outline-1 outline-neutral-800 w-90 min-h-10 rounded-[16px]
            py-8 px-4 gap-5 grow'>
            <div className='text-white text-2xl font-bold flex items-center w-full 
                gap-2'>
                <div className='text-blue-500'>{icon}</div>
                <div className='font-inter'>{title}</div>
            </div>
            <div className='w-full '>
                <RowDivider variant="sm" />
            </div>
            <div className='flex flex-col gap-2'>
                {skills?.map((title, index) => (
                    <SkillListElement title={title} key={index} />
                ))}
            </div>
        </div>
    )
}

export default SkillCard