import { cn } from '@/libs/utils'
import type { RowDividerProps } from '@/libs/types'
import { cva } from 'class-variance-authority'
import React from 'react'

const RowDivider = ({ variant, className, children, ...props }: RowDividerProps) => {
    return (
        <div {...props} className={cn(variants({ variant }), className)}>{children}</div>
    )
}

const variants = cva('flex items-center justify-center w-full bg-neutral-800 rounded-2xl', {
    variants: {
        variant: {
            sm: 'h-0.5',
            md: 'h-1',
            lg: 'h-1.5',
            xl: 'h-2'
        }
    }
})

export default RowDivider