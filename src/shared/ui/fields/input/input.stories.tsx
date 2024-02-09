import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './input';
import type { InputProps } from './input';

const inputProps: InputProps = {
  label: 'Label',
  placeholder: 'Placeholder'
};

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ['autodocs'],
  title: 'UI/Fields/Input'
};

export default meta;
type Story = StoryObj<typeof Input>;
const InputTemplate: Story = { render: (args) => <Input {...args} /> };

export const Playground = { ...InputTemplate };
Playground.args = inputProps;
