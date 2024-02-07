import { BackgroundIcons } from '@/pages/home';
import { Footer, Header } from '@/widgets/navigation';

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <>
    <BackgroundIcons />
    <div className='mx-auto flex max-w-[1240px] flex-col justify-center gap-10 px-[10px] md:px-5'>
      <Header />
      {children}
      <Footer />
    </div>
  </>
);

export default RootLayout;
