import { LinkProps } from "next/link"

//SHADCN COMPONENT VARIANTS
export type RowDividerVariants = {
    variant?: 'sm' | 'md' | 'lg' | 'xl'
}

//SHADCN COMPONENTS
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'default' | 'outline'
}
export type MediaLinkButtonProps = React.HTMLAttributes<HTMLDivElement> & Partial<LinkProps> & {}
export type RowDividerProps = React.HTMLAttributes<HTMLDivElement> & RowDividerVariants;
export type SkillCardProps = {
    title: string,
    icon: React.ReactNode,
    skills: string[]
}
export type SkillListElementProps = {
    title: string
}