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
export type FormContainerProps = React.HTMLAttributes<HTMLDivElement> & {
    variant?: 'light' | 'dark'
};
export type FormFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
    variant?: 'default' | 'small' | 'large',
    bg?: "light" | "dark"
}
//NORMAL COMPONENTS
export type SkillCardProps = {
    title: string,
    icon: React.ReactNode,
    skills: string[]
}
export type SkillListElementProps = {
    title: string
}
export type ProjectCardProps = {
    id: string,
    title: string,
    description: string,
    techTags: string[],
    githubSrc: string,
}
//GENERAL
export type ProjectDetails = {
    id: string,
    title: string,
    description: string,
    techTags: string[],
    githubSrc: string,
    videoUrl: string,
    screenshotUrls: string[]

}