import type { Metadata } from 'next';
import '@/app/styles/global.css';
import { nunito } from '@/app/styles';
import { cn } from '@/src/shared/utils/helpers';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Footer, Header } from '@/src/widgets/navigation';

export const metadata: Metadata = {
  description: 'Команда по разработке веб-сайтов.',
  title: { default: 'Web Solid', template: '%s | Web Solid' }
};

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang='ru'>
    <body className={cn(nunito.variable, 'min-h-dvh w-dvw overflow-x-hidden')}>
      <div className='mx-auto flex max-w-[1240px] flex-col justify-center gap-10 px-[10px] md:px-5'>
        <Header />
        {children}
        <Footer />
      </div>
      <Analytics />
      <SpeedInsights />
    </body>
  </html>
);

export default RootLayout;

// TODO: Поставить lint-staged, хаски и настроить пре коммит хук
