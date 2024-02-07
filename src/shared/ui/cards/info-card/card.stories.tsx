import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './card';
import type { CardProps } from './card';

const cardProps: CardProps = {
  children: 'chidlren'
};

const meta: Meta<typeof Card> = {
  component: Card,
  tags: ['autodocs'],
  title: 'UI/Cards/Card'
};

export default meta;
type Story = StoryObj<typeof Card>;
const CardTemplate: Story = { render: (args) => <Card {...args} /> };

export const Playground = { ...CardTemplate };
Playground.args = cardProps;
