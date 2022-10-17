import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

// ----------
export interface TextInputRootProps {
    children: ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps) {
    return (
        <div className={clsx(
            'flex items-center gap-3',
            'py-4 px-3 rounded w-full h-12',
            'bg-gray-800',
            'outline-none focus-within:ring-2 ring-cyan-300'
        )}>
            {children}
        </div>
    );
}

// ----------

export interface TextInputIconProps {
    children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
    return (
        <Slot className='w-6 h-6 text-gray-400'>
            {props.children}
        </Slot>
    );
}

// ----------

export interface TextInputContentProps extends InputHTMLAttributes<HTMLInputElement> { }

function TextInputContent(props: TextInputContentProps) {
    return (
        <input
            className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
            {...props}
        />
    );
}

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputContent,
    Icon: TextInputIcon
}