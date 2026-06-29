import contactFormSchema from "@/schemas/contactFormSchema";
import { HTMLMotionProps } from "framer-motion";
import z from "zod";

//SHADCN COMPONENT VARIANTS
export type RowDividerVariants = {
    variant?: 'sm' | 'md' | 'lg' | 'xl'
}

//SHADCN COMPONENTS
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'default' | 'outline'
}
export type MediaLinkButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement>
export type RowDividerProps = React.HTMLAttributes<HTMLDivElement> & RowDividerVariants;
export type FormContainerProps = React.HTMLAttributes<HTMLFormElement> & {
    variant?: 'light' | 'dark'
};
export type FormFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
    variant?: 'default' | 'small' | 'large',
    bg?: "light" | "dark"
}
export type MessageAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    variant?: "default" | "sm" | "md" | "lg",
    theme?: "light" | "dark"
}
export type MessageProps = React.HTMLAttributes<HTMLDivElement> & {
    variant?: 'default' | 'success' | 'loading' | 'error',
    disableOnContent?: 'never' | 'sm' | 'md' | 'lg',
    content?: String
}
export type AlignmentProps = React.HTMLAttributes<HTMLDivElement> & {
    variant?: 'rowLeft' | 'rowCenter' | 'rowRight' | 'colLeft' | 'colCenter' | 'colRight',
    gap?: 'sm' | 'md' | 'lg'
};
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
export type ImageZoomProps = {
    imgSrc: string,
    enabled: boolean
    onClose: () => void,
    onPrev: () => void,
    onNext: () => void,
    hasPrev: boolean,
    hasNext: boolean
}
export type DemoScreenshotsGridProps = {
    projectData: ProjectDetails,
    onScreenshotClicked: (index: number) => void
}
export type FadeInScreenProps = HTMLMotionProps<"div">;
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
//CONTEXT
export type DemoGalleryContextFields = {
    zoomScreenEnabled: boolean,
    activeImgIndex: number | null,
    hasPrevImg: boolean,
    hasNextImg: boolean,
    zoomedImageUrl: string,
    urls: string[],
    onZoom: (index: number) => void,
    onZoomClosed: () => void,
    onPrevClicked: () => void,
    onNextClicked: () => void,
}
//FORM FIELDS
export type ContactFormFields = z.infer<typeof contactFormSchema>;
//TANSTACK QUERY FIELDS
export type ContactQueryFields = ContactFormFields & {
    access_key: string
}