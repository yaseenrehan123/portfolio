import { SkillListElementProps } from '@/libs/types'
import React from 'react'

const SkillListElement = ({ title }: SkillListElementProps) => {
    return (
        <div className='flex items-center gap-2'>
            <div className='w-2 h-2 bg-purple-500 rounded-2xl'></div>
            <div className='text-gray-500  font-inter'>{title}</div>
        </div>
    )
}

export default SkillListElement