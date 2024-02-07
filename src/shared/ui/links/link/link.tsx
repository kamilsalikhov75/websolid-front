import NextLink from 'next/link';
import type { LinkProps as NextLinkProps } from 'next/link';

export interface LinkProps extends NextLinkProps {
  /**
   * icon
   */
  icon?: React.ReactNode;
  /**
   * children
   */
  children?: React.ReactNode;
}

export const LINK_TEST_IDS = {
  CHILDREN: 'link-children',
  CONTAINER: 'link-container',
  ICON: 'link-icon'
};

export const Link = ({ icon, children, ...props }: LinkProps) => (
  <NextLink
    className='flex items-center gap-[10px]'
    data-testid={LINK_TEST_IDS.CONTAINER}
    {...props}
  >
    {icon && <span data-testid={LINK_TEST_IDS.ICON}>{icon}</span>}
    <span data-testid={LINK_TEST_IDS.CHILDREN}>{children}</span>
  </NextLink>
);

// TODO: написать тесты