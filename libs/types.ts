import { LinkProps } from "next/link"

//SHADCN COMPONENTS
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'default' | 'outline'
}
export type MediaLinkButtonProps = React.HTMLAttributes<HTMLDivElement> & Partial<LinkProps> & {}