import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Lorem ipsum text',
    }, 
    argTypes: {
        // children: { table: { disable: true }},
        size: {
            defaultValue: 'md',
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm',
        children: 'Text Small'
    }
}

export const Medium: StoryObj<TextProps> = {
    args: {
        size: 'md',
        children: 'Text Medium'
    }
}

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg',
        children: 'Text Large'
    }
}