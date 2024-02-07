import { render, screen } from '@testing-library/react';
import { ICON_BUTTON_TEST_IDS, IconButton } from './icon-button';
import type { IconButtonProps } from './icon-button';

const iconButtonProps = {
  icon: <div>icon</div>,
  onClick: jest.fn()
} satisfies IconButtonProps;

describe('Icon BUtton', () => {
  test('should display container', () => {
    render(<IconButton {...iconButtonProps} />);

    const container = screen.getByTestId(ICON_BUTTON_TEST_IDS.CONTAINER);

    expect(container).toBeInTheDocument();
  });

  test('should display icon', () => {
    render(<IconButton {...iconButtonProps} />);

    const icon = screen.getByTestId(ICON_BUTTON_TEST_IDS.ICON);

    expect(icon).toBeInTheDocument();
  });
});
