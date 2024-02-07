import { Footer, Header } from '@/widgets/navigation';

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <div className='mx-auto max-w-[1240px] px-[10px] md:px-5'>
    <Header />
    {children}
    <Footer />
  </div>
);

export default RootLayout;
