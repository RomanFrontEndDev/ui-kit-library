import type { Meta, StoryObj } from '@storybook/react';

import Counter from '../components/counter';

const meta = {
    title: 'Counter',
    component: Counter,
} satisfies Meta<typeof Counter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        theme: 'primary',
        size: 24,
        stroke: false,
        quantity: '1',
        pulse: false
    },
};

export const Secondary: Story = {
    args: {
        theme: 'secondary',
        size: 24,
        stroke: false,
        quantity: '1',
        pulse: false
    },
};
