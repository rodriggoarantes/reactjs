import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from './Heading'

export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Lorem ipsum text',
    }, 
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            defaultValue: 'md',
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}


export const Small: StoryObj<HeadingProps> = {
    args: {
        size: 'sm',
        children: 'Heading Small'
    }
}

export const Large: StoryObj<HeadingProps> = {
    args: {
        size: 'lg',
        children: 'Heading Large'
    }
}