import type { Meta, StoryObj } from '@storybook/react';

import { NavLink } from './nav-link';
import type { NavLinkProps } from './nav-link';

const navLinkProps: NavLinkProps = {
  children: 'nav link',
  href: '/'
};

const meta: Meta<typeof NavLink> = {
  component: NavLink,
  tags: ['autodocs'],
  title: 'UI/Links/NavLink'
};

export default meta;
type Story = StoryObj<typeof NavLink>;
const NavLinkTemplate: Story = {
  render: (args) => <NavLink {...args} />
};

export const Playground = { ...NavLinkTemplate };
Playground.args = navLinkProps;
