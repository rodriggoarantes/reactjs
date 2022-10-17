import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface TextProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}

export function Text({ size = 'md', children, className, asChild }: TextProps) {
    const TextTag = asChild ? Slot : 'span';
    return (
        <TextTag className={clsx(
                'text-gray-100 font-sans', 
                {
                    'text-xs': size === 'sm',
                    'text-sm': size === 'md',
                    'text-md': size === 'lg',
                },
                className
            )}
        >
            {children}
        </TextTag>
    );
}