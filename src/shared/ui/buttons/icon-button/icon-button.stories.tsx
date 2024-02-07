import type { Meta, StoryObj } from '@storybook/react';

import { IconButton } from './icon-button';
import type { IconButtonProps } from './icon-button';
import * as Icons from '@/shared/ui/icons';
import { ICON_OPTIONS } from '@/shared/ui/icons/storybook';

const iconButtonProps: IconButtonProps = {
  icon: <Icons.BurgerMenuIcon />
};

const meta: Meta<typeof IconButton> = {
  argTypes: {
    icon: {
      control: {
        type: 'select'
      },
      options: ICON_OPTIONS
    }
  },
  component: IconButton,
  tags: ['autodocs'],
  title: 'UI/Buttons/IconButton'
};

export default meta;
type Story = StoryObj<typeof IconButton>;
const IconButtonTemplate: Story = { render: (args) => <IconButton {...args} /> };

export const Playground = { ...IconButtonTemplate };
Playground.args = iconButtonProps;
