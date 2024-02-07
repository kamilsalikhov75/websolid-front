import type { Metadata } from 'next';
import '@/app/styles/global.css';
import { nunito } from '@/app/styles';
import { cn } from '@/src/shared/utils';
import { Analytics } from '@vercel/analytics/react';

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
    <body className={cn(nunito.variable, 'min-h-dvh w-dvw overflow-x-hidden')}>
      {children}
      <Analytics />
    </body>
  </html>
);

export default RootLayout;
