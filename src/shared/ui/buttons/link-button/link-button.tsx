import type { LinkProps } from 'next/link';
import Link from 'next/link';

export interface LinkButtonProps extends LinkProps {
  children: React.ReactNode;
}

export const LINK_BUTTON_TEST_IDS = {
  CHILDREN: 'linkButton-children',
  CONTAINER: 'linkButton-container'
};

export const LinkButton = ({ children, ...props }: LinkButtonProps) => (
  <Link
    className='flex w-full justify-center rounded-full bg-blue-500 px-5 py-[10px] transition-colors hover:bg-blue-300'
    data-testid={LINK_BUTTON_TEST_IDS.CONTAINER}
    {...props}
  >
    <span className='body-lg text-white' data-testid={LINK_BUTTON_TEST_IDS.CHILDREN}>
      {children}
    </span>
  </Link>
);
