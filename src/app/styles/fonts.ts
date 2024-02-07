import { Nunito } from 'next/font/google';

export const nunito = Nunito({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-nunito',
  weight: ['400', '700', '800']
});
