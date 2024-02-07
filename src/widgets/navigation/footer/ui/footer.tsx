import {
  Logo,
  Typography,
  Link,
  CallIcon,
  MailIcon,
  IconLink,
  VKIcon,
  TelegramIcon,
  WhatsappIcon
} from '@/shared/ui';
import { CONTACTS } from '@/src/shared/consts';
import { FOOTER_BLOCKS } from '../model/meta';

export const Footer = () => (
  <footer className='flex flex-wrap items-start justify-between gap-10 py-10'>
    <div className='flex flex-col gap-5'>
      <div className='flex flex-col gap-4'>
        <Link href='/'>
          <Logo />
        </Link>
        <Typography tag='p' variant='body-base'>
          Команда по разработке веб-сайтов.
        </Typography>
      </div>
      <div className='flex flex-col gap-[10px]'>
        <Link href={`tel:${CONTACTS.PHONE_NUMBER}`} icon={<CallIcon />}>
          <Typography tag='span' variant='body-base'>
            {CONTACTS.PHONE_NUMBER}
          </Typography>
        </Link>
        <Link href={`mailto:${CONTACTS.MAIL}`} icon={<MailIcon />}>
          <Typography tag='span' variant='body-base'>
            {CONTACTS.MAIL}
          </Typography>
        </Link>
        <div className='flex gap-5'>
          <IconLink href={CONTACTS.VK} icon={<VKIcon />} />
          <IconLink href={CONTACTS.TELEGRAM} icon={<TelegramIcon />} />
          <IconLink href={CONTACTS.WHATSAPP} icon={<WhatsappIcon />} />
        </div>
      </div>
      <Typography className='text-blue-500' tag='p' variant='body-sm'>
        © 2024 Web Solid. Все права защищены.
      </Typography>
    </div>
    <div className='flex flex-wrap justify-between gap-10 md:gap-20'>
      {FOOTER_BLOCKS.map((footerBlock, index) => (
        <div key={index} className='flex flex-col gap-6'>
          <Typography tag='h4' variant='body-lg'>
            {footerBlock.label}
          </Typography>
          <div className='flex flex-col gap-4'>
            {footerBlock.routes.map((route, routeIndex) => (
              <Link key={routeIndex} href={route.href}>
                <Typography className='text-blue-500' tag='span' variant='body-lg'>
                  {route.label}
                </Typography>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  </footer>
);
