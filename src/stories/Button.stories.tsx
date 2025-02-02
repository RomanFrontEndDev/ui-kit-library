import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from '../components/button';
import Counter from '../components/counter';

const meta = {
    title: 'Button',
    component: Button,
    argTypes: {
        type: {
            control: 'radio',
            options: [
                'button',
                'submit',
                'reset'
            ],
        },
        theme: {
            control: 'radio',
            options: [
                'primary',
                'secondary'
            ],
        },
        size: {
            control: 'radio',
            options: [
                '28',
                '36',
                '56'
            ],
        },
    },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        type: 'button',
        theme: 'primary',
        size: 36,
        counter: false,
        label: 'Что сделать',
        focused: false,
        onClick: fn(),
        children: <Counter quantity={'1'} />
    },
};

export const Secondary: Story = {
    args: {
        type: 'button',
        theme: 'secondary',
        size: 36,
        counter: false,
        label: 'Что сделать',
        focused: false,
        onClick: fn(),
        children: <Counter quantity={'1'} />
    },
};
