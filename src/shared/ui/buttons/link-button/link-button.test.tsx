import { render, screen } from '@testing-library/react';
import { LINK_BUTTON_TEST_IDS, LinkButton } from './link-button';
import type { LinkButtonProps } from './link-button';

const linkButtonProps = {
  children: 'text',
  href: '/'
} satisfies LinkButtonProps;

describe('LinkButton', () => {
  test('should display container', () => {
    render(<LinkButton {...linkButtonProps} />);

    const container = screen.getByTestId(LINK_BUTTON_TEST_IDS.CONTAINER);

    expect(container).toBeInTheDocument();
  });

  test('should display children', () => {
    render(<LinkButton {...linkButtonProps} />);

    const children = screen.getByTestId(LINK_BUTTON_TEST_IDS.CHILDREN);

    expect(children).toBeInTheDocument();
    expect(children).toHaveTextContent(linkButtonProps.children);
  });
});
