import type { Meta, StoryObj } from '@storybook/react';

import { Loader } from './Loader';
import { ThemeDecorator } from '../../../shared/config/storybook/decorators/ThemeDecorator';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Shared/Loader',
    decorators: [ThemeDecorator],
    component: Loader,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    // args: {
    //   primary: true,
    //   label: 'Button',
    // },

};
