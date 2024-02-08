import type { Meta, StoryObj } from '@storybook/react';
import { ImageCard } from './image-card';
import type { ImageCardProps } from './image-card';
import image from '@/shared/assets/images/test-image.jpg';

const imageCardProps: ImageCardProps = {
  description: 'description',
  href: '#',
  imageAlt: 'site preview',
  imageSrc: image,
  title: 'title'
};

const meta: Meta<typeof ImageCard> = {
  component: ImageCard,
  tags: ['autodocs'],
  title: 'UI/Cards/ImageCard'
};

export default meta;
type Story = StoryObj<typeof ImageCard>;
const ImageCardTemplate: Story = { render: (args) => <ImageCard {...args} /> };

export const Playground = { ...ImageCardTemplate };
Playground.args = imageCardProps;
