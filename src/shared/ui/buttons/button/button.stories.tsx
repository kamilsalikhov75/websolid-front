import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';
import type { ButtonProps } from './button';

const buttonProps: ButtonProps = {
  children: 'button'
};

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  title: 'UI/Buttons/Button'
};

export default meta;
type Story = StoryObj<typeof Button>;
const ButtonTemplate: Story = { render: (args) => <Button {...args} /> };

export const Playground = { ...ButtonTemplate };
Playground.args = buttonProps;
