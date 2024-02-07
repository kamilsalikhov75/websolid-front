import type { Meta, StoryObj } from '@storybook/react';

import { Link } from './link';
import type { LinkProps } from './link';
import { ICON_OPTIONS } from '../../icons/storybook';

const linkProps: LinkProps = {
  children: 'link',
  href: '/'
};

const meta: Meta<typeof Link> = {
  argTypes: {
    icon: {
      control: {
        type: 'select'
      },
      options: ICON_OPTIONS
    }
  },
  component: Link,
  tags: ['autodocs'],
  title: 'UI/Links/Link'
};

export default meta;
type Story = StoryObj<typeof Link>;
const LinkTemplate: Story = {
  render: (args) => <Link {...args} />
};

export const Playground = { ...LinkTemplate };
Playground.args = linkProps;
