import React from 'react'
import { FiLayout } from 'react-icons/fi'
import SkillCard from '../general/components/skill-cards/skillCard'

const SkillsContainer = () => {
    return (
        <div className='flex items-center justify-center flex-row'>
            <div className='flex  flex-wrap gap-10 w-[80%]'>
                {/*FRONTEND*/}
                <SkillCard
                    title='Frontend'
                    icon={<FiLayout />}
                    skills={[
                        "React",
                        "Next.js",
                        "Vite",
                        "HTML/CSS",
                        "Tailwind",
                        "Zustand"
                    ]} />
                {/*BACKEND*/}
                <SkillCard
                    title='Backend'
                    icon={<FiLayout />}
                    skills={[
                        "Node.js",
                        "Express.js",
                        "REST APIs",
                        "HTML/CSS",
                        "GraphQL",
                        "Authentication"
                    ]} />
                {/*DATABASE*/}
                <SkillCard
                    title='Database & ORM'
                    icon={<FiLayout />}
                    skills={[
                        "PostgreSQL",
                        "Prisma ORM",
                        "MongoDB",
                        "Redis",
                    ]} />
                {/*TOOLS*/}
                <SkillCard
                    title='Tools & DevOps'
                    icon={<FiLayout />}
                    skills={[
                        "Git",
                        "Docker",
                        "AWS",
                        "Vercel",
                        "CI/CD",
                    ]} />
            </div>
        </div>

    )
}

export default SkillsContainer