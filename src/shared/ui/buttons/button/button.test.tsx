import { render, screen } from '@testing-library/react';
import { BUTTON_TEST_IDS, Button } from './button';
import type { ButtonProps } from './button';

const buttonProps = {
  children: 'text'
} satisfies ButtonProps;

describe('Button', () => {
  test('should display container', () => {
    render(<Button {...buttonProps} />);

    const container = screen.getByTestId(BUTTON_TEST_IDS.CONTAINER);

    expect(container).toBeInTheDocument();
  });

  test('should display children', () => {
    render(<Button {...buttonProps} />);

    const children = screen.getByTestId(BUTTON_TEST_IDS.CHILDREN);

    expect(children).toBeInTheDocument();
    expect(children).toHaveTextContent(buttonProps.children);
  });
});
