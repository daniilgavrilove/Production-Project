import type { Meta, StoryObj } from '@storybook/react';

import { SideBar } from './SideBar';
import {ThemeDecorator} from "../../../shared/config/storybook/decorators/ThemeDecorator";
import {RouterDecorator} from "../../../shared/config/storybook/decorators/RouterDecorator";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Widgets/SideBar',
  decorators:[ThemeDecorator,RouterDecorator],
  component: SideBar,
  parameters: {
   // layout: 'centered',
  },
  tags: ['autodocs'],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  // args: {
  //   primary: true,
  //   label: 'Button',
  // },

};

