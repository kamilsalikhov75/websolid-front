'use client';

import clsx from 'clsx';
import type { LinkProps } from 'next/link';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface NavLinkProps extends LinkProps {
  children: React.ReactNode;
}

export const NAV_LINK_TEST_IDS = { CHILDREN: 'navLink-children', CONTAINER: 'navLink-container' };

export const NavLink = ({ children, href, ...props }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      data-testid={NAV_LINK_TEST_IDS.CONTAINER}
      href={href}
      className={clsx('body-lg border-b-2 p-1 transition-colors hover:text-black', {
        'border-b-blue-500 text-black': isActive,
        'border-b-transparent text-grey': !isActive
      })}
      {...props}
    >
      <span data-testid={NAV_LINK_TEST_IDS.CHILDREN}>{children}</span>
    </Link>
  );
};
