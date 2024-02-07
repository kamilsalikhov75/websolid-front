import type { Metadata } from 'next';
import '@/app/styles/global.css';
import { nunito } from '@/app/styles';
import { cn } from '@/src/shared/utils';

export const metadata: Metadata = {
  description: 'Generated by create next app',
  title: { default: 'Web Solid', template: '%s | Web Solid' }
};

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang='ru'>
    <body className={cn(nunito.variable, 'w-dvw min-h-dvh overflow-x-hidden')}>{children}</body>
  </html>
);

export default RootLayout;
