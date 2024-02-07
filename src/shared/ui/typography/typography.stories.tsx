import type { Meta, StoryObj } from '@storybook/react';

import type { TypographyProps, TypographyTag } from './typography';
import { Typography } from './typography';

const typographiesProps: TypographyProps<TypographyTag>[] = [
  {
    children: 'title 1',
    variant: 'title-1'
  },
  {
    children: 'title 2',
    variant: 'title-2'
  },
  {
    children: 'title 3',
    variant: 'title-3'
  },
  {
    children: 'body base',
    variant: 'body-base'
  },
  {
    children: 'body lg',
    variant: 'body-lg'
  },
  {
    children: 'body xl',
    variant: 'body-xl'
  },
  {
    children: 'body 2xl',
    variant: 'body-2xl'
  }
];

const typographyProps: TypographyProps<TypographyTag> = {
  children: 'typography',
  tag: 'div',
  variant: 'title-1'
};

type Story = StoryObj<typeof Typography>;
const TypographyTemplate: Story = { render: (args) => <Typography {...args} /> };

export const Playground = { ...TypographyTemplate };
Playground.args = typographyProps;

export const AllTypographies = () => (
  <>
    {typographiesProps.map((props) => (
      <Typography key={props.variant} {...props} />
    ))}
  </>
);

export default {
  component: Typography,
  title: 'UI/Typography'
} as Meta<typeof Typography>;
