import type { Meta, StoryObj } from '@storybook/react';

import { IconLink } from './icon-link';
import type { IconLinkProps } from './icon-link';
import { ICON_OPTIONS } from '../../icons/storybook';
import * as Icons from '@/shared/ui/icons';

const iconLinkProps: IconLinkProps = { href: '/', icon: <Icons.TelegramIcon /> };

const meta: Meta<typeof IconLink> = {
  argTypes: {
    icon: {
      control: {
        type: 'select'
      },
      options: ICON_OPTIONS
    }
  },
  component: IconLink,
  tags: ['autodocs'],
  title: 'UI/Links/IconLink'
};

export default meta;
type Story = StoryObj<typeof IconLink>;
const IconLinkTemplate: Story = {
  render: (args) => <IconLink {...args} />
};

export const Playground = { ...IconLinkTemplate };
Playground.args = iconLinkProps;
