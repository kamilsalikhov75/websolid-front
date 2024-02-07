import type { Meta, StoryObj } from '@storybook/react';

import { LinkButton } from './link-button';
import type { LinkButtonProps } from './link-button';

const linkButtonProps: LinkButtonProps = {
  children: 'link button',
  href: '/'
};

const meta: Meta<typeof LinkButton> = {
  component: LinkButton,
  tags: ['autodocs'],
  title: 'UI/Buttons/LinkButton'
};

export default meta;
type Story = StoryObj<typeof LinkButton>;
const LinkButtonTemplate: Story = {
  render: (args) => <LinkButton {...args} />
};

export const Playground = { ...LinkButtonTemplate };
Playground.args = linkButtonProps;
