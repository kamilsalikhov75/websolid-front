import { render, screen } from '@testing-library/react';
import { NAV_LINK_TEST_IDS, NavLink } from './nav-link';
import type { NavLinkProps } from './nav-link';

const navLinkProps = {
  children: 'text',
  href: '/'
} satisfies NavLinkProps;

describe('LinkButton', () => {
  test('should display container', () => {
    render(<NavLink {...navLinkProps} />);

    const container = screen.getByTestId(NAV_LINK_TEST_IDS.CONTAINER);

    expect(container).toBeInTheDocument();
  });

  test('should display children', () => {
    render(<NavLink {...navLinkProps} />);

    const children = screen.getByTestId(NAV_LINK_TEST_IDS.CHILDREN);

    expect(children).toBeInTheDocument();
    expect(children).toHaveTextContent(navLinkProps.children);
  });

  // test('should display correct classes to active link', () => {
  //   const classNames = 'text-black border-b-blue-500';
  //   render(<NavLink {...navLinkProps} />);

  //   const container = screen.getByTestId(NAV_LINK_TEST_IDS.CONTAINER);

  //   expect(container).toHaveClass(classNames);
  // });
});
