import { render, screen } from '@testing-library/react';
import { CARD_TEST_IDS, Card } from './card';
import type { CardProps } from './card';

const cardProps = {
  children: 'chidlren'
} satisfies CardProps;

describe('Icon BUtton', () => {
  test('should display container', () => {
    render(<Card {...cardProps} />);

    const container = screen.getByTestId(CARD_TEST_IDS.CONTAINER);

    expect(container).toBeInTheDocument();
  });

  test('should display chidlren', () => {
    render(<Card {...cardProps} />);

    const children = screen.getByTestId(CARD_TEST_IDS.CHILDREN);

    expect(children).toBeInTheDocument();
    expect(children.textContent).toBe(cardProps.children);
  });
});
