import type { Meta, StoryObj } from '@storybook/react';

import { MaskedInput } from './masked-input';
import type { MaskedInputProps } from './masked-input';
import { MASK_OPTIONS } from './storybook';

const maskedInputProps: MaskedInputProps = {
  label: 'Label',
  maskType: 'phone',
  placeholder: 'Placeholder'
};

const meta: Meta<typeof MaskedInput> = {
  argTypes: {
    maskitoOptions: {
      control: {
        type: 'select'
      },
      options: MASK_OPTIONS
    }
  },
  component: MaskedInput,
  tags: ['autodocs'],
  title: 'UI/Fields/MaskedInput'
};

export default meta;
type Story = StoryObj<typeof MaskedInput>;
const InputTemplate: Story = { render: (args) => <MaskedInput {...args} /> };

export const Playground = { ...InputTemplate };
Playground.args = maskedInputProps;
