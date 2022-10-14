import { ReactNode } from 'react';
import { clsx } from 'clsx';

export interface HeadingProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
}

export function Heading({ size = 'md', children }: HeadingProps) {
    const H = size === 'lg' ? 'h1' : 'h2';
    return (
        <H className={clsx('text-gray-100 font-bold font-sans', {
            'text-lg': size === 'sm',
            'text-xl': size === 'md',
            'text-2xl': size === 'lg',
        })}>
            {children}
        </H>
    );
}