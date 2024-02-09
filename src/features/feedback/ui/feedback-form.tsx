import { Button, Input, MaskedInput, Typography } from '@/shared/ui';

export const FeedbackForm = () => (
  <form action='' className='flex flex-col gap-5'>
    <Typography variant='title-3'>
      Оставьте контактные данные и мы скоро свяжемся с вами!
    </Typography>
    <Input label='Имя' placeholder='Ваше имя' />
    <MaskedInput label='Номер телефона' maskType='phone' placeholder='Телефон для связи' />
    <Button>Отправить заявку</Button>
  </form>
);
