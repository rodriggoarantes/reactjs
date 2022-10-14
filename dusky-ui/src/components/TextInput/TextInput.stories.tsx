import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'

import { TextInput, TextInputRootProps } from './TextInput'

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: [
            <TextInput.Icon>
                <Envelope size={24}/>
            </TextInput.Icon>,
            <TextInput.Input placeholder='Type your e-mail' />
        ]
    }, 
    argTypes: {
    }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

export const Withouticon: StoryObj<TextInputRootProps> = {
    args: {
        children: [
            <TextInput.Input placeholder='Type your e-mail' />
        ]
    }, 
}