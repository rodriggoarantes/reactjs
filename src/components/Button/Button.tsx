import { ReactNode } from 'react';
import { clsx } from 'clsx';

export interface ButtonProps {
    children: ReactNode;
}

export function Button({ children }: ButtonProps) {
    return (
        <button className={clsx(
            'py-4', 'px-3',
            'rounded',
            'bg-cyan-500',
            'font-sans text-black text-sm',
            'w-full',
            'transition-colors hover:bg-cyan-300',
            'outline-none focus:ring-2 ring-white')}>
            {children}
        </button>
    );
}