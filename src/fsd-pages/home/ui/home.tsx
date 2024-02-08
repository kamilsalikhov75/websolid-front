import { HeroIcon, Card, ScrollIcon, Typography } from '@/shared/ui';
import { SERVICES } from '../model/meta';
import { BackgroundIcons } from './background';

export const Home = () => (
  <>
    <BackgroundIcons />
    <main className='flex flex-col gap-10'>
      <div className='flex flex-col gap-5 md:flex-row-reverse'>
        <HeroIcon className='h-full w-full' />
        <div className='flex flex-col gap-5'>
          <Typography className='lg:title-1 uppercase text-blue-500' tag='h1' variant='title-2'>
            РАЗРАБОТКА САЙТОВ И ВЕБ-ПРИЛОЖЕНИЙ НА ЗАКАЗ
          </Typography>
          <Typography tag='p' variant='body-xl'>
            Мы креативная команда, создающая качественный веб-сайты с класным дизайном
          </Typography>
        </div>
      </div>
      <div>
        <Typography className='mb-5 uppercase' tag='h1' variant='title-2'>
          НАШИ УСЛУГИ
        </Typography>
        <div className='flex flex-col gap-[10px]'>
          <div className='grid snap-x snap-mandatory auto-cols-max grid-flow-col gap-[10px] overflow-x-auto sm:grid-flow-row sm:grid-cols-2 sm:overflow-visible'>
            {SERVICES.map((service, index) => (
              <Card key={index} className='w-[calc(100vw-20px)] snap-center sm:w-full'>
                <Typography tag='h3' variant='body-2xl'>
                  {service.title}
                </Typography>
                <Typography tag='p' variant='body-lg'>
                  {service.description}
                </Typography>
              </Card>
            ))}
          </div>
          <ScrollIcon className='self-center sm:hidden' />
        </div>
      </div>
    </main>
  </>
);
