import { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

export function Button({ children, className, ...props}: ButtonProps) {
    return (
        <button 
            className={clsx(
                'py-3', 'px-4',
                'rounded',
                'bg-cyan-500',
                'font-semibold text-black text-sm',
                'w-full',
                'transition-colors hover:bg-cyan-300',
                'outline-none focus:ring-2 ring-white',
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}