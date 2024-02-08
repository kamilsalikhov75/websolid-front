import NextLink from 'next/link';
import type { LinkProps as NextLinkProps } from 'next/link';

export type IconLinkProps = {
  icon: React.ReactNode;
} & NextLinkProps &
  ReactTagProps<'a'>;

export const IconLink = ({ icon, ...props }: IconLinkProps) => (
  <NextLink
    className='flex h-[30px] w-[30px] items-center justify-center rounded-full bg-blue-500'
    {...props}
  >
    {icon}
  </NextLink>
);

// TODO: написать тесты
