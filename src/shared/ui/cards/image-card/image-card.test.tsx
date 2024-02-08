import { render, screen } from '@testing-library/react';
import { IMAGE_CARD_TEST_IDS, ImageCard } from './image-card';
import type { ImageCardProps } from './image-card';
import testImage from '@/shared/assets/images/test-preview.jpg';

const imageCardProps = {
  description: 'description',
  href: '/',
  imageAlt: 'site preview',
  imageSrc: testImage,
  title: 'title'
} satisfies ImageCardProps;

describe('ImageCard', () => {
  test('should display container', () => {
    render(<ImageCard {...imageCardProps} />);

    const container = screen.getByTestId(IMAGE_CARD_TEST_IDS.CONTAINER);

    expect(container).toBeInTheDocument();
  });

  test('should display image', () => {
    render(<ImageCard {...imageCardProps} />);

    const image = screen.getByTestId(IMAGE_CARD_TEST_IDS.IMAGE);

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('alt', imageCardProps.imageAlt);
  });

  test('should display content', () => {
    render(<ImageCard {...imageCardProps} />);

    const textContainer = screen.getByTestId(IMAGE_CARD_TEST_IDS.TEXT_CONTAINER);

    expect(textContainer).toBeInTheDocument();

    const title = textContainer.querySelector(`[data-testid="${IMAGE_CARD_TEST_IDS.TITLE}"]`);
    expect(title).toBeInTheDocument();
    expect(title?.textContent).toBe(imageCardProps.title);

    const description = textContainer.querySelector(
      `[data-testid="${IMAGE_CARD_TEST_IDS.DESCRIPTION}"]`
    );
    expect(description).toBeInTheDocument();
    expect(description?.textContent).toBe(imageCardProps.description);
  });
});
